//Please contact vissequ#1301 on Discord if you require a scripter.

import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script2 from "../85cf3207-2792-4349-9938-21fd82ea2168/src/item"
import Script3 from "../3cf05054-0a57-4b00-ba77-a3f21876494d/src/item"
import Script4 from "../5caa95dd-9d2f-42e1-b935-0da1a287864a/src/item"
import Script5 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"
//import Script_1 from "../85cf3207-2792-4349-9938-21fd82ea2168/src/item"

import { CreateBeerGlass, BeerType, GlassData } from './modules/beerGlass'
import { CreateSound } from './modules/sound'

import { OnDropItem, PickUpSystem, putDownEventData } from './modules/pickup'
import { getEntityWithId, SyncId } from './modules/syncId'
import { createTap } from './modules/tap'

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

// Tables
const tables = new Entity()
//tables.addComponent(new GLTFShape('models/tables.glb'))
tables.addComponent(new Transform())
engine.addEntity(tables)

engine.addSystem(new PickUpSystem())

// Taps Base
const base = new Entity()
base.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
engine.addEntity(base)

// Beer glasses
const beerGlassShape = new GLTFShape('models/beerGlass.glb')

const beerHoldPosition = new Vector3(0, -0.1, 0.4)

let xadjust = .375
let zadjust = .09
// NOTE: We're matching the beer object's position in the array with the id
const beerGlass1 = CreateBeerGlass(
  'beer0',
  beerGlassShape,
  new Vector3(17-xadjust, .9, 6.6+zadjust),
  beerHoldPosition
)
const beerGlass2 = CreateBeerGlass(
  'beer1',
  beerGlassShape,
  new Vector3(17.25-xadjust, .9, 6.6+zadjust),
  beerHoldPosition
)
const beerGlass3 = CreateBeerGlass(
  'beer2',
  beerGlassShape,
  new Vector3(17.5-xadjust, .9, 6.6+zadjust),
  beerHoldPosition
)
const beerGlass4 = CreateBeerGlass(
  'beer3',
  beerGlassShape,
  new Vector3(18-xadjust, .9, 6.6+zadjust),
  beerHoldPosition
)
const beerGlass5 = CreateBeerGlass(
  'beer4',
  beerGlassShape,
  new Vector3(17.75-xadjust, .9, 6.6+zadjust),
  beerHoldPosition
)
//const beerGlass6 = CreateBeerGlass(
//'beer5',
//beerGlassShape,
//new Vector3(13.9, 0.8, 14.3),
//beerHoldPosition
//)
//const beerGlass7 = CreateBeerGlass(
//'beer6',
//beerGlassShape,
//new Vector3(14.5, 0.8, 2.5),
//beerHoldPosition
//)
//const beerGlass8 = CreateBeerGlass(
//'beer7',
//beerGlassShape,
//new Vector3(13.7, 0.8, 1.9),
//beerHoldPosition
//)
//const beerGlass9 = CreateBeerGlass(
//'beer8',
//beerGlassShape,
//new Vector3(2.4, 0.8, 1.5),
//beerHoldPosition
//)

