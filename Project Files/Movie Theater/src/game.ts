import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script2 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script3 from "../d14b0ff2-0c2e-47c3-841c-05649e680822/src/item"
import Script4 from "../03829f2d-a9ab-4292-aa97-6f51a02b3ba9/src/item"
import Script5 from "../89d3e0e7-b9cd-406e-bd95-8abba3b37cc6/src/item"
import Script6 from "../76d3a347-02b1-4c74-bbf3-7787ede6a3b1/src/item"
import Script7 from "../504cd7ac-2873-40d8-9172-13c9c24304b0/src/item"

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

const concreteWall = new Entity('concreteWall')
engine.addEntity(concreteWall)
concreteWall.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(15.5, 0, 15.552469253540039),
  rotation: new Quaternion(1.539415254273621e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(7.5660014152526855, 2.1873555183410645, 1)
})
concreteWall.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("53aa3052-ccd7-4a05-be3f-f840acbff99e/Concrete_Wall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
concreteWall.addComponentOrReplace(gltfShape2)

const concreteWall2 = new Entity('concreteWall2')
engine.addEntity(concreteWall2)
concreteWall2.setParent(_scene)
concreteWall2.addComponentOrReplace(gltfShape2)
const transform4 = new Transform({
  position: new Vector3(0.28870201110839844, 0, 15.651006698608398),
  rotation: new Quaternion(1.539415254273621e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(2.797839403152466, 2.1873555183410645, 1)
})
concreteWall2.addComponentOrReplace(transform4)

const concreteWall3 = new Entity('concreteWall3')
engine.addEntity(concreteWall3)
concreteWall3.setParent(_scene)
concreteWall3.addComponentOrReplace(gltfShape2)
const transform5 = new Transform({
  position: new Vector3(15.279997825622559, 0, 15.33242416381836),
  rotation: new Quaternion(-1.539415254273621e-15, 0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(-0.1696457415819168, 2.1873555183410645, -48.999752044677734)
})
concreteWall3.addComponentOrReplace(transform5)

const concreteWall4 = new Entity('concreteWall4')
engine.addEntity(concreteWall4)
concreteWall4.setParent(_scene)
concreteWall4.addComponentOrReplace(gltfShape2)
const transform6 = new Transform({
  position: new Vector3(15.219012260437012, 0, 0.3324241638183594),
  rotation: new Quaternion(-1.539415254273621e-15, 0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(-0.1696457415819168, 2.1873555183410645, -48.54927444458008)
})
concreteWall4.addComponentOrReplace(transform6)

const concreteWall5 = new Entity('concreteWall5')
engine.addEntity(concreteWall5)
concreteWall5.setParent(_scene)
concreteWall5.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(15.768319129943848, 0, 0.3324241638183594),
  rotation: new Quaternion(-1.539415254273621e-15, 0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(-7.654627323150635, 0.021607983857393265, -52.10918426513672)
})
concreteWall5.addComponentOrReplace(transform7)

const concreteWall6 = new Entity('concreteWall6')
engine.addEntity(concreteWall6)
concreteWall6.setParent(_scene)
concreteWall6.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(0.28870201110839844, 0, 5.950057506561279),
  rotation: new Quaternion(1.539415254273621e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(2.797839403152466, 2.1873555183410645, 1)
})
concreteWall6.addComponentOrReplace(transform8)

const concreteWall7 = new Entity('concreteWall7')
engine.addEntity(concreteWall7)
concreteWall7.setParent(_scene)
concreteWall7.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(0.28870201110839844, 4.023952007293701, 10.056288719177246),
  rotation: new Quaternion(1.539415254273621e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(2.0893001556396484, 1.1783661842346191, 1)
})
concreteWall7.addComponentOrReplace(transform9)

const concreteWall8 = new Entity('concreteWall8')
engine.addEntity(concreteWall8)
concreteWall8.setParent(_scene)
concreteWall8.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(2.968252182006836, 0, 12.788382530212402),
  rotation: new Quaternion(1.539415254273621e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(4.71872091293335, 2.1873555183410645, 1)
})
concreteWall8.addComponentOrReplace(transform10)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(0.17319150269031525, 0.9130606651306152, 12.883116722106934),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.831157922744751, 2.444775342941284, 1.831157922744751)
})
imageFromURL.addComponentOrReplace(transform11)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(0.0912942886352539, 5.5471391677856445, 8.409452438354492),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(11.617786407470703, 11.617786407470703, 11.617786407470703)
})
plainText.addComponentOrReplace(transform12)

