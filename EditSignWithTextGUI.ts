import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const cube = new Entity()

// set a transform to the entity
cube.addComponent(new Transform({ position: new Vector3(8, 1, 2) }))

// set a shape to the entity
cube.addComponent(new BoxShape())

// add the entity to the engine
engine.addEntity(cube)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(9.5, 0.9746065139770508, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.469682455062866, 3.469682455062866, 0.001)
})
plainText.addComponentOrReplace(transform3)

cube.getComponent(BoxShape).visible = false
const testText = new TextShape("Test")
cube.addComponentOrReplace(testText)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
script1.init(options)
script1.spawn(plainText, {"text":"Some text","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))

const canvas = new UICanvas()

const textInput = new UIInputText(canvas)
textInput.width = "40%"
textInput.height = "25px"
textInput.vAlign = "bottom"
textInput.hAlign = "center"
textInput.fontSize = 14
textInput.placeholder = "Write store name here then press enter"
textInput.placeholderColor = Color4.Gray()
textInput.positionY = "200px"
textInput.isPointerBlocker = true

textInput.onTextSubmit = new OnTextSubmit((x) => {
  const text = new UIText(textInput)
  text.value = " "//"<USER-ID> " + x.text
  text.width = "100%"
  text.height = "20px"
  text.vAlign = "top"
  text.hAlign = "left"
  const testText2 = new TextShape(x.text)
  cube.addComponentOrReplace(testText2)
  textInput.placeholder = "Write store name here then press enter"
})

const toggleMenuButton = new UIImage(canvas, new Texture("images/0.png"))
toggleMenuButton.name = "clickable-image"
toggleMenuButton.width = "50px"
toggleMenuButton.height = "25px"
toggleMenuButton.opacity = 1
toggleMenuButton.sourceWidth = 92
toggleMenuButton.sourceHeight = 92
toggleMenuButton.isPointerBlocker = true
toggleMenuButton.vAlign = "middle"
//toggleMenuButton.positionY = 0
toggleMenuButton.hAlign = "left"
//toggleMenuButton.positionX = -660
toggleMenuButton.onClick = new OnClick(() => {
  if (textInput.visible == true) {
    textInput.visible = false
  }
  else if (textInput.visible == false) {
    textInput.visible = true
  }
}