// Dispenser
export const beerDispenser = new Entity()
beerDispenser.addComponent(new GLTFShape('models/beerDispenser.glb'))
beerDispenser.addComponent(
  new Transform({ position: new Vector3(17, 1.25, 5.9),
    rotation: new Quaternion(0,0,0,0),
  )
)
    
beerDispenser.getComponent(Transform).rotate(Vector3.Up(), 180)
engine.addEntity(beerDispenser)
beerDispenser.addComponent(new SyncId('beerDispenser1'))
beerDispenser.addComponentOrReplace(
  new OnDropItem(
    [
      'beer0',
      'beer1',
      'beer2',
      'beer3',
      'beer4',
      'beer5',
//    'beer6',
//    'beer7',
//    'beer8',
//    'beer9'
    ],
    (data: putDownEventData) => {
      log('Dropping beer in dispenser', data)
      
      //
      
      const pickedUpItem = getEntityWithId(data.pickedUpItem)
      const dropOnItem = getEntityWithId(data.dropOnItem)
      if (!pickedUpItem) return
      if (!dropOnItem) return
      
      // place beer under taps
      switch (data.hit.meshName) {
        case 'redBase_collider':
          pickedUpItem.setParent(dropOnItem)
        
          pickedUpItem.getComponent(Transform).position = new Vector3(
            0.368,
            0,
            0.31
          )
          pickedUpItem.getComponent(GlassData).beerType = BeerType.RED_BEER
          break
        case 'yellowBase_collider':
          pickedUpItem.setParent(dropOnItem)
          pickedUpItem.getComponent(Transform).position = new Vector3(
            0,
            0,
            0.31
          )
          pickedUpItem.getComponent(GlassData).beerType = BeerType.YELLOW_BEER
          break
        case 'greenBase_collider':
          pickedUpItem.setParent(dropOnItem)
          pickedUpItem.getComponent(Transform).position = new Vector3(
            -0.368,
            0,
            0.31
          )
          pickedUpItem.getComponent(GlassData).beerType = BeerType.GREEN_BEER
          break
      }
    }
  )
)
    
// Taps
const redTap = createTap(
  'tap1',
  new GLTFShape('models/redTap.glb'),
  BeerType.RED_BEER
)
redTap.setParent(beerDispenser)
    
const yellowTap = createTap(
  'tap2',
  new GLTFShape('models/yellowTap.glb'),
  BeerType.YELLOW_BEER
)
yellowTap.setParent(beerDispenser)
    
const greenTap = createTap(
  'tap3',
  new GLTFShape('models/greenTap.glb'),
  BeerType.GREEN_BEER
)
greenTap.setParent(beerDispenser)

// //streaming - main video

// // #1
// const myVideoClip = new VideoClip(
//   "./videos/video.m3u8"
// )

// // #2
// const myVideoTexture = new VideoTexture(myVideoClip)

// // #3
// const myMaterial = new Material()
// myMaterial.albedoTexture = myVideoTexture
// myMaterial.roughness = 1
// myMaterial.specularIntensity = 0
// myMaterial.metallic = 0


// // #4
// let screenAdjust = .325;
// const screen = new Entity()
// screen.addComponent(new PlaneShape())
// screen.addComponent(
//   new Transform({
//     position: new Vector3(8, 3.5, 8),
//     scale: new Vector3(16 * screenAdjust,9 * screenAdjust,1),
//     //rotation: Quaternion.Euler(0,90,0)
//   })
// )
// screen.addComponent(myMaterial)
// //screen.addComponent(
// //new OnPointerDown(() => {
// //  myVideoTexture.playing = !myVideoTexture.playing
// //})
// //)
// engine.addEntity(screen)

// // #5
// myVideoTexture.loop = true
// myVideoTexture.play()

const shopBlack = new Entity('shopBlack')
engine.addEntity(shopBlack)
shopBlack.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(5.24749755859375, 0, 12.162269592285156),
  rotation: new Quaternion(1.74662428888573e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
shopBlack.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("d3419855-54da-41a8-9267-656eb844ed91/Shop_Black.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
shopBlack.addComponentOrReplace(gltfShape)

const barBlack = new Entity('barBlack')
engine.addEntity(barBlack)
barBlack.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(20.303342819213867, 0, 10.66235637664795),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barBlack.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("17b9739f-a1d4-494c-8766-8429067d6b19/Bar_Black.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
barBlack.addComponentOrReplace(gltfShape2)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape3 = new GLTFShape("9be6610f-cf2b-47fc-a5bd-c9aa62ea6f8e/FloorFantasyRocks_01/FloorFantasyRocks_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
entity.addComponentOrReplace(gltfShape3)
const transform4 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform4)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape3)
const transform5 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform5)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(2.660402297973633, 0.9651897549629211, 9.720239639282227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5847206115722656, 1.5847206115722656, 1.5847206115722656)
})
imageFromURL.addComponentOrReplace(transform6)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(5.815314769744873, 0.9651897549629211, 9.720239639282227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.30049991607666, 1.5847206115722656, 1.5847206115722656)
})
imageFromURL2.addComponentOrReplace(transform7)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(4.489118576049805, 0.9001048803329468, 14.603079795837402),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(5.962709426879883, 1.5847206115722656, 1.5847206115722656)
})
imageFromURL3.addComponentOrReplace(transform8)

const rainLight = new Entity('rainLight')
engine.addEntity(rainLight)
rainLight.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(5.007241725921631, 1.0331472158432007, 12.097310066223145),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight.addComponentOrReplace(transform9)

const largeStoneFloor = new Entity('largeStoneFloor')
engine.addEntity(largeStoneFloor)
largeStoneFloor.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(17.15633773803711, 0, 12.142518043518066),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeStoneFloor.addComponentOrReplace(transform10)
const gltfShape4 = new GLTFShape("717323f7-72ff-48f4-b4ca-9afffb81aaa8/Stone_Module_4M/Stone_Module_4M.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
largeStoneFloor.addComponentOrReplace(gltfShape4)

const largeStoneFloor2 = new Entity('largeStoneFloor2')
engine.addEntity(largeStoneFloor2)
largeStoneFloor2.setParent(_scene)
largeStoneFloor2.addComponentOrReplace(gltfShape4)
const transform11 = new Transform({
  position: new Vector3(21.113204956054688, 0, 12.142518043518066),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeStoneFloor2.addComponentOrReplace(transform11)

const ropeLight = new Entity('ropeLight')
engine.addEntity(ropeLight)
ropeLight.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(17.21520233154297, 1.1883807182312012, 10.822931289672852),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5091239809989929, 1, 1)
})
ropeLight.addComponentOrReplace(transform12)