const rug = new Entity('rug')
engine.addEntity(rug)
rug.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(1.6340065002441406, 0.08561038970947266, 7.804895877838135),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
rug.addComponentOrReplace(transform13)
const gltfShape3 = new GLTFShape("bf08e109-d3ef-42d2-8691-7817449a8a3d/Carpet_03/Carpet_03.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
rug.addComponentOrReplace(gltfShape3)

const couchTwoSeater = new Entity('couchTwoSeater')
engine.addEntity(couchTwoSeater)
couchTwoSeater.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(4.609145164489746, 0, 4.312286853790283),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
couchTwoSeater.addComponentOrReplace(transform14)
const gltfShape4 = new GLTFShape("c28761f2-759f-4b9a-b497-9dfcabf3aa3f/TwoSeater_Couch.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
couchTwoSeater.addComponentOrReplace(gltfShape4)

const couchTwoSeater2 = new Entity('couchTwoSeater2')
engine.addEntity(couchTwoSeater2)
couchTwoSeater2.setParent(_scene)
couchTwoSeater2.addComponentOrReplace(gltfShape4)
const transform15 = new Transform({
  position: new Vector3(4.609145164489746, 0, 9.358299255371094),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
couchTwoSeater2.addComponentOrReplace(transform15)

const druidWoodenRoundTable = new Entity('druidWoodenRoundTable')
engine.addEntity(druidWoodenRoundTable)
druidWoodenRoundTable.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(4, 0.054686546325683594, 8.05210018157959),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7577180862426758, 0.7577180862426758, 0.7577180862426758)
})
druidWoodenRoundTable.addComponentOrReplace(transform16)
const gltfShape5 = new GLTFShape("51e9b337-1795-40ba-9177-e5d613fa8a7c/WoodRoundTable_01/WoodRoundTable_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
druidWoodenRoundTable.addComponentOrReplace(gltfShape5)

const roundedStarlightRug = new Entity('roundedStarlightRug')
engine.addEntity(roundedStarlightRug)
roundedStarlightRug.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(9.551336288452148, 0.055281639099121094, 8.064867973327637),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roundedStarlightRug.addComponentOrReplace(transform17)
const gltfShape6 = new GLTFShape("0b906173-5b55-4c95-9a53-9d9c6ba21fe0/Carpet_02/Carpet_02.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
roundedStarlightRug.addComponentOrReplace(gltfShape6)

const roundWallLight = new Entity('roundWallLight')
engine.addEntity(roundWallLight)
roundWallLight.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(7.043842315673828, 2.8429081439971924, 0.6755666732788086),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roundWallLight.addComponentOrReplace(transform18)

const roundWallLight2 = new Entity('roundWallLight2')
engine.addEntity(roundWallLight2)
roundWallLight2.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(7.000577926635742, 2.8429081439971924, 15.346331596374512),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
roundWallLight2.addComponentOrReplace(transform19)

const roundWallLight3 = new Entity('roundWallLight3')
engine.addEntity(roundWallLight3)
roundWallLight3.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(11.41244888305664, 2.8429081439971924, 15.346331596374512),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
roundWallLight3.addComponentOrReplace(transform20)

const roundWallLight4 = new Entity('roundWallLight4')
engine.addEntity(roundWallLight4)
roundWallLight4.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(11.58792781829834, 2.8429081439971924, 0.6755666732788086),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roundWallLight4.addComponentOrReplace(transform21)

const floorBlack = new Entity('floorBlack')
engine.addEntity(floorBlack)
floorBlack.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(15.564518928527832, 0.06523609161376953, 15.537403106689453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.1472039222717285, 1, 3.803166389465332)
})
floorBlack.addComponentOrReplace(transform22)
const gltfShape7 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
floorBlack.addComponentOrReplace(gltfShape7)

const pillarAntique = new Entity('pillarAntique')
engine.addEntity(pillarAntique)
pillarAntique.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(0.6556055545806885, 0.07111525535583496, 6.334286689758301),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillarAntique.addComponentOrReplace(transform23)
const gltfShape8 = new GLTFShape("3cb8e3d5-db5a-4a85-82c0-9632faec57e8/AntiquePillar.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
pillarAntique.addComponentOrReplace(gltfShape8)

const pillarAntique2 = new Entity('pillarAntique2')
engine.addEntity(pillarAntique2)
pillarAntique2.setParent(_scene)
pillarAntique2.addComponentOrReplace(gltfShape8)
const transform24 = new Transform({
  position: new Vector3(0.6556055545806885, 0.07111525535583496, 10.194684982299805),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillarAntique2.addComponentOrReplace(transform24)

const pillarAntique3 = new Entity('pillarAntique3')
engine.addEntity(pillarAntique3)
pillarAntique3.setParent(_scene)
pillarAntique3.addComponentOrReplace(gltfShape8)
const transform25 = new Transform({
  position: new Vector3(0.6556055545806885, 0.07111525535583496, 15.820748329162598),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.220567464828491, 1)
})
pillarAntique3.addComponentOrReplace(transform25)

const pillarAntique4 = new Entity('pillarAntique4')
engine.addEntity(pillarAntique4)
pillarAntique4.setParent(_scene)
pillarAntique4.addComponentOrReplace(gltfShape8)
const transform26 = new Transform({
  position: new Vector3(0.6556055545806885, 0.07111525535583496, 0.7126550674438477),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.220567464828491, 1)
})
pillarAntique4.addComponentOrReplace(transform26)

const roundWallLight5 = new Entity('roundWallLight5')
engine.addEntity(roundWallLight5)
roundWallLight5.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(1.8396599292755127, 2.8429081439971924, 0.6755666732788086),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roundWallLight5.addComponentOrReplace(transform27)

const roundWallLight6 = new Entity('roundWallLight6')
engine.addEntity(roundWallLight6)
roundWallLight6.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(1.8396599292755127, 2.8429081439971924, 15.346331596374512),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
roundWallLight6.addComponentOrReplace(transform28)

const plantedFern = new Entity('plantedFern')
engine.addEntity(plantedFern)
plantedFern.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(1, 0.09787535667419434, 1.077404260635376),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plantedFern.addComponentOrReplace(transform29)
const gltfShape9 = new GLTFShape("e9d4e87b-8d5f-4f03-a2e5-044effa9147f/PlantPot_03/PlantPot_03.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
plantedFern.addComponentOrReplace(gltfShape9)

const plantedFern2 = new Entity('plantedFern2')
engine.addEntity(plantedFern2)
plantedFern2.setParent(_scene)
plantedFern2.addComponentOrReplace(gltfShape9)
const transform30 = new Transform({
  position: new Vector3(1, 0.09787535667419434, 14.99240493774414),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plantedFern2.addComponentOrReplace(transform30)

const dropChandelier = new Entity('dropChandelier')
engine.addEntity(dropChandelier)
dropChandelier.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(9.538446426391602, 4.841551780700684, 8.306465148925781),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dropChandelier.addComponentOrReplace(transform31)

const redButton = new Entity('redButton')
engine.addEntity(redButton)
redButton.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(3.975184917449951, 0.5945627093315125, 7.749248504638672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redButton.addComponentOrReplace(transform32)

const greenButton = new Entity('greenButton')
engine.addEntity(greenButton)
greenButton.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(4.0184550285339355, 0.6051278114318848, 8.409161567687988),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenButton.addComponentOrReplace(transform33)

const wallAcousticPanel = new Entity('wallAcousticPanel')
engine.addEntity(wallAcousticPanel)
wallAcousticPanel.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(5.563953399658203, 0.08190369606018066, 15.474823951721191),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallAcousticPanel.addComponentOrReplace(transform34)
const gltfShape10 = new GLTFShape("20a71e04-7080-47f6-a1ee-911041118c45/AcousticPanelWall.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
wallAcousticPanel.addComponentOrReplace(gltfShape10)

const wallAcousticPanel2 = new Entity('wallAcousticPanel2')
engine.addEntity(wallAcousticPanel2)
wallAcousticPanel2.setParent(_scene)
wallAcousticPanel2.addComponentOrReplace(gltfShape10)
const transform35 = new Transform({
  position: new Vector3(10.183314323425293, 0.08190369606018066, 15.474823951721191),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallAcousticPanel2.addComponentOrReplace(transform35)

const wallAcousticPanel3 = new Entity('wallAcousticPanel3')
engine.addEntity(wallAcousticPanel3)
wallAcousticPanel3.setParent(_scene)
wallAcousticPanel3.addComponentOrReplace(gltfShape10)
const transform36 = new Transform({
  position: new Vector3(14.659881591796875, 0.08190369606018066, 15.474823951721191),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallAcousticPanel3.addComponentOrReplace(transform36)

const wallAcousticPanel4 = new Entity('wallAcousticPanel4')
engine.addEntity(wallAcousticPanel4)
wallAcousticPanel4.setParent(_scene)
wallAcousticPanel4.addComponentOrReplace(gltfShape10)
const transform37 = new Transform({
  position: new Vector3(5.563953399658203, 4.0385894775390625, 15.474823951721191),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallAcousticPanel4.addComponentOrReplace(transform37)

const wallAcousticPanel5 = new Entity('wallAcousticPanel5')
engine.addEntity(wallAcousticPanel5)
wallAcousticPanel5.setParent(_scene)
wallAcousticPanel5.addComponentOrReplace(gltfShape10)
const transform38 = new Transform({
  position: new Vector3(10.183314323425293, 4.0385894775390625, 15.474823951721191),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallAcousticPanel5.addComponentOrReplace(transform38)

const wallAcousticPanel6 = new Entity('wallAcousticPanel6')
engine.addEntity(wallAcousticPanel6)
wallAcousticPanel6.setParent(_scene)
wallAcousticPanel6.addComponentOrReplace(gltfShape10)
const transform39 = new Transform({
  position: new Vector3(14.659881591796875, 4.0385894775390625, 15.474823951721191),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallAcousticPanel6.addComponentOrReplace(transform39)

const wallAcousticPanel7 = new Entity('wallAcousticPanel7')
engine.addEntity(wallAcousticPanel7)
wallAcousticPanel7.setParent(_scene)
wallAcousticPanel7.addComponentOrReplace(gltfShape10)
const transform40 = new Transform({
  position: new Vector3(13.019493103027344, 0.08190369606018066, 0.537421464920044),
  rotation: new Quaternion(-2.199152911505761e-15, -1, 1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1, 1, 1)
})
wallAcousticPanel7.addComponentOrReplace(transform40)

const wallAcousticPanel8 = new Entity('wallAcousticPanel8')
engine.addEntity(wallAcousticPanel8)
wallAcousticPanel8.setParent(_scene)
wallAcousticPanel8.addComponentOrReplace(gltfShape10)
const transform41 = new Transform({
  position: new Vector3(13.019493103027344, 4.0385894775390625, 0.5374205112457275),
  rotation: new Quaternion(-2.199152911505761e-15, -1, 1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1, 1, 1)
})
wallAcousticPanel8.addComponentOrReplace(transform41)

const wallAcousticPanel9 = new Entity('wallAcousticPanel9')
engine.addEntity(wallAcousticPanel9)
wallAcousticPanel9.setParent(_scene)
wallAcousticPanel9.addComponentOrReplace(gltfShape10)
const transform42 = new Transform({
  position: new Vector3(8.400132179260254, 4.0385894775390625, 0.5374202728271484),
  rotation: new Quaternion(-2.199152911505761e-15, -1, 1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1, 1, 1)
})
wallAcousticPanel9.addComponentOrReplace(transform42)

const wallAcousticPanel10 = new Entity('wallAcousticPanel10')
engine.addEntity(wallAcousticPanel10)
wallAcousticPanel10.setParent(_scene)
wallAcousticPanel10.addComponentOrReplace(gltfShape10)
const transform43 = new Transform({
  position: new Vector3(8.400132179260254, 0.08190369606018066, 0.5374212265014648),
  rotation: new Quaternion(-2.199152911505761e-15, -1, 1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1, 1, 1)
})
wallAcousticPanel10.addComponentOrReplace(transform43)

const wallAcousticPanel11 = new Entity('wallAcousticPanel11')
engine.addEntity(wallAcousticPanel11)
wallAcousticPanel11.setParent(_scene)
wallAcousticPanel11.addComponentOrReplace(gltfShape10)
const transform44 = new Transform({
  position: new Vector3(3.923564910888672, 0.08190369606018066, 0.5374209880828857),
  rotation: new Quaternion(-2.199152911505761e-15, -1, 1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1, 1, 1)
})
wallAcousticPanel11.addComponentOrReplace(transform44)

const wallAcousticPanel12 = new Entity('wallAcousticPanel12')
engine.addEntity(wallAcousticPanel12)
wallAcousticPanel12.setParent(_scene)
wallAcousticPanel12.addComponentOrReplace(gltfShape10)
const transform45 = new Transform({
  position: new Vector3(3.923564910888672, 4.0385894775390625, 0.5374200344085693),
  rotation: new Quaternion(-2.199152911505761e-15, -1, 1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1, 1, 1)
})
wallAcousticPanel12.addComponentOrReplace(transform45)

const wallAcousticPanel13 = new Entity('wallAcousticPanel13')
engine.addEntity(wallAcousticPanel13)
wallAcousticPanel13.setParent(_scene)
wallAcousticPanel13.addComponentOrReplace(gltfShape10)
const transform46 = new Transform({
  position: new Vector3(3.092230796813965, 2.4394657611846924, 7.039172649383545),
  rotation: new Quaternion(1.9168935813933686e-15, 0.70710688829422, -8.429369557916289e-8, -0.7071067690849304),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
wallAcousticPanel13.addComponentOrReplace(transform46)

const wallAcousticPanel14 = new Entity('wallAcousticPanel14')
engine.addEntity(wallAcousticPanel14)
wallAcousticPanel14.setParent(_scene)
wallAcousticPanel14.addComponentOrReplace(gltfShape10)
const transform47 = new Transform({
  position: new Vector3(3.092230796813965, 2.4394657611846924, 11.561836242675781),
  rotation: new Quaternion(1.9168935813933686e-15, 0.70710688829422, -8.429369557916289e-8, -0.7071067690849304),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
wallAcousticPanel14.addComponentOrReplace(transform47)

const plainText2 = new Entity('plainText2')
engine.addEntity(plainText2)
plainText2.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(15.835992813110352, 5.5471391677856445, 7.412424087524414),
  rotation: new Quaternion(-2.9904779841268036e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(11.617786407470703, 11.617786407470703, 11.617786407470703)
})
plainText2.addComponentOrReplace(transform48)

const pillarAntique5 = new Entity('pillarAntique5')
engine.addEntity(pillarAntique5)
pillarAntique5.setParent(_scene)
pillarAntique5.addComponentOrReplace(gltfShape8)
const transform49 = new Transform({
  position: new Vector3(15.723666191101074, 0.07111525535583496, 0.7126541137695312),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.220567464828491, 1)
})
pillarAntique5.addComponentOrReplace(transform49)

const pillarAntique6 = new Entity('pillarAntique6')
engine.addEntity(pillarAntique6)
pillarAntique6.setParent(_scene)
pillarAntique6.addComponentOrReplace(gltfShape8)
const transform50 = new Transform({
  position: new Vector3(15.723666191101074, 0.07111525535583496, 15.820747375488281),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.220567464828491, 1)
})
pillarAntique6.addComponentOrReplace(transform50)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(0.17319150269031525, 0.9130606651306152, 3.135744571685791),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.8311583995819092, 2.444775342941284, 1.8311583995819092)
})
imageFromURL2.addComponentOrReplace(transform51)

const roofGlass = new Entity('roofGlass')
engine.addEntity(roofGlass)
roofGlass.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(15.78277587890625, 4.479384422302246, 15.708418846130371),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.851201057434082, 1, 3.8333346843719482)
})
roofGlass.addComponentOrReplace(transform52)
const gltfShape11 = new GLTFShape("af9aa90e-f9bf-4363-bb8b-447c15ef908e/GlassRoof.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
roofGlass.addComponentOrReplace(gltfShape11)

const concreteWall9 = new Entity('concreteWall9')
engine.addEntity(concreteWall9)
concreteWall9.setParent(_scene)
concreteWall9.addComponentOrReplace(gltfShape2)
const transform53 = new Transform({
  position: new Vector3(11.728483200073242, 8.161683082580566, 6.190725326538086),
  rotation: new Quaternion(-1.539415254273621e-15, 0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(-2.1924586296081543, 0.1717129647731781, -13.7181978225708)
})
concreteWall9.addComponentOrReplace(transform53)

// const blueButton = new Entity('blueButton')
// engine.addEntity(blueButton)
// blueButton.setParent(_scene)
// const transform54 = new Transform({
//   position: new Vector3(3.2341880798339844, 2.01780366897583, 7.849771499633789),
//   rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
//   scale: new Vector3(1.0000014305114746, 1.0000014305114746, 1)
// })
// blueButton.addComponentOrReplace(transform54)

// const blueButton2 = new Entity('blueButton2')
// engine.addEntity(blueButton2)
// blueButton2.setParent(_scene)
// const transform55 = new Transform({
//   position: new Vector3(3.2341880798339844, 2.01780366897583, 8.429712295532227),
//   rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
//   scale: new Vector3(1.0000016689300537, 1.0000016689300537, 1)
// })
// blueButton2.addComponentOrReplace(transform55)


//screen
//the variable floorBlack2 is actually the screen. sorry for any confusing, but it was originally a black floor part which I put a screen on.

const floorBlack2 = new Entity('floorBlack2')
engine.addEntity(floorBlack2)
floorBlack2.setParent(_scene)
floorBlack2.addComponentOrReplace(gltfShape7)
const transform56 = new Transform({
  position: new Vector3(15.440412521362305, 7.970023155212402, 1.450932502746582),
  rotation: new Quaternion(-0.7084190845489502, -0.7057920694351196, 3.663376446638722e-8, -1.317771705089399e-7),
  scale: new Vector3(1.8838095664978027, 3.0158932209014893, 3.276655673980713)
})
floorBlack2.addComponentOrReplace(transform56)

// #1
const myVideoClip = new VideoClip(
  'https://player.vimeo.com/external/703438900.m3u8?s=4903f764c73b1a618d7248322279be4de9498a5f'
)

// #2
const myVideoTexture = new VideoTexture(myVideoClip)

// #3
const myMaterial = new Material()
myMaterial.albedoTexture = myVideoTexture
myMaterial.roughness = 1
myMaterial.specularIntensity = 0
myMaterial.metallic = 0


// #4
//const screen = new Entity()
//screen.addComponent(new PlaneShape())
//screen.addComponent(
//new Transform({
//  position: new Vector3(8, 1, 8),
//})
//)
floorBlack2.addComponent(myMaterial)
floorBlack2.addComponent(
  new OnPointerDown(() => {
    myVideoTexture.playing = !myVideoTexture.playing
  })
)
//engine.addEntity(screen)

// #5
myVideoTexture.play()


const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script1.spawn(imageFromURL, {"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/His_Girl_Friday_%281940_poster%29_crop.jpg/1200px-His_Girl_Friday_%281940_poster%29_crop.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script2.spawn(plainText, {"text":"Movie Theater","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))
script3.spawn(roundWallLight, {"startOn":true,"clickable":true}, createChannel(channelId, roundWallLight, channelBus))
script3.spawn(roundWallLight2, {"startOn":true,"clickable":true}, createChannel(channelId, roundWallLight2, channelBus))
script3.spawn(roundWallLight3, {"startOn":true,"clickable":true}, createChannel(channelId, roundWallLight3, channelBus))
script3.spawn(roundWallLight4, {"startOn":true,"clickable":true}, createChannel(channelId, roundWallLight4, channelBus))
script3.spawn(roundWallLight5, {"startOn":true,"clickable":true}, createChannel(channelId, roundWallLight5, channelBus))
script3.spawn(roundWallLight6, {"startOn":true,"clickable":true}, createChannel(channelId, roundWallLight6, channelBus))
script4.spawn(dropChandelier, {"startOn":true,"clickable":true}, createChannel(channelId, dropChandelier, channelBus))
script5.spawn(redButton, {"onClick":[{"entityName":"roundWallLight","actionId":"deactivate","values":{}},{"entityName":"roundWallLight2","actionId":"deactivate","values":{}},{"entityName":"roundWallLight3","actionId":"deactivate","values":{}},{"entityName":"roundWallLight4","actionId":"deactivate","values":{}},{"entityName":"roundWallLight5","actionId":"deactivate","values":{}},{"entityName":"roundWallLight6","actionId":"deactivate","values":{}},{"entityName":"dropChandelier","actionId":"deactivate","values":{}}]}, createChannel(channelId, redButton, channelBus))
script6.spawn(greenButton, {"onClick":[{"entityName":"roundWallLight","actionId":"activate","values":{}},{"entityName":"roundWallLight2","actionId":"activate","values":{}},{"entityName":"roundWallLight3","actionId":"activate","values":{}},{"entityName":"roundWallLight4","actionId":"activate","values":{}},{"entityName":"roundWallLight5","actionId":"activate","values":{}},{"entityName":"roundWallLight6","actionId":"activate","values":{}},{"entityName":"dropChandelier","actionId":"activate","values":{}}]}, createChannel(channelId, greenButton, channelBus))
script2.spawn(plainText2, {"text":"Movie Theater","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText2, channelBus))
script1.spawn(imageFromURL2, {"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/His_Girl_Friday_%281940_poster%29_crop.jpg/1200px-His_Girl_Friday_%281940_poster%29_crop.jpg"}, createChannel(channelId, imageFromURL2, channelBus))
script7.spawn(blueButton, {}, createChannel(channelId, blueButton, channelBus))
script7.spawn(blueButton2, {}, createChannel(channelId, blueButton2, channelBus))
