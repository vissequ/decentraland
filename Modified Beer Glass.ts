//This is a modified script from the DCL Beer Dispenser repo to add some animations and sound effects. You'll need to edit your scene.json to add:

//  "requiredPermissions": [
//    "ALLOW_TO_TRIGGER_AVATAR_EMOTE"
// ],

import * as utils from '@dcl/ecs-scene-utils'
import { CreateSound } from './sound'
import { currentPlayerId } from './trackPlayers'
import { sceneMessageBus } from 'src/modules/messageBus'
import { getPickedUpItem, PickedUp } from './pickup'
import { getEntityWithId, SyncId } from './syncId'

// Track player's state
export enum BeerType {
  NONE = 'Blank',
  RED_BEER = 'PourRed',
  YELLOW_BEER = 'PourYellow',
  GREEN_BEER = 'PourGreen'
}

// Sound
const swallowSound = CreateSound(new AudioClip('sounds/swallow.mp3'))
const burpSound = CreateSound(new AudioClip('sounds/burp.mp3'))

@Component('glasData')
export class GlassData {
  beerType: BeerType = BeerType.NONE
  isFull: boolean = false
  holdPosition: Vector3
  isBeingFilled: boolean = false
  constructor(beerType: BeerType, isFull?: boolean, holdPosition?: Vector3) {
    this.beerType = beerType
    this.isFull = isFull ? isFull : false
    this.holdPosition = holdPosition ? holdPosition : new Vector3(0, -0.75, 0.4)
  }
}

export const beerGlasses = engine.getComponentGroup(GlassData)

export function CreateBeerGlass(
  id: string,
  model: GLTFShape,
  position: Vector3,
  holdPosition: Vector3
) {
  const glass = new Entity()
  glass.addComponent(new Transform({ position: position }))

  glass.addComponent(new SyncId(id))

  glass.addComponent(new GlassData(BeerType.NONE, false, holdPosition))

  glass.addComponent(model)

  engine.addEntity(glass)

  glass.addComponent(new Animator())
  glass
    .getComponent(Animator)
    .addClip(new AnimationState('Blank', { looping: false }))
  glass
    .getComponent(Animator)
    .addClip(new AnimationState('PourRed', { looping: false }))
  glass
    .getComponent(Animator)
    .addClip(new AnimationState('PourYellow', { looping: false }))
  glass
    .getComponent(Animator)
    .addClip(new AnimationState('PourGreen', { looping: false }))
  glass.getComponent(Animator).getClip('Blank').play()

  glass.addComponent(
    new OnPointerDown(
      (_e) => {
        if (
          currentPlayerId !== undefined &&
          //   !checkIfHolding(currentPlayerId) &&
          !glass.getComponent(GlassData).isBeingFilled
        ) {
          glass.addComponentOrReplace(
            new PickedUp(currentPlayerId, {
              holdPosition: new Vector3(.2,-1.2,.3), //glass.getComponent(GlassData).holdPosition,
              lastPos: glass.getComponent(Transform).position,
              pickUpSound: 'sounds/pickUp.mp3',
              putDownSound: 'sounds/putDown.mp3'
            })
          )
        }
      },
      {
        button: ActionButton.PRIMARY,
        showFeedback: true,
        hoverText: 'pick up'
      }
    )
  )

///// FOR DEBUG: DISPLAY NUMBERS ON BEERS
//const label = new Entity()
//label.setParent(glass)
//label.addComponent(
//  new Transform({
//    position: new Vector3(0, 0.25, 0),
//    scale: new Vector3(0.1, 0.1, 0.1)
//  })
//)
//label.addComponent(new TextShape(glass.getComponent(SyncId).id.toString()))
//return glass
}

// text

//const myEntity = new Entity()
//const myText = new TextShape("Hello World!")
//myEntity.addComponent(myText)

// drink


Input.instance.subscribe('BUTTON_DOWN', ActionButton.SECONDARY, false, () => {
  const pickedUpItem = getPickedUpItem(currentPlayerId) as Entity
  if (!pickedUpItem) return
  if ( 
    (pickedUpItem.getComponent(SyncId).id,
    pickedUpItem.getComponent(GlassData).isFull)
  ) {
    sceneMessageBus.emit('BeerGlassDrink', {
      id: pickedUpItem.getComponent(SyncId).id
    })
  }
})

import { triggerEmote, PredefinedEmote } from "@decentraland/RestrictedActions"

// this runs when "F" is pressed but only if beer is full
sceneMessageBus.on('BeerGlassDrink', (data: { id: string }) => {
  const beer: Entity = getEntityWithId(data.id) as Entity
  
  if (!beer) return
  
  //glass.position = glass.position + new Vector3(0,4,0)
  
  swallowSound.getComponent(AudioSource).playOnce()
  
  beer.getComponent(GlassData).isFull = false
  beer.getComponent(Animator).getClip('Blank').play()

//beer.position = beer.position + new Vector3(0,4,0)
  
//const emoter = new Entity()
//emoter.addComponent(new BoxShape())
//emoter.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))
//emoter.addComponent(
//  )
  triggerEmote({ predefined: PredefinedEmote.HEAD_EXPLODDE })
  
//  engine.addEntity(emoter)
  
  let postDrinkEmotes = [
    PredefinedEmote.FIST_PUMP,
    PredefinedEmote.CLAP,
    PredefinedEmote.ROBOT,
    PredefinedEmote.RAISE_HAND,
    PredefinedEmote.KISS,
    PredefinedEmote.HANDS_AIR,
    PredefinedEmote.DONT_SEE,
    PredefinedEmote.DISCO,
    PredefinedEmote.DAB,
  ]
  let selectedEmote = PredefinedEmote.FIST_PUMP
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  let randomInt = getRandomInt(2)
  console.log(randomInt);
  // expected output: 0, 1
  
  //delay .5 seconds
  burpSound.addComponent(
    new utils.Delay(3500, () => {
      burpSound.getComponent(AudioSource).playOnce()
      //let indexNumber = Math.random(0,1)
      //random numbers in javascript is hard lol
      triggerEmote({ predefined: postDrinkEmotes[randomInt] })
      
    })
  )
  
  //log("test")

})

// pour beer
sceneMessageBus.on('BeerGlassPourAnim', (data: { id: string }) => {
  const beer = getEntityWithId(data.id)
  if (!beer) return

  beer
    .getComponent(Animator)
    .getClip(beer.getComponent(GlassData).beerType)
    .play()

  beer.getComponent(GlassData).isBeingFilled = true

  beer.getComponent(OnPointerDown).showFeedback = false

  beer.addComponentOrReplace(
    new utils.Delay(2500, () => {
      if (!beer) return
      beer.getComponent(GlassData).isFull = true
      beer.getComponent(GlassData).isBeingFilled = false
      beer.getComponent(OnPointerDown).showFeedback = true
    })
  )
})