const stone = new Entity('stone')
engine.addEntity(stone)
stone.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(26.597164154052734, 0, 3.536980628967285),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stone.addComponentOrReplace(transform13)
const gltfShape5 = new GLTFShape("1a817329-54da-4581-8df7-3e6c6187dde1/Stone 4.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
stone.addComponentOrReplace(gltfShape5)

const sushiDisplay = new Entity('sushiDisplay')
engine.addEntity(sushiDisplay)
sushiDisplay.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(17.16963768005371, 1.2574470043182373, 10.318398475646973),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sushiDisplay.addComponentOrReplace(transform14)
const gltfShape6 = new GLTFShape("42a681af-3875-4b6b-bee0-0110441ca905/Sushi_Display.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
sushiDisplay.addComponentOrReplace(gltfShape6)

const ropeLight2 = new Entity('ropeLight2')
engine.addEntity(ropeLight2)
ropeLight2.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(17.07357406616211, 1.1883808374404907, 5.487417697906494),
  rotation: new Quaternion(-1.5684796016718762e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(0.5091239809989929, 1, 1)
})
ropeLight2.addComponentOrReplace(transform15)

const barBlack2 = new Entity('barBlack2')
engine.addEntity(barBlack2)
barBlack2.setParent(_scene)
barBlack2.addComponentOrReplace(gltfShape2)
const transform16 = new Transform({
  position: new Vector3(13.985433578491211, 2.384185791015625e-7, 5.6479926109313965),
  rotation: new Quaternion(-1.5684796016718762e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1, 1, 1)
})
barBlack2.addComponentOrReplace(transform16)

const largeStoneFloor3 = new Entity('largeStoneFloor3')
engine.addEntity(largeStoneFloor3)
largeStoneFloor3.setParent(_scene)
largeStoneFloor3.addComponentOrReplace(gltfShape4)
const transform17 = new Transform({
  position: new Vector3(17.13243865966797, 0, 4.167830944061279),
  rotation: new Quaternion(-1.5684796016718762e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1, 1, 1)
})
largeStoneFloor3.addComponentOrReplace(transform17)

const largeStoneFloor4 = new Entity('largeStoneFloor4')
engine.addEntity(largeStoneFloor4)
largeStoneFloor4.setParent(_scene)
largeStoneFloor4.addComponentOrReplace(gltfShape4)
const transform18 = new Transform({
  position: new Vector3(13.17557144165039, 0, 4.167830944061279),
  rotation: new Quaternion(-1.5684796016718762e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1, 1, 1)
})
largeStoneFloor4.addComponentOrReplace(transform18)

const sushiShelf2 = new Entity('sushiShelf2')
engine.addEntity(sushiShelf2)
sushiShelf2.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(20.34238624572754, 0, 7.367045879364014),
  rotation: new Quaternion(2.977848511125005e-15, 0.7071068286895752, -8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
})
sushiShelf2.addComponentOrReplace(transform19)
const gltfShape7 = new GLTFShape("45f97802-5b23-4e33-a150-44d250c570c0/Sushi_Shelf_2.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
sushiShelf2.addComponentOrReplace(gltfShape7)

const sushiSet = new Entity('sushiSet')
engine.addEntity(sushiSet)
sushiSet.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(20.52338409423828, 1.623428463935852, 7.575620174407959),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sushiSet.addComponentOrReplace(transform20)
const gltfShape8 = new GLTFShape("2f18c0b1-eee7-4c7b-b1f0-21df8143ca89/Sushi_Set_2.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
sushiSet.addComponentOrReplace(gltfShape8)

const sushiSet2 = new Entity('sushiSet2')
engine.addEntity(sushiSet2)
sushiSet2.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(20.375228881835938, 1.308652400970459, 8.818726539611816),
  rotation: new Quaternion(-1.1016110288921853e-15, -0.7672999501228333, 9.146927482106548e-8, 0.6412884593009949),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
sushiSet2.addComponentOrReplace(transform21)
const gltfShape9 = new GLTFShape("af2ee1de-eb6b-418b-92fb-7f13c7bc7ffb/Sushi_Set_1.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
sushiSet2.addComponentOrReplace(gltfShape9)

const sushiShelf = new Entity('sushiShelf')
engine.addEntity(sushiShelf)
sushiShelf.setParent(_scene)
sushiShelf.addComponentOrReplace(gltfShape7)
const transform22 = new Transform({
  position: new Vector3(20.488468170166016, 0, 9.004634857177734),
  rotation: new Quaternion(-9.78548534249276e-15, -0.7071068286895752, 8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447)
})
sushiShelf.addComponentOrReplace(transform22)

const gazebo = new Entity('gazebo')
engine.addEntity(gazebo)
gazebo.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(18.493629455566406, 0, 10.753211975097656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.3193793296813965, 1, 1)
})
gazebo.addComponentOrReplace(transform23)
const gltfShape10 = new GLTFShape("bb136e02-6af2-4332-9f14-4757bc26b183/Gazebo.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
gazebo.addComponentOrReplace(gltfShape10)

const gazebo2 = new Entity('gazebo2')
engine.addEntity(gazebo2)
gazebo2.setParent(_scene)
gazebo2.addComponentOrReplace(gltfShape10)
const transform24 = new Transform({
  position: new Vector3(15.879327774047852, 0, 5.490674018859863),
  rotation: new Quaternion(9.322461558139775e-15, -1, 1.1920928244535389e-7, -2.2351741790771484e-8),
  scale: new Vector3(1.3193793296813965, 1, 1)
})
gazebo2.addComponentOrReplace(transform24)

const floorBlack = new Entity('floorBlack')
engine.addEntity(floorBlack)
floorBlack.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(20.302587509155273, 4.816336631774902, 10.024564743041992),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5716955661773682, 1, 1)
})
floorBlack.addComponentOrReplace(transform25)
const gltfShape11 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
floorBlack.addComponentOrReplace(gltfShape11)

const openAndClosedSign = new Entity('openAndClosedSign')
engine.addEntity(openAndClosedSign)
openAndClosedSign.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(15.245424270629883, 4.392038345336914, 11.56599235534668),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
openAndClosedSign.addComponentOrReplace(transform26)

const smallCandleGauzeLantern = new Entity('smallCandleGauzeLantern')
engine.addEntity(smallCandleGauzeLantern)
smallCandleGauzeLantern.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(17.055389404296875, 3.749743938446045, 10.828542709350586),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
smallCandleGauzeLantern.addComponentOrReplace(transform27)
const gltfShape12 = new GLTFShape("3ea31ee2-9a60-4846-a1f5-c8b14419d8af/ChineseLantern_05/ChineseLantern_05.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
smallCandleGauzeLantern.addComponentOrReplace(gltfShape12)

const smallCandleGauzeLantern2 = new Entity('smallCandleGauzeLantern2')
engine.addEntity(smallCandleGauzeLantern2)
smallCandleGauzeLantern2.setParent(_scene)
smallCandleGauzeLantern2.addComponentOrReplace(gltfShape12)
const transform28 = new Transform({
  position: new Vector3(17.055389404296875, 3.749743938446045, 5.231423377990723),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
smallCandleGauzeLantern2.addComponentOrReplace(transform28)

const pinkAcaciaTree = new Entity('pinkAcaciaTree')
engine.addEntity(pinkAcaciaTree)
pinkAcaciaTree.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(28.692018508911133, 0, 4.501923084259033),
  rotation: new Quaternion(3.7932070848332045e-15, 0.7571926712989807, -9.026438618775501e-8, 0.6531916260719299),
  scale: new Vector3(1.000001311302185, 1, 1.000001311302185)
})
pinkAcaciaTree.addComponentOrReplace(transform29)
const gltfShape13 = new GLTFShape("aba03c47-8bd4-4679-9ed4-149129181d21/Tree_Forest_Pink_01/Tree_Forest_Pink_01.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
pinkAcaciaTree.addComponentOrReplace(gltfShape13)

const mediumEvergreenTurf2 = new Entity('mediumEvergreenTurf2')
engine.addEntity(mediumEvergreenTurf2)
mediumEvergreenTurf2.setParent(_scene)
const gltfShape14 = new GLTFShape("026035f3-5d12-495c-a422-d9405d5b414d/Grass_Module_2M/Grass_Module_2M.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
mediumEvergreenTurf2.addComponentOrReplace(gltfShape14)
const transform30 = new Transform({
  position: new Vector3(31.364805221557617, 0, 14.01535415649414),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.389838457107544, 1, 5.863410472869873)
})
mediumEvergreenTurf2.addComponentOrReplace(transform30)

const stone2 = new Entity('stone2')
engine.addEntity(stone2)
stone2.setParent(_scene)
stone2.addComponentOrReplace(gltfShape5)
const transform31 = new Transform({
  position: new Vector3(29.599655151367188, 0, 11.930814743041992),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stone2.addComponentOrReplace(transform31)

const rose = new Entity('rose')
engine.addEntity(rose)
rose.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(27.683616638183594, 0, 4.4393310546875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose.addComponentOrReplace(transform32)
const gltfShape15 = new GLTFShape("18bbb621-1c3e-4ee1-ba0a-a7c77dd01cbb/Flower_03/Flower_03.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
rose.addComponentOrReplace(gltfShape15)

const sunflowerHead = new Entity('sunflowerHead')
engine.addEntity(sunflowerHead)
sunflowerHead.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(30.470182418823242, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflowerHead.addComponentOrReplace(transform33)
const gltfShape16 = new GLTFShape("29198994-d436-4b4b-8314-cfa2c4306dd9/Flower_01/Flower_01.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
sunflowerHead.addComponentOrReplace(gltfShape16)

const largePond = new Entity('largePond')
engine.addEntity(largePond)
largePond.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(27.83673858642578, 0, 8.15200424194336),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largePond.addComponentOrReplace(transform34)
const gltfShape17 = new GLTFShape("622c9a64-8acc-4c24-bcf3-d9cd740a9c20/Pond_02/Pond_02.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
largePond.addComponentOrReplace(gltfShape17)

const plant = new Entity('plant')
engine.addEntity(plant)
plant.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(30.49590492248535, 0, 4.075751781463623),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant.addComponentOrReplace(transform35)
const gltfShape18 = new GLTFShape("ec8b2557-4819-4a6c-a443-2fe15e7e980a/Plant 2.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
plant.addComponentOrReplace(gltfShape18)

const sweetGeranium = new Entity('sweetGeranium')
engine.addEntity(sweetGeranium)
sweetGeranium.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(26.34417724609375, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sweetGeranium.addComponentOrReplace(transform36)
const gltfShape19 = new GLTFShape("402d227e-727e-4288-a29c-ed1ac77dc98a/Bush_Fantasy_04/Bush_Fantasy_04.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
sweetGeranium.addComponentOrReplace(gltfShape19)

const shopBlack2 = new Entity('shopBlack2')
engine.addEntity(shopBlack2)
shopBlack2.setParent(_scene)
shopBlack2.addComponentOrReplace(gltfShape)
const transform37 = new Transform({
  position: new Vector3(5.24749755859375, 0, 4.969184875488281),
  rotation: new Quaternion(1.74662428888573e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
shopBlack2.addComponentOrReplace(transform37)

// const ambientSound2 = new Entity('ambientSound2')
// engine.addEntity(ambientSound2)
// ambientSound2.setParent(_scene)
// const transform38 = new Transform({
//   position: new Vector3(17, 1.4730126857757568, 8.298965454101562),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// ambientSound2.addComponentOrReplace(transform38)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script1.spawn(imageFromURL, {"image":"https://lh3.googleusercontent.com/p_Xb31NbuYLzKcgTS_S4-gDLk2AtpUZMlBnRjP253RFoVZDsgpbg-Ou_foAyL1yedd2HICFVCTMcXMGOY2xp_m2YTSbCrJ9vdY2Mdg=w600"}, createChannel(channelId, imageFromURL, channelBus))
script1.spawn(imageFromURL2, {"image":"https://lh3.googleusercontent.com/1k04tDhijLGT1ioIdEvsklfGZfxSNYJQ5zLTRcjIoFlYAGFIm-6_DqKCoZOmQfKCcRDLP0YUD-4G0LZunr1znDEwYD_bcuY06FGwyeU=w600"}, createChannel(channelId, imageFromURL2, channelBus))
script1.spawn(imageFromURL3, {"image":"https://lh3.googleusercontent.com/TQMDHmuXDx8fEphds2dzZEVgLuW47OpjODCn_KTu7nrZhcjRJuvBZe_fwWnb_tOEUemlr3Q47ozjXPkOr-602_hyJbZbl9Rs1KqJDDI=w600"}, createChannel(channelId, imageFromURL3, channelBus))
script2.spawn(rainLight, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight, channelBus))
script3.spawn(ropeLight, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight, channelBus))
script3.spawn(ropeLight2, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight2, channelBus))
script4.spawn(openAndClosedSign, {"startOn":true,"clickable":true}, createChannel(channelId, openAndClosedSign, channelBus))
script5.spawn(ambientSound2, {"sound":"Town","active":true,"loop":true}, createChannel(channelId, ambientSound2, channelBus))