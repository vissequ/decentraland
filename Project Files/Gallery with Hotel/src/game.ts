//Please message vissequ#1301 on Discord if you need a scripter.

import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../85cf3207-2792-4349-9938-21fd82ea2168/src/item"
import Script2 from "../7abe1ec8-bd5c-4ffe-b318-f17a330296bf/src/item"
import Script3 from "../7cd4d0bc-54d4-4f64-8ab2-6f18f41f03a3/src/item"
import Script4 from "../df8d742f-045c-4fe3-8c70-adfb47d22baf/src/item"
import Script5 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script6 from "../1f1dfb04-879e-422f-a8da-44852a421199/src/item"
import Script7 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"
import Script8 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script9 from "../0ee46c79-338c-445a-a506-ea26d80fbe46/src/item"
import Script10 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"
import Script11 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script12 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script13 from "../d6dea640-b953-48b9-bfb0-d750c5f43ba1/src/item"
import Script14 from "../b79a150e-5914-4fdf-a6b4-c7ff0c6833dd/src/item"
import Script15 from "../310e908c-751e-4045-ac88-2d6b1fbadf85/src/item"

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

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(5.635983467102051, 0, 0.5000006556510925),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallPlainGlass.addComponentOrReplace(gltfShape2)

const concreteWall = new Entity('concreteWall')
engine.addEntity(concreteWall)
concreteWall.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(0.8821511268615723, 0, 0.5000008344650269),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("53aa3052-ccd7-4a05-be3f-f840acbff99e/Concrete_Wall.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
concreteWall.addComponentOrReplace(gltfShape3)

const concreteWall2 = new Entity('concreteWall2')
engine.addEntity(concreteWall2)
concreteWall2.setParent(_scene)
concreteWall2.addComponentOrReplace(gltfShape3)
const transform6 = new Transform({
  position: new Vector3(6.138684272766113, 0, 0.5000002384185791),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall2.addComponentOrReplace(transform6)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
wallPlainGlass2.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(10.892516136169434, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass2.addComponentOrReplace(transform7)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
wallPlainGlass3.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(21.40495491027832, 0, 0.4999987483024597),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass3.addComponentOrReplace(transform8)

const concreteWall3 = new Entity('concreteWall3')
engine.addEntity(concreteWall3)
concreteWall3.setParent(_scene)
concreteWall3.addComponentOrReplace(gltfShape3)
const transform9 = new Transform({
  position: new Vector3(16.651121139526367, 0, 0.4999989867210388),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall3.addComponentOrReplace(transform9)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
wallPlainGlass4.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(16.148420333862305, 0, 0.49999940395355225),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass4.addComponentOrReplace(transform10)

const concreteWall4 = new Entity('concreteWall4')
engine.addEntity(concreteWall4)
concreteWall4.setParent(_scene)
concreteWall4.addComponentOrReplace(gltfShape3)
const transform11 = new Transform({
  position: new Vector3(11.394588470458984, 0, 0.4999995827674866),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall4.addComponentOrReplace(transform11)

const wallPlainGlass5 = new Entity('wallPlainGlass5')
engine.addEntity(wallPlainGlass5)
wallPlainGlass5.setParent(_scene)
wallPlainGlass5.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(31.392549514770508, 0, 0.4999975562095642),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1129846572875977, 1, 0.9999998807907104)
})
wallPlainGlass5.addComponentOrReplace(transform12)

const concreteWall5 = new Entity('concreteWall5')
engine.addEntity(concreteWall5)
concreteWall5.setParent(_scene)
concreteWall5.addComponentOrReplace(gltfShape3)
const transform13 = new Transform({
  position: new Vector3(27.151121139526367, 0, 0.49999773502349854),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall5.addComponentOrReplace(transform13)

const wallPlainGlass6 = new Entity('wallPlainGlass6')
engine.addEntity(wallPlainGlass6)
wallPlainGlass6.setParent(_scene)
wallPlainGlass6.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(26.648420333862305, 0, 0.49999815225601196),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass6.addComponentOrReplace(transform14)

const concreteWall6 = new Entity('concreteWall6')
engine.addEntity(concreteWall6)
concreteWall6.setParent(_scene)
concreteWall6.addComponentOrReplace(gltfShape3)
const transform15 = new Transform({
  position: new Vector3(21.894588470458984, 0, 0.4999983310699463),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall6.addComponentOrReplace(transform15)

const concreteWall7 = new Entity('concreteWall7')
engine.addEntity(concreteWall7)
concreteWall7.setParent(_scene)
concreteWall7.addComponentOrReplace(gltfShape3)
const transform16 = new Transform({
  position: new Vector3(31.882152557373047, 0, 0.4999971389770508),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall7.addComponentOrReplace(transform16)

const concreteWall8 = new Entity('concreteWall8')
engine.addEntity(concreteWall8)
concreteWall8.setParent(_scene)
concreteWall8.addComponentOrReplace(gltfShape3)
const transform17 = new Transform({
  position: new Vector3(0.8821506500244141, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall8.addComponentOrReplace(transform17)

const wallPlainGlass7 = new Entity('wallPlainGlass7')
engine.addEntity(wallPlainGlass7)
wallPlainGlass7.setParent(_scene)
wallPlainGlass7.addComponentOrReplace(gltfShape2)
const transform18 = new Transform({
  position: new Vector3(5.635983467102051, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass7.addComponentOrReplace(transform18)

const concreteWall9 = new Entity('concreteWall9')
engine.addEntity(concreteWall9)
concreteWall9.setParent(_scene)
concreteWall9.addComponentOrReplace(gltfShape3)
const transform19 = new Transform({
  position: new Vector3(6.138684272766113, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall9.addComponentOrReplace(transform19)

const wallPlainGlass8 = new Entity('wallPlainGlass8')
engine.addEntity(wallPlainGlass8)
wallPlainGlass8.setParent(_scene)
wallPlainGlass8.addComponentOrReplace(gltfShape2)
const transform20 = new Transform({
  position: new Vector3(10.892516136169434, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass8.addComponentOrReplace(transform20)

const concreteWall10 = new Entity('concreteWall10')
engine.addEntity(concreteWall10)
concreteWall10.setParent(_scene)
concreteWall10.addComponentOrReplace(gltfShape3)
const transform21 = new Transform({
  position: new Vector3(11.394588470458984, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall10.addComponentOrReplace(transform21)

const wallPlainGlass9 = new Entity('wallPlainGlass9')
engine.addEntity(wallPlainGlass9)
wallPlainGlass9.setParent(_scene)
wallPlainGlass9.addComponentOrReplace(gltfShape2)
const transform22 = new Transform({
  position: new Vector3(16.148420333862305, 0, 15.999999046325684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass9.addComponentOrReplace(transform22)

const concreteWall11 = new Entity('concreteWall11')
engine.addEntity(concreteWall11)
concreteWall11.setParent(_scene)
concreteWall11.addComponentOrReplace(gltfShape3)
const transform23 = new Transform({
  position: new Vector3(16.651121139526367, 0, 15.999999046325684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall11.addComponentOrReplace(transform23)

const concreteWall12 = new Entity('concreteWall12')
engine.addEntity(concreteWall12)
concreteWall12.setParent(_scene)
concreteWall12.addComponentOrReplace(gltfShape3)
const transform24 = new Transform({
  position: new Vector3(21.894588470458984, 0, 15.999998092651367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall12.addComponentOrReplace(transform24)

const wallPlainGlass11 = new Entity('wallPlainGlass11')
engine.addEntity(wallPlainGlass11)
wallPlainGlass11.setParent(_scene)
wallPlainGlass11.addComponentOrReplace(gltfShape2)
const transform25 = new Transform({
  position: new Vector3(26.648420333862305, 0, 15.999998092651367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 0.2549999952316284, 0.9999999403953552)
})
wallPlainGlass11.addComponentOrReplace(transform25)

const wallPlainGlass12 = new Entity('wallPlainGlass12')
engine.addEntity(wallPlainGlass12)
wallPlainGlass12.setParent(_scene)
wallPlainGlass12.addComponentOrReplace(gltfShape2)
const transform26 = new Transform({
  position: new Vector3(31.392549514770508, 0, 15.999998092651367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1129846572875977, 0.25, 0.9999998807907104)
})
wallPlainGlass12.addComponentOrReplace(transform26)

const concreteWall13 = new Entity('concreteWall13')
engine.addEntity(concreteWall13)
concreteWall13.setParent(_scene)
concreteWall13.addComponentOrReplace(gltfShape3)
const transform27 = new Transform({
  position: new Vector3(27.151121139526367, 0, 15.999998092651367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall13.addComponentOrReplace(transform27)

const concreteWall14 = new Entity('concreteWall14')
engine.addEntity(concreteWall14)
concreteWall14.setParent(_scene)
concreteWall14.addComponentOrReplace(gltfShape3)
const transform28 = new Transform({
  position: new Vector3(31.882152557373047, 0, 15.99999713897705),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall14.addComponentOrReplace(transform28)

const wallPlainGlass13 = new Entity('wallPlainGlass13')
engine.addEntity(wallPlainGlass13)
wallPlainGlass13.setParent(_scene)
wallPlainGlass13.addComponentOrReplace(gltfShape2)
const transform29 = new Transform({
  position: new Vector3(31.76663589477539, 0, 0.49472618103027344),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.1129860877990723, 1, 1.0000005960464478)
})
wallPlainGlass13.addComponentOrReplace(transform29)

const concreteWall16 = new Entity('concreteWall16')
engine.addEntity(concreteWall16)
concreteWall16.setParent(_scene)
concreteWall16.addComponentOrReplace(gltfShape3)
const transform30 = new Transform({
  position: new Vector3(31.76663589477539, 0, 4.7361555099487305),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.25000008940696716, 1, 1.0000004768371582)
})
concreteWall16.addComponentOrReplace(transform30)

const wallPlainGlass14 = new Entity('wallPlainGlass14')
engine.addEntity(wallPlainGlass14)
wallPlainGlass14.setParent(_scene)
wallPlainGlass14.addComponentOrReplace(gltfShape2)
const transform31 = new Transform({
  position: new Vector3(31.76663589477539, 0, 5.238856315612793),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.629791498184204, 1.2874046564102173, 1.0000017881393433)
})
wallPlainGlass14.addComponentOrReplace(transform31)

const concreteWall17 = new Entity('concreteWall17')
engine.addEntity(concreteWall17)
concreteWall17.setParent(_scene)
concreteWall17.addComponentOrReplace(gltfShape3)
const transform32 = new Transform({
  position: new Vector3(31.76663589477539, 2.8277008823351935e-7, 10.490656852722168),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.25000014901161194, 1, 1.0000007152557373)
})
concreteWall17.addComponentOrReplace(transform32)

const wallPlainGlass15 = new Entity('wallPlainGlass15')
engine.addEntity(wallPlainGlass15)
wallPlainGlass15.setParent(_scene)
wallPlainGlass15.addComponentOrReplace(gltfShape2)
const transform33 = new Transform({
  position: new Vector3(31.766637802124023, 3.411388433960383e-7, 10.980290412902832),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.3784255981445312, 1.2907545566558838, 1.000001311302185)
})
wallPlainGlass15.addComponentOrReplace(transform33)

const wallPlainGlass16 = new Entity('wallPlainGlass16')
engine.addEntity(wallPlainGlass16)
wallPlainGlass16.setParent(_scene)
wallPlainGlass16.addComponentOrReplace(gltfShape2)
const transform34 = new Transform({
  position: new Vector3(0.7294909954071045, 0, 0.45757627487182617),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.112987995147705, 1, 1.0000015497207642)
})
wallPlainGlass16.addComponentOrReplace(transform34)

const concreteWall15 = new Entity('concreteWall15')
engine.addEntity(concreteWall15)
concreteWall15.setParent(_scene)
concreteWall15.addComponentOrReplace(gltfShape3)
const transform35 = new Transform({
  position: new Vector3(0.7294909954071045, 0, 4.699005603790283),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.25000032782554626, 1, 1.0000014305114746)
})
concreteWall15.addComponentOrReplace(transform35)

const wallPlainGlass17 = new Entity('wallPlainGlass17')
engine.addEntity(wallPlainGlass17)
wallPlainGlass17.setParent(_scene)
wallPlainGlass17.addComponentOrReplace(gltfShape2)
const transform36 = new Transform({
  position: new Vector3(0.7294909954071045, 0, 5.201706409454346),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.6297922134399414, 1, 1.0000022649765015)
})
wallPlainGlass17.addComponentOrReplace(transform36)

const concreteWall18 = new Entity('concreteWall18')
engine.addEntity(concreteWall18)
concreteWall18.setParent(_scene)
concreteWall18.addComponentOrReplace(gltfShape3)
const transform37 = new Transform({
  position: new Vector3(0.7294909954071045, 2.8277008823351935e-7, 10.453508377075195),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.25000038743019104, 1, 1.0000016689300537)
})
concreteWall18.addComponentOrReplace(transform37)

const wallPlainGlass18 = new Entity('wallPlainGlass18')
engine.addEntity(wallPlainGlass18)
wallPlainGlass18.setParent(_scene)
wallPlainGlass18.addComponentOrReplace(gltfShape2)
const transform38 = new Transform({
  position: new Vector3(0.7294929027557373, 3.411388433960383e-7, 10.94314193725586),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.3784265518188477, 1, 1.0000017881393433)
})
wallPlainGlass18.addComponentOrReplace(transform38)

const concreteWall19 = new Entity('concreteWall19')
engine.addEntity(concreteWall19)
concreteWall19.setParent(_scene)
concreteWall19.addComponentOrReplace(gltfShape3)
const transform39 = new Transform({
  position: new Vector3(31.814929962158203, 2.8277008823351935e-7, 0.11458110809326172),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(7.913136005401611, 0.009999999776482582, 105.14463806152344)
})
concreteWall19.addComponentOrReplace(transform39)

const concreteWall20 = new Entity('concreteWall20')
engine.addEntity(concreteWall20)
concreteWall20.setParent(_scene)
concreteWall20.addComponentOrReplace(gltfShape3)
const transform40 = new Transform({
  position: new Vector3(0.8821506500244141, 3.999999761581421, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall20.addComponentOrReplace(transform40)

const wallPlainGlass19 = new Entity('wallPlainGlass19')
engine.addEntity(wallPlainGlass19)
wallPlainGlass19.setParent(_scene)
wallPlainGlass19.addComponentOrReplace(gltfShape2)
const transform41 = new Transform({
  position: new Vector3(0.7294931411743164, 4, 10.94314193725586),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.378427028656006, 1, 1.0000020265579224)
})
wallPlainGlass19.addComponentOrReplace(transform41)

const concreteWall21 = new Entity('concreteWall21')
engine.addEntity(concreteWall21)
concreteWall21.setParent(_scene)
concreteWall21.addComponentOrReplace(gltfShape3)
const transform42 = new Transform({
  position: new Vector3(0.7294912338256836, 4, 10.453508377075195),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.2500004470348358, 1, 1.0000019073486328)
})
concreteWall21.addComponentOrReplace(transform42)

const wallPlainGlass20 = new Entity('wallPlainGlass20')
engine.addEntity(wallPlainGlass20)
wallPlainGlass20.setParent(_scene)
wallPlainGlass20.addComponentOrReplace(gltfShape2)
const transform43 = new Transform({
  position: new Vector3(0.7294912338256836, 3.999999761581421, 5.201706409454346),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.6297922134399414, 1, 1.0000025033950806)
})
wallPlainGlass20.addComponentOrReplace(transform43)

const concreteWall22 = new Entity('concreteWall22')
engine.addEntity(concreteWall22)
concreteWall22.setParent(_scene)
concreteWall22.addComponentOrReplace(gltfShape3)
const transform44 = new Transform({
  position: new Vector3(0.7294912338256836, 3.999999761581421, 4.699005603790283),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.25000038743019104, 1, 1.0000016689300537)
})
concreteWall22.addComponentOrReplace(transform44)

const wallPlainGlass21 = new Entity('wallPlainGlass21')
engine.addEntity(wallPlainGlass21)
wallPlainGlass21.setParent(_scene)
wallPlainGlass21.addComponentOrReplace(gltfShape2)
const transform45 = new Transform({
  position: new Vector3(0.7294912338256836, 3.999999761581421, 0.45757627487182617),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.1129884719848633, 1, 1.0000017881393433)
})
wallPlainGlass21.addComponentOrReplace(transform45)

const concreteWall23 = new Entity('concreteWall23')
engine.addEntity(concreteWall23)
concreteWall23.setParent(_scene)
concreteWall23.addComponentOrReplace(gltfShape3)
const transform46 = new Transform({
  position: new Vector3(0.8821506500244141, 3.999999761581421, 0.5000009536743164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall23.addComponentOrReplace(transform46)

const wallPlainGlass22 = new Entity('wallPlainGlass22')
engine.addEntity(wallPlainGlass22)
wallPlainGlass22.setParent(_scene)
wallPlainGlass22.addComponentOrReplace(gltfShape2)
const transform47 = new Transform({
  position: new Vector3(5.635983467102051, 3.999999761581421, 0.5000004768371582),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass22.addComponentOrReplace(transform47)

const concreteWall24 = new Entity('concreteWall24')
engine.addEntity(concreteWall24)
concreteWall24.setParent(_scene)
concreteWall24.addComponentOrReplace(gltfShape3)
const transform48 = new Transform({
  position: new Vector3(6.138684272766113, 3.999999761581421, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall24.addComponentOrReplace(transform48)

const wallPlainGlass23 = new Entity('wallPlainGlass23')
engine.addEntity(wallPlainGlass23)
wallPlainGlass23.setParent(_scene)
wallPlainGlass23.addComponentOrReplace(gltfShape2)
const transform49 = new Transform({
  position: new Vector3(10.892516136169434, 3.999999761581421, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass23.addComponentOrReplace(transform49)

const concreteWall25 = new Entity('concreteWall25')
engine.addEntity(concreteWall25)
concreteWall25.setParent(_scene)
concreteWall25.addComponentOrReplace(gltfShape3)
const transform50 = new Transform({
  position: new Vector3(11.394588470458984, 3.999999761581421, 0.4999995231628418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall25.addComponentOrReplace(transform50)

const wallPlainGlass24 = new Entity('wallPlainGlass24')
engine.addEntity(wallPlainGlass24)
wallPlainGlass24.setParent(_scene)
wallPlainGlass24.addComponentOrReplace(gltfShape2)
const transform51 = new Transform({
  position: new Vector3(16.148420333862305, 3.999999761581421, 0.4999995231628418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass24.addComponentOrReplace(transform51)

const concreteWall26 = new Entity('concreteWall26')
engine.addEntity(concreteWall26)
concreteWall26.setParent(_scene)
concreteWall26.addComponentOrReplace(gltfShape3)
const transform52 = new Transform({
  position: new Vector3(16.651121139526367, 3.999999761581421, 0.4999990463256836),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall26.addComponentOrReplace(transform52)

const wallPlainGlass25 = new Entity('wallPlainGlass25')
engine.addEntity(wallPlainGlass25)
wallPlainGlass25.setParent(_scene)
wallPlainGlass25.addComponentOrReplace(gltfShape2)
const transform53 = new Transform({
  position: new Vector3(21.40495491027832, 3.999999761581421, 0.4999985694885254),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass25.addComponentOrReplace(transform53)

const concreteWall27 = new Entity('concreteWall27')
engine.addEntity(concreteWall27)
concreteWall27.setParent(_scene)
concreteWall27.addComponentOrReplace(gltfShape3)
const transform54 = new Transform({
  position: new Vector3(21.894588470458984, 3.999999761581421, 0.4999980926513672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall27.addComponentOrReplace(transform54)

const wallPlainGlass26 = new Entity('wallPlainGlass26')
engine.addEntity(wallPlainGlass26)
wallPlainGlass26.setParent(_scene)
wallPlainGlass26.addComponentOrReplace(gltfShape2)
const transform55 = new Transform({
  position: new Vector3(26.648420333862305, 3.999999761581421, 0.4999980926513672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass26.addComponentOrReplace(transform55)

const concreteWall28 = new Entity('concreteWall28')
engine.addEntity(concreteWall28)
concreteWall28.setParent(_scene)
concreteWall28.addComponentOrReplace(gltfShape3)
const transform56 = new Transform({
  position: new Vector3(27.151121139526367, 3.999999761581421, 0.499997615814209),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall28.addComponentOrReplace(transform56)

const wallPlainGlass27 = new Entity('wallPlainGlass27')
engine.addEntity(wallPlainGlass27)
wallPlainGlass27.setParent(_scene)
wallPlainGlass27.addComponentOrReplace(gltfShape2)
const transform57 = new Transform({
  position: new Vector3(31.392549514770508, 3.999999761581421, 0.499997615814209),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1129846572875977, 1, 0.9999998807907104)
})
wallPlainGlass27.addComponentOrReplace(transform57)

const concreteWall29 = new Entity('concreteWall29')
engine.addEntity(concreteWall29)
concreteWall29.setParent(_scene)
concreteWall29.addComponentOrReplace(gltfShape3)
const transform58 = new Transform({
  position: new Vector3(31.882152557373047, 3.999999761581421, 0.4999971389770508),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall29.addComponentOrReplace(transform58)

const wallPlainGlass28 = new Entity('wallPlainGlass28')
engine.addEntity(wallPlainGlass28)
wallPlainGlass28.setParent(_scene)
wallPlainGlass28.addComponentOrReplace(gltfShape2)
const transform59 = new Transform({
  position: new Vector3(31.76663589477539, 3.999999761581421, 0.49472618103027344),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.1129865646362305, 1, 1.0000008344650269)
})
wallPlainGlass28.addComponentOrReplace(transform59)

const concreteWall30 = new Entity('concreteWall30')
engine.addEntity(concreteWall30)
concreteWall30.setParent(_scene)
concreteWall30.addComponentOrReplace(gltfShape3)
const transform60 = new Transform({
  position: new Vector3(31.76663589477539, 3.999999761581421, 4.7361555099487305),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.25000014901161194, 1, 1.0000007152557373)
})
concreteWall30.addComponentOrReplace(transform60)

const wallPlainGlass29 = new Entity('wallPlainGlass29')
engine.addEntity(wallPlainGlass29)
wallPlainGlass29.setParent(_scene)
wallPlainGlass29.addComponentOrReplace(gltfShape2)
const transform61 = new Transform({
  position: new Vector3(31.76663589477539, 6, 5.238856315612793),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.629791498184204, 0.5, 1.0000020265579224)
})
wallPlainGlass29.addComponentOrReplace(transform61)

const concreteWall31 = new Entity('concreteWall31')
engine.addEntity(concreteWall31)
concreteWall31.setParent(_scene)
concreteWall31.addComponentOrReplace(gltfShape3)
const transform62 = new Transform({
  position: new Vector3(31.76663589477539, 4, 10.490656852722168),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.2500002086162567, 1, 1.0000009536743164)
})
concreteWall31.addComponentOrReplace(transform62)

const wallPlainGlass30 = new Entity('wallPlainGlass30')
engine.addEntity(wallPlainGlass30)
wallPlainGlass30.setParent(_scene)
wallPlainGlass30.addComponentOrReplace(gltfShape2)
const transform63 = new Transform({
  position: new Vector3(31.766637802124023, 6, 10.980290412902832),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.3784260749816895, 0.5, 1.0000015497207642)
})
wallPlainGlass30.addComponentOrReplace(transform63)

const concreteWall32 = new Entity('concreteWall32')
engine.addEntity(concreteWall32)
concreteWall32.setParent(_scene)
concreteWall32.addComponentOrReplace(gltfShape3)
const transform64 = new Transform({
  position: new Vector3(31.882152557373047, 3.999999761581421, 15.99999713897705),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall32.addComponentOrReplace(transform64)

const wallPlainGlass31 = new Entity('wallPlainGlass31')
engine.addEntity(wallPlainGlass31)
wallPlainGlass31.setParent(_scene)
wallPlainGlass31.addComponentOrReplace(gltfShape2)
const transform65 = new Transform({
  position: new Vector3(31.392549514770508, 1.999999761581421, 15.999998092651367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1129846572875977, 1.5, 0.9999998807907104)
})
wallPlainGlass31.addComponentOrReplace(transform65)

const concreteWall33 = new Entity('concreteWall33')
engine.addEntity(concreteWall33)
concreteWall33.setParent(_scene)
concreteWall33.addComponentOrReplace(gltfShape3)
const transform66 = new Transform({
  position: new Vector3(27.151121139526367, 3.999999761581421, 15.999998092651367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall33.addComponentOrReplace(transform66)

const wallPlainGlass32 = new Entity('wallPlainGlass32')
engine.addEntity(wallPlainGlass32)
wallPlainGlass32.setParent(_scene)
wallPlainGlass32.addComponentOrReplace(gltfShape2)
const transform67 = new Transform({
  position: new Vector3(26.648420333862305, 1.999999761581421, 15.999998092651367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1.5, 0.9999999403953552)
})
wallPlainGlass32.addComponentOrReplace(transform67)

const concreteWall34 = new Entity('concreteWall34')
engine.addEntity(concreteWall34)
concreteWall34.setParent(_scene)
concreteWall34.addComponentOrReplace(gltfShape3)
const transform68 = new Transform({
  position: new Vector3(21.894588470458984, 3.999999761581421, 15.999998092651367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall34.addComponentOrReplace(transform68)

const wallPlainGlass33 = new Entity('wallPlainGlass33')
engine.addEntity(wallPlainGlass33)
wallPlainGlass33.setParent(_scene)
wallPlainGlass33.addComponentOrReplace(gltfShape2)
const transform69 = new Transform({
  position: new Vector3(21.40495491027832, 3.999999761581421, 15.999999046325684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass33.addComponentOrReplace(transform69)

const concreteWall35 = new Entity('concreteWall35')
engine.addEntity(concreteWall35)
concreteWall35.setParent(_scene)
concreteWall35.addComponentOrReplace(gltfShape3)
const transform70 = new Transform({
  position: new Vector3(16.651121139526367, 3.999999761581421, 15.999999046325684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall35.addComponentOrReplace(transform70)

const wallPlainGlass34 = new Entity('wallPlainGlass34')
engine.addEntity(wallPlainGlass34)
wallPlainGlass34.setParent(_scene)
wallPlainGlass34.addComponentOrReplace(gltfShape2)
const transform71 = new Transform({
  position: new Vector3(16.157554626464844, 4, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass34.addComponentOrReplace(transform71)

const concreteWall36 = new Entity('concreteWall36')
engine.addEntity(concreteWall36)
concreteWall36.setParent(_scene)
concreteWall36.addComponentOrReplace(gltfShape3)
const transform72 = new Transform({
  position: new Vector3(11.394588470458984, 3.999999761581421, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall36.addComponentOrReplace(transform72)

const wallPlainGlass35 = new Entity('wallPlainGlass35')
engine.addEntity(wallPlainGlass35)
wallPlainGlass35.setParent(_scene)
wallPlainGlass35.addComponentOrReplace(gltfShape2)
const transform73 = new Transform({
  position: new Vector3(10.892516136169434, 3.999999761581421, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass35.addComponentOrReplace(transform73)

const concreteWall37 = new Entity('concreteWall37')
engine.addEntity(concreteWall37)
concreteWall37.setParent(_scene)
concreteWall37.addComponentOrReplace(gltfShape3)
const transform74 = new Transform({
  position: new Vector3(6.138684272766113, 3.999999761581421, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall37.addComponentOrReplace(transform74)

const wallPlainGlass36 = new Entity('wallPlainGlass36')
engine.addEntity(wallPlainGlass36)
wallPlainGlass36.setParent(_scene)
wallPlainGlass36.addComponentOrReplace(gltfShape2)
const transform75 = new Transform({
  position: new Vector3(5.635983467102051, 3.999999761581421, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass36.addComponentOrReplace(transform75)

const concreteWall38 = new Entity('concreteWall38')
engine.addEntity(concreteWall38)
concreteWall38.setParent(_scene)
concreteWall38.addComponentOrReplace(gltfShape3)
const transform76 = new Transform({
  position: new Vector3(0.8821506500244141, 8, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall38.addComponentOrReplace(transform76)

const wallPlainGlass37 = new Entity('wallPlainGlass37')
engine.addEntity(wallPlainGlass37)
wallPlainGlass37.setParent(_scene)
wallPlainGlass37.addComponentOrReplace(gltfShape2)
const transform77 = new Transform({
  position: new Vector3(0.7294931411743164, 8, 10.94314193725586),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.378427505493164, 1, 1.0000022649765015)
})
wallPlainGlass37.addComponentOrReplace(transform77)

const concreteWall39 = new Entity('concreteWall39')
engine.addEntity(concreteWall39)
concreteWall39.setParent(_scene)
concreteWall39.addComponentOrReplace(gltfShape3)
const transform78 = new Transform({
  position: new Vector3(0.7294912338256836, 8, 10.453508377075195),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.2500005066394806, 1, 1.000002145767212)
})
concreteWall39.addComponentOrReplace(transform78)

const wallPlainGlass38 = new Entity('wallPlainGlass38')
engine.addEntity(wallPlainGlass38)
wallPlainGlass38.setParent(_scene)
wallPlainGlass38.addComponentOrReplace(gltfShape2)
const transform79 = new Transform({
  position: new Vector3(0.7294912338256836, 8, 5.201706409454346),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.6297922134399414, 1, 1.0000027418136597)
})
wallPlainGlass38.addComponentOrReplace(transform79)

const concreteWall40 = new Entity('concreteWall40')
engine.addEntity(concreteWall40)
concreteWall40.setParent(_scene)
concreteWall40.addComponentOrReplace(gltfShape3)
const transform80 = new Transform({
  position: new Vector3(0.7294912338256836, 8, 4.699005603790283),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.2500004470348358, 1, 1.0000019073486328)
})
concreteWall40.addComponentOrReplace(transform80)

const wallPlainGlass39 = new Entity('wallPlainGlass39')
engine.addEntity(wallPlainGlass39)
wallPlainGlass39.setParent(_scene)
wallPlainGlass39.addComponentOrReplace(gltfShape2)
const transform81 = new Transform({
  position: new Vector3(0.7294912338256836, 8, 0.45757627487182617),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.1129889488220215, 1, 1.0000020265579224)
})
wallPlainGlass39.addComponentOrReplace(transform81)

const concreteWall41 = new Entity('concreteWall41')
engine.addEntity(concreteWall41)
concreteWall41.setParent(_scene)
concreteWall41.addComponentOrReplace(gltfShape3)
const transform82 = new Transform({
  position: new Vector3(0.8821506500244141, 8, 0.5000009536743164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall41.addComponentOrReplace(transform82)

const wallPlainGlass40 = new Entity('wallPlainGlass40')
engine.addEntity(wallPlainGlass40)
wallPlainGlass40.setParent(_scene)
wallPlainGlass40.addComponentOrReplace(gltfShape2)
const transform83 = new Transform({
  position: new Vector3(5.635983467102051, 8, 0.5000004768371582),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass40.addComponentOrReplace(transform83)

const concreteWall42 = new Entity('concreteWall42')
engine.addEntity(concreteWall42)
concreteWall42.setParent(_scene)
concreteWall42.addComponentOrReplace(gltfShape3)
const transform84 = new Transform({
  position: new Vector3(6.138684272766113, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall42.addComponentOrReplace(transform84)

const wallPlainGlass41 = new Entity('wallPlainGlass41')
engine.addEntity(wallPlainGlass41)
wallPlainGlass41.setParent(_scene)
wallPlainGlass41.addComponentOrReplace(gltfShape2)
const transform85 = new Transform({
  position: new Vector3(10.892516136169434, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass41.addComponentOrReplace(transform85)

const concreteWall43 = new Entity('concreteWall43')
engine.addEntity(concreteWall43)
concreteWall43.setParent(_scene)
concreteWall43.addComponentOrReplace(gltfShape3)
const transform86 = new Transform({
  position: new Vector3(11.394588470458984, 8, 0.4999995231628418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall43.addComponentOrReplace(transform86)

const wallPlainGlass42 = new Entity('wallPlainGlass42')
engine.addEntity(wallPlainGlass42)
wallPlainGlass42.setParent(_scene)
wallPlainGlass42.addComponentOrReplace(gltfShape2)
const transform87 = new Transform({
  position: new Vector3(16.148420333862305, 8, 0.4999995231628418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass42.addComponentOrReplace(transform87)

const concreteWall44 = new Entity('concreteWall44')
engine.addEntity(concreteWall44)
concreteWall44.setParent(_scene)
concreteWall44.addComponentOrReplace(gltfShape3)
const transform88 = new Transform({
  position: new Vector3(16.651121139526367, 8, 0.4999990463256836),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall44.addComponentOrReplace(transform88)

const wallPlainGlass43 = new Entity('wallPlainGlass43')
engine.addEntity(wallPlainGlass43)
wallPlainGlass43.setParent(_scene)
wallPlainGlass43.addComponentOrReplace(gltfShape2)
const transform89 = new Transform({
  position: new Vector3(21.40495491027832, 8, 0.4999985694885254),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass43.addComponentOrReplace(transform89)

const concreteWall45 = new Entity('concreteWall45')
engine.addEntity(concreteWall45)
concreteWall45.setParent(_scene)
concreteWall45.addComponentOrReplace(gltfShape3)
const transform90 = new Transform({
  position: new Vector3(21.894588470458984, 8, 0.4999980926513672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall45.addComponentOrReplace(transform90)

const wallPlainGlass44 = new Entity('wallPlainGlass44')
engine.addEntity(wallPlainGlass44)
wallPlainGlass44.setParent(_scene)
wallPlainGlass44.addComponentOrReplace(gltfShape2)
const transform91 = new Transform({
  position: new Vector3(26.648420333862305, 8, 0.4999980926513672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass44.addComponentOrReplace(transform91)

const concreteWall46 = new Entity('concreteWall46')
engine.addEntity(concreteWall46)
concreteWall46.setParent(_scene)
concreteWall46.addComponentOrReplace(gltfShape3)
const transform92 = new Transform({
  position: new Vector3(27.151121139526367, 8, 0.499997615814209),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall46.addComponentOrReplace(transform92)

const wallPlainGlass45 = new Entity('wallPlainGlass45')
engine.addEntity(wallPlainGlass45)
wallPlainGlass45.setParent(_scene)
wallPlainGlass45.addComponentOrReplace(gltfShape2)
const transform93 = new Transform({
  position: new Vector3(31.392549514770508, 8, 0.499997615814209),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1129846572875977, 1, 0.9999998807907104)
})
wallPlainGlass45.addComponentOrReplace(transform93)

const concreteWall47 = new Entity('concreteWall47')
engine.addEntity(concreteWall47)
concreteWall47.setParent(_scene)
concreteWall47.addComponentOrReplace(gltfShape3)
const transform94 = new Transform({
  position: new Vector3(31.882152557373047, 8, 0.4999971389770508),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall47.addComponentOrReplace(transform94)

const wallPlainGlass46 = new Entity('wallPlainGlass46')
engine.addEntity(wallPlainGlass46)
wallPlainGlass46.setParent(_scene)
wallPlainGlass46.addComponentOrReplace(gltfShape2)
const transform95 = new Transform({
  position: new Vector3(31.76663589477539, 8, 0.49472618103027344),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.1129870414733887, 1, 1.000001072883606)
})
wallPlainGlass46.addComponentOrReplace(transform95)

const concreteWall48 = new Entity('concreteWall48')
engine.addEntity(concreteWall48)
concreteWall48.setParent(_scene)
concreteWall48.addComponentOrReplace(gltfShape3)
const transform96 = new Transform({
  position: new Vector3(31.76663589477539, 8, 4.7361555099487305),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.2500002086162567, 1, 1.0000009536743164)
})
concreteWall48.addComponentOrReplace(transform96)

const concreteWall52 = new Entity('concreteWall52')
engine.addEntity(concreteWall52)
concreteWall52.setParent(_scene)
concreteWall52.addComponentOrReplace(gltfShape3)
const transform97 = new Transform({
  position: new Vector3(21.894588470458984, 8, 15.999998092651367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall52.addComponentOrReplace(transform97)

const wallPlainGlass51 = new Entity('wallPlainGlass51')
engine.addEntity(wallPlainGlass51)
wallPlainGlass51.setParent(_scene)
wallPlainGlass51.addComponentOrReplace(gltfShape2)
const transform98 = new Transform({
  position: new Vector3(21.40495491027832, 8, 15.999999046325684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass51.addComponentOrReplace(transform98)

const concreteWall53 = new Entity('concreteWall53')
engine.addEntity(concreteWall53)
concreteWall53.setParent(_scene)
concreteWall53.addComponentOrReplace(gltfShape3)
const transform99 = new Transform({
  position: new Vector3(16.651121139526367, 8, 15.999999046325684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall53.addComponentOrReplace(transform99)

const wallPlainGlass52 = new Entity('wallPlainGlass52')
engine.addEntity(wallPlainGlass52)
wallPlainGlass52.setParent(_scene)
wallPlainGlass52.addComponentOrReplace(gltfShape2)
const transform100 = new Transform({
  position: new Vector3(16.148420333862305, 8, 15.999999046325684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass52.addComponentOrReplace(transform100)

const concreteWall54 = new Entity('concreteWall54')
engine.addEntity(concreteWall54)
concreteWall54.setParent(_scene)
concreteWall54.addComponentOrReplace(gltfShape3)
const transform101 = new Transform({
  position: new Vector3(11.394588470458984, 8, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall54.addComponentOrReplace(transform101)

const wallPlainGlass53 = new Entity('wallPlainGlass53')
engine.addEntity(wallPlainGlass53)
wallPlainGlass53.setParent(_scene)
wallPlainGlass53.addComponentOrReplace(gltfShape2)
const transform102 = new Transform({
  position: new Vector3(10.892516136169434, 8, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass53.addComponentOrReplace(transform102)

const concreteWall55 = new Entity('concreteWall55')
engine.addEntity(concreteWall55)
concreteWall55.setParent(_scene)
concreteWall55.addComponentOrReplace(gltfShape3)
const transform103 = new Transform({
  position: new Vector3(6.138684272766113, 8, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall55.addComponentOrReplace(transform103)

const wallPlainGlass54 = new Entity('wallPlainGlass54')
engine.addEntity(wallPlainGlass54)
wallPlainGlass54.setParent(_scene)
wallPlainGlass54.addComponentOrReplace(gltfShape2)
const transform104 = new Transform({
  position: new Vector3(5.635983467102051, 8, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass54.addComponentOrReplace(transform104)

const concreteWall56 = new Entity('concreteWall56')
engine.addEntity(concreteWall56)
concreteWall56.setParent(_scene)
concreteWall56.addComponentOrReplace(gltfShape3)
const transform105 = new Transform({
  position: new Vector3(0.8821506500244141, 12, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall56.addComponentOrReplace(transform105)

const wallPlainGlass55 = new Entity('wallPlainGlass55')
engine.addEntity(wallPlainGlass55)
wallPlainGlass55.setParent(_scene)
wallPlainGlass55.addComponentOrReplace(gltfShape2)
const transform106 = new Transform({
  position: new Vector3(0.7294928431510925, 12, 10.94314193725586),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.3784289360046387, 1, 1.0000029802322388)
})
wallPlainGlass55.addComponentOrReplace(transform106)

const concreteWall57 = new Entity('concreteWall57')
engine.addEntity(concreteWall57)
concreteWall57.setParent(_scene)
concreteWall57.addComponentOrReplace(gltfShape3)
const transform107 = new Transform({
  position: new Vector3(0.7294912338256836, 12, 10.453508377075195),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.25000056624412537, 1, 1.000002384185791)
})
concreteWall57.addComponentOrReplace(transform107)

const wallPlainGlass56 = new Entity('wallPlainGlass56')
engine.addEntity(wallPlainGlass56)
wallPlainGlass56.setParent(_scene)
wallPlainGlass56.addComponentOrReplace(gltfShape2)
const transform108 = new Transform({
  position: new Vector3(0.7294912338256836, 12, 5.201706409454346),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.6297922134399414, 1, 1.0000029802322388)
})
wallPlainGlass56.addComponentOrReplace(transform108)

const concreteWall58 = new Entity('concreteWall58')
engine.addEntity(concreteWall58)
concreteWall58.setParent(_scene)
concreteWall58.addComponentOrReplace(gltfShape3)
const transform109 = new Transform({
  position: new Vector3(0.7294912338256836, 12, 4.699005603790283),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.2500005066394806, 1, 1.000002145767212)
})
concreteWall58.addComponentOrReplace(transform109)

const wallPlainGlass57 = new Entity('wallPlainGlass57')
engine.addEntity(wallPlainGlass57)
wallPlainGlass57.setParent(_scene)
wallPlainGlass57.addComponentOrReplace(gltfShape2)
const transform110 = new Transform({
  position: new Vector3(0.7294912338256836, 12, 0.45757627487182617),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.1129894256591797, 1, 1.0000022649765015)
})
wallPlainGlass57.addComponentOrReplace(transform110)

const concreteWall59 = new Entity('concreteWall59')
engine.addEntity(concreteWall59)
concreteWall59.setParent(_scene)
concreteWall59.addComponentOrReplace(gltfShape3)
const transform111 = new Transform({
  position: new Vector3(0.8821506500244141, 12, 0.5000009536743164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall59.addComponentOrReplace(transform111)

const wallPlainGlass58 = new Entity('wallPlainGlass58')
engine.addEntity(wallPlainGlass58)
wallPlainGlass58.setParent(_scene)
wallPlainGlass58.addComponentOrReplace(gltfShape2)
const transform112 = new Transform({
  position: new Vector3(5.635983467102051, 12, 0.5000004768371582),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass58.addComponentOrReplace(transform112)

const concreteWall60 = new Entity('concreteWall60')
engine.addEntity(concreteWall60)
concreteWall60.setParent(_scene)
concreteWall60.addComponentOrReplace(gltfShape3)
const transform113 = new Transform({
  position: new Vector3(6.138684272766113, 12, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall60.addComponentOrReplace(transform113)

const wallPlainGlass59 = new Entity('wallPlainGlass59')
engine.addEntity(wallPlainGlass59)
wallPlainGlass59.setParent(_scene)
wallPlainGlass59.addComponentOrReplace(gltfShape2)
const transform114 = new Transform({
  position: new Vector3(10.892516136169434, 12, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass59.addComponentOrReplace(transform114)

const concreteWall61 = new Entity('concreteWall61')
engine.addEntity(concreteWall61)
concreteWall61.setParent(_scene)
concreteWall61.addComponentOrReplace(gltfShape3)
const transform115 = new Transform({
  position: new Vector3(11.394588470458984, 12, 0.4999995231628418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall61.addComponentOrReplace(transform115)

const wallPlainGlass60 = new Entity('wallPlainGlass60')
engine.addEntity(wallPlainGlass60)
wallPlainGlass60.setParent(_scene)
wallPlainGlass60.addComponentOrReplace(gltfShape2)
const transform116 = new Transform({
  position: new Vector3(16.148420333862305, 12, 0.4999995231628418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass60.addComponentOrReplace(transform116)

const concreteWall62 = new Entity('concreteWall62')
engine.addEntity(concreteWall62)
concreteWall62.setParent(_scene)
concreteWall62.addComponentOrReplace(gltfShape3)
const transform117 = new Transform({
  position: new Vector3(16.651121139526367, 12, 0.4999990463256836),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall62.addComponentOrReplace(transform117)

const wallPlainGlass61 = new Entity('wallPlainGlass61')
engine.addEntity(wallPlainGlass61)
wallPlainGlass61.setParent(_scene)
wallPlainGlass61.addComponentOrReplace(gltfShape2)
const transform118 = new Transform({
  position: new Vector3(21.40495491027832, 12, 0.4999985694885254),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass61.addComponentOrReplace(transform118)

const concreteWall63 = new Entity('concreteWall63')
engine.addEntity(concreteWall63)
concreteWall63.setParent(_scene)
concreteWall63.addComponentOrReplace(gltfShape3)
const transform119 = new Transform({
  position: new Vector3(21.894588470458984, 12, 0.4999980926513672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall63.addComponentOrReplace(transform119)

const wallPlainGlass62 = new Entity('wallPlainGlass62')
engine.addEntity(wallPlainGlass62)
wallPlainGlass62.setParent(_scene)
wallPlainGlass62.addComponentOrReplace(gltfShape2)
const transform120 = new Transform({
  position: new Vector3(26.648420333862305, 12, 0.4999980926513672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass62.addComponentOrReplace(transform120)

const concreteWall64 = new Entity('concreteWall64')
engine.addEntity(concreteWall64)
concreteWall64.setParent(_scene)
concreteWall64.addComponentOrReplace(gltfShape3)
const transform121 = new Transform({
  position: new Vector3(27.151121139526367, 12, 0.499997615814209),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall64.addComponentOrReplace(transform121)

const concreteWall67 = new Entity('concreteWall67')
engine.addEntity(concreteWall67)
concreteWall67.setParent(_scene)
concreteWall67.addComponentOrReplace(gltfShape3)
const transform122 = new Transform({
  position: new Vector3(22.138212203979492, 12, 10.404326438903809),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.25000056624412537, 1, 1.000002384185791)
})
concreteWall67.addComponentOrReplace(transform122)

const wallPlainGlass66 = new Entity('wallPlainGlass66')
engine.addEntity(wallPlainGlass66)
wallPlainGlass66.setParent(_scene)
wallPlainGlass66.addComponentOrReplace(gltfShape2)
const transform123 = new Transform({
  position: new Vector3(22.138214111328125, 12, 10.893959999084473),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.3784279823303223, 1, 1.0000025033950806)
})
wallPlainGlass66.addComponentOrReplace(transform123)

const concreteWall70 = new Entity('concreteWall70')
engine.addEntity(concreteWall70)
concreteWall70.setParent(_scene)
concreteWall70.addComponentOrReplace(gltfShape3)
const transform124 = new Transform({
  position: new Vector3(21.894588470458984, 12, 15.999998092651367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall70.addComponentOrReplace(transform124)

const wallPlainGlass69 = new Entity('wallPlainGlass69')
engine.addEntity(wallPlainGlass69)
wallPlainGlass69.setParent(_scene)
wallPlainGlass69.addComponentOrReplace(gltfShape2)
const transform125 = new Transform({
  position: new Vector3(21.40495491027832, 12, 15.999999046325684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass69.addComponentOrReplace(transform125)

const concreteWall71 = new Entity('concreteWall71')
engine.addEntity(concreteWall71)
concreteWall71.setParent(_scene)
concreteWall71.addComponentOrReplace(gltfShape3)
const transform126 = new Transform({
  position: new Vector3(16.651121139526367, 12, 15.999999046325684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall71.addComponentOrReplace(transform126)

const wallPlainGlass70 = new Entity('wallPlainGlass70')
engine.addEntity(wallPlainGlass70)
wallPlainGlass70.setParent(_scene)
wallPlainGlass70.addComponentOrReplace(gltfShape2)
const transform127 = new Transform({
  position: new Vector3(16.148420333862305, 12, 15.999999046325684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass70.addComponentOrReplace(transform127)

const concreteWall72 = new Entity('concreteWall72')
engine.addEntity(concreteWall72)
concreteWall72.setParent(_scene)
concreteWall72.addComponentOrReplace(gltfShape3)
const transform128 = new Transform({
  position: new Vector3(11.394588470458984, 12, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall72.addComponentOrReplace(transform128)

const wallPlainGlass71 = new Entity('wallPlainGlass71')
engine.addEntity(wallPlainGlass71)
wallPlainGlass71.setParent(_scene)
wallPlainGlass71.addComponentOrReplace(gltfShape2)
const transform129 = new Transform({
  position: new Vector3(10.892516136169434, 12, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass71.addComponentOrReplace(transform129)

const concreteWall73 = new Entity('concreteWall73')
engine.addEntity(concreteWall73)
concreteWall73.setParent(_scene)
concreteWall73.addComponentOrReplace(gltfShape3)
const transform130 = new Transform({
  position: new Vector3(6.138684272766113, 12, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24999991059303284, 1, 0.9999997615814209)
})
concreteWall73.addComponentOrReplace(transform130)

const wallPlainGlass72 = new Entity('wallPlainGlass72')
engine.addEntity(wallPlainGlass72)
wallPlainGlass72.setParent(_scene)
wallPlainGlass72.addComponentOrReplace(gltfShape2)
const transform131 = new Transform({
  position: new Vector3(5.635982513427734, 12, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.378422737121582, 1, 0.9999999403953552)
})
wallPlainGlass72.addComponentOrReplace(transform131)

const wallPlainGlass10 = new Entity('wallPlainGlass10')
engine.addEntity(wallPlainGlass10)
wallPlainGlass10.setParent(_scene)
wallPlainGlass10.addComponentOrReplace(gltfShape2)
const transform132 = new Transform({
  position: new Vector3(7.635982513427734, 7.5, 6.798794269561768),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.567634105682373, 0.019999990239739418, 20.849058151245117)
})
wallPlainGlass10.addComponentOrReplace(transform132)

const rainLight = new Entity('rainLight')
engine.addEntity(rainLight)
rainLight.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(15.377605438232422, 12.073811531066895, 7.036789894104004),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight.addComponentOrReplace(transform133)

const sofaModern = new Entity('sofaModern')
engine.addEntity(sofaModern)
sofaModern.setParent(_scene)
const transform134 = new Transform({
  position: new Vector3(17.36472511291504, 12.018677711486816, 2.0298869609832764),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sofaModern.addComponentOrReplace(transform134)
const gltfShape4 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
sofaModern.addComponentOrReplace(gltfShape4)

const stoolHigh = new Entity('stoolHigh')
engine.addEntity(stoolHigh)
stoolHigh.setParent(_scene)
const transform135 = new Transform({
  position: new Vector3(24.0203800201416, 0, 9.527099609375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh.addComponentOrReplace(transform135)
const gltfShape5 = new GLTFShape("82ffe8b2-1845-499b-9287-67b022348430/HighStool.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
stoolHigh.addComponentOrReplace(gltfShape5)

const stoolMetalBarrel = new Entity('stoolMetalBarrel')
engine.addEntity(stoolMetalBarrel)
stoolMetalBarrel.setParent(_scene)
const transform136 = new Transform({
  position: new Vector3(13.133459091186523, 12.018677711486816, 1.412172555923462),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.477736473083496, 1.477736473083496, 1.477736473083496)
})
stoolMetalBarrel.addComponentOrReplace(transform136)
const gltfShape6 = new GLTFShape("b0ae27c0-22d5-436e-86c8-59450dcbcb31/MetalBarrelStool.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
stoolMetalBarrel.addComponentOrReplace(gltfShape6)

const wallPlainGlass48 = new Entity('wallPlainGlass48')
engine.addEntity(wallPlainGlass48)
wallPlainGlass48.setParent(_scene)
wallPlainGlass48.addComponentOrReplace(gltfShape2)
const transform137 = new Transform({
  position: new Vector3(31.392549514770508, 8, 5.219979286193848),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1129846572875977, 1, 0.9999998807907104)
})
wallPlainGlass48.addComponentOrReplace(transform137)

const concreteWall50 = new Entity('concreteWall50')
engine.addEntity(concreteWall50)
concreteWall50.setParent(_scene)
concreteWall50.addComponentOrReplace(gltfShape3)
const transform138 = new Transform({
  position: new Vector3(22.138212203979492, 8, 10.404326438903809),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.25000062584877014, 1, 1.0000026226043701)
})
concreteWall50.addComponentOrReplace(transform138)

const wallPlainGlass49 = new Entity('wallPlainGlass49')
engine.addEntity(wallPlainGlass49)
wallPlainGlass49.setParent(_scene)
wallPlainGlass49.addComponentOrReplace(gltfShape2)
const transform139 = new Transform({
  position: new Vector3(22.138214111328125, 8, 10.893959999084473),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.3784284591674805, 1, 1.0000027418136597)
})
wallPlainGlass49.addComponentOrReplace(transform139)

const pinkAcaciaTree = new Entity('pinkAcaciaTree')
engine.addEntity(pinkAcaciaTree)
pinkAcaciaTree.setParent(_scene)
const transform140 = new Transform({
  position: new Vector3(26.32653045654297, 0, 11.406880378723145),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pinkAcaciaTree.addComponentOrReplace(transform140)
const gltfShape7 = new GLTFShape("aba03c47-8bd4-4679-9ed4-149129181d21/Tree_Forest_Pink_01/Tree_Forest_Pink_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
pinkAcaciaTree.addComponentOrReplace(gltfShape7)

const wallPlainGlass47 = new Entity('wallPlainGlass47')
engine.addEntity(wallPlainGlass47)
wallPlainGlass47.setParent(_scene)
wallPlainGlass47.addComponentOrReplace(gltfShape2)
const transform141 = new Transform({
  position: new Vector3(22.138214111328125, 12, 5.611344337463379),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.3784289360046387, 1, 1.0000029802322388)
})
wallPlainGlass47.addComponentOrReplace(transform141)

const wallPlainGlass50 = new Entity('wallPlainGlass50')
engine.addEntity(wallPlainGlass50)
wallPlainGlass50.setParent(_scene)
wallPlainGlass50.addComponentOrReplace(gltfShape2)
const transform142 = new Transform({
  position: new Vector3(22.138214111328125, 8, 5.611344337463379),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.378429412841797, 1, 1.0000032186508179)
})
wallPlainGlass50.addComponentOrReplace(transform142)

const concreteWall49 = new Entity('concreteWall49')
engine.addEntity(concreteWall49)
concreteWall49.setParent(_scene)
concreteWall49.addComponentOrReplace(gltfShape3)
const transform143 = new Transform({
  position: new Vector3(22.138212203979492, 8, 5.121710777282715),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.2500007450580597, 1, 1.0000030994415283)
})
concreteWall49.addComponentOrReplace(transform143)

const concreteWall51 = new Entity('concreteWall51')
engine.addEntity(concreteWall51)
concreteWall51.setParent(_scene)
concreteWall51.addComponentOrReplace(gltfShape3)
const transform144 = new Transform({
  position: new Vector3(22.138212203979492, 12, 5.121710777282715),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.2500006854534149, 1, 1.0000028610229492)
})
concreteWall51.addComponentOrReplace(transform144)

const concreteWall68 = new Entity('concreteWall68')
engine.addEntity(concreteWall68)
concreteWall68.setParent(_scene)
concreteWall68.addComponentOrReplace(gltfShape3)
const transform145 = new Transform({
  position: new Vector3(27.161121368408203, 8, 4.7361555099487305),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.25000032782554626, 1, 1.0000014305114746)
})
concreteWall68.addComponentOrReplace(transform145)

const concreteWall69 = new Entity('concreteWall69')
engine.addEntity(concreteWall69)
concreteWall69.setParent(_scene)
concreteWall69.addComponentOrReplace(gltfShape3)
const transform146 = new Transform({
  position: new Vector3(27.161121368408203, 12, 4.7361555099487305),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(0.25000038743019104, 1, 1.0000016689300537)
})
concreteWall69.addComponentOrReplace(transform146)

const wallPlainGlass65 = new Entity('wallPlainGlass65')
engine.addEntity(wallPlainGlass65)
wallPlainGlass65.setParent(_scene)
wallPlainGlass65.addComponentOrReplace(gltfShape2)
const transform147 = new Transform({
  position: new Vector3(26.84499740600586, 12, 5.219979286193848),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.472182035446167, 1, 0.9999998807907104)
})
wallPlainGlass65.addComponentOrReplace(transform147)

const wallPlainGlass68 = new Entity('wallPlainGlass68')
engine.addEntity(wallPlainGlass68)
wallPlainGlass68.setParent(_scene)
wallPlainGlass68.addComponentOrReplace(gltfShape2)
const transform148 = new Transform({
  position: new Vector3(26.84499740600586, 8, 5.219979286193848),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.448901653289795, 1, 0.9999998807907104)
})
wallPlainGlass68.addComponentOrReplace(transform148)

const wallPlainGlass75 = new Entity('wallPlainGlass75')
engine.addEntity(wallPlainGlass75)
wallPlainGlass75.setParent(_scene)
wallPlainGlass75.addComponentOrReplace(gltfShape2)
const transform149 = new Transform({
  position: new Vector3(31.635982513427734, 7.5, 5.155338287353516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(12.158544540405273, 0.019999990239739418, 16.1558895111084)
})
wallPlainGlass75.addComponentOrReplace(transform149)

const squareWoodTable = new Entity('squareWoodTable')
engine.addEntity(squareWoodTable)
squareWoodTable.setParent(_scene)
const transform150 = new Transform({
  position: new Vector3(24.0203800201416, 0, 11.12343978881836),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable.addComponentOrReplace(transform150)
const gltfShape8 = new GLTFShape("36a9ea1e-61b9-4221-a580-74011955a191/Table_03/Table_03.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
squareWoodTable.addComponentOrReplace(gltfShape8)

const stoolHigh2 = new Entity('stoolHigh2')
engine.addEntity(stoolHigh2)
stoolHigh2.setParent(_scene)
stoolHigh2.addComponentOrReplace(gltfShape5)
const transform151 = new Transform({
  position: new Vector3(24.0203800201416, 0, 12.027099609375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh2.addComponentOrReplace(transform151)

const stoolHigh3 = new Entity('stoolHigh3')
engine.addEntity(stoolHigh3)
stoolHigh3.setParent(_scene)
stoolHigh3.addComponentOrReplace(gltfShape5)
const transform152 = new Transform({
  position: new Vector3(28.328401565551758, 0, 12.027099609375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh3.addComponentOrReplace(transform152)

const squareWoodTable2 = new Entity('squareWoodTable2')
engine.addEntity(squareWoodTable2)
squareWoodTable2.setParent(_scene)
squareWoodTable2.addComponentOrReplace(gltfShape8)
const transform153 = new Transform({
  position: new Vector3(28.328401565551758, 0, 11.12343978881836),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable2.addComponentOrReplace(transform153)

const stoolHigh4 = new Entity('stoolHigh4')
engine.addEntity(stoolHigh4)
stoolHigh4.setParent(_scene)
stoolHigh4.addComponentOrReplace(gltfShape5)
const transform154 = new Transform({
  position: new Vector3(28.328401565551758, 0, 9.527099609375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh4.addComponentOrReplace(transform154)

const verticalBlackPad = new Entity('verticalBlackPad')
engine.addEntity(verticalBlackPad)
verticalBlackPad.setParent(_scene)
const transform155 = new Transform({
  position: new Vector3(5.791951656341553, 0, 8.178929328918457),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
verticalBlackPad.addComponentOrReplace(transform155)

const concreteWall74 = new Entity('concreteWall74')
engine.addEntity(concreteWall74)
concreteWall74.setParent(_scene)
concreteWall74.addComponentOrReplace(gltfShape3)
const transform156 = new Transform({
  position: new Vector3(22.138212203979492, 7.586161136627197, 5.156011581420898),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(5.299093246459961, 0.10643482208251953, 1.0000040531158447)
})
concreteWall74.addComponentOrReplace(transform156)

const concreteWall75 = new Entity('concreteWall75')
engine.addEntity(concreteWall75)
concreteWall75.setParent(_scene)
concreteWall75.addComponentOrReplace(gltfShape3)
const transform157 = new Transform({
  position: new Vector3(21.67030906677246, 7.586161136627197, 4.870049953460693),
  rotation: new Quaternion(2.9654350315247565e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(5.035628795623779, 0.10643482208251953, 1.0000044107437134)
})
concreteWall75.addComponentOrReplace(transform157)

const wallPlainGlass77 = new Entity('wallPlainGlass77')
engine.addEntity(wallPlainGlass77)
wallPlainGlass77.setParent(_scene)
wallPlainGlass77.addComponentOrReplace(gltfShape2)
const transform158 = new Transform({
  position: new Vector3(12.728309631347656, 6.5, 15.740211486816406),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.950136661529541, 0.019999990239739418, 20.849058151245117)
})
wallPlainGlass77.addComponentOrReplace(transform158)

const concreteWall76 = new Entity('concreteWall76')
engine.addEntity(concreteWall76)
concreteWall76.setParent(_scene)
concreteWall76.addComponentOrReplace(gltfShape3)
const transform159 = new Transform({
  position: new Vector3(21.67030906677246, 7.586161136627197, 15.705913543701172),
  rotation: new Quaternion(2.9654350315247565e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(5.035628795623779, 0.10643482208251953, 1.0000044107437134)
})
concreteWall76.addComponentOrReplace(transform159)

const concreteWall77 = new Entity('concreteWall77')
engine.addEntity(concreteWall77)
concreteWall77.setParent(_scene)
concreteWall77.addComponentOrReplace(gltfShape3)
const transform160 = new Transform({
  position: new Vector3(31.867206573486328, 7.586161136627197, 5.156011581420898),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(5.299093246459961, 0.10643482208251953, 1.000004529953003)
})
concreteWall77.addComponentOrReplace(transform160)

const verticalBlackPad2 = new Entity('verticalBlackPad2')
engine.addEntity(verticalBlackPad2)
verticalBlackPad2.setParent(_scene)
const transform161 = new Transform({
  position: new Vector3(2.6550252437591553, 0, 8.178929328918457),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
verticalBlackPad2.addComponentOrReplace(transform161)

const concreteWall78 = new Entity('concreteWall78')
engine.addEntity(concreteWall78)
concreteWall78.setParent(_scene)
concreteWall78.addComponentOrReplace(gltfShape3)
const transform162 = new Transform({
  position: new Vector3(31.814929962158203, 12, 0.11458110809326172),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.603084087371826, 0.009999999776482582, 32.322662353515625)
})
concreteWall78.addComponentOrReplace(transform162)

const concreteWall80 = new Entity('concreteWall80')
engine.addEntity(concreteWall80)
concreteWall80.setParent(_scene)
concreteWall80.addComponentOrReplace(gltfShape3)
const transform163 = new Transform({
  position: new Vector3(22.15073013305664, 12, 0.11458206176757812),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(7.913158893585205, 0.009999999776482582, 47.91538619995117)
})
concreteWall80.addComponentOrReplace(transform163)

const wallPlainGlass74 = new Entity('wallPlainGlass74')
engine.addEntity(wallPlainGlass74)
wallPlainGlass74.setParent(_scene)
wallPlainGlass74.addComponentOrReplace(gltfShape2)
const transform164 = new Transform({
  position: new Vector3(7.635982513427734, 12, 6.798794269561768),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.567634105682373, 0.019999990239739418, 20.849058151245117)
})
wallPlainGlass74.addComponentOrReplace(transform164)

const cyberpunkDoor = new Entity('cyberpunkDoor')
engine.addEntity(cyberpunkDoor)
cyberpunkDoor.setParent(_scene)
const transform165 = new Transform({
  position: new Vector3(7.8617706298828125, 12.167110443115234, 5.832988739013672),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
cyberpunkDoor.addComponentOrReplace(transform165)

const concreteWall79 = new Entity('concreteWall79')
engine.addEntity(concreteWall79)
concreteWall79.setParent(_scene)
concreteWall79.addComponentOrReplace(gltfShape3)
const transform166 = new Transform({
  position: new Vector3(22.15073013305664, 16, 0),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(7.913177967071533, 0.6770960688591003, 72.79405975341797)
})
concreteWall79.addComponentOrReplace(transform166)

const concreteWall81 = new Entity('concreteWall81')
engine.addEntity(concreteWall81)
concreteWall81.setParent(_scene)
concreteWall81.addComponentOrReplace(gltfShape3)
const transform167 = new Transform({
  position: new Vector3(27.05869483947754, 16, 0.11458158493041992),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.6030828952789307, 0.03122912533581257, 16.484575271606445)
})
concreteWall81.addComponentOrReplace(transform167)

const wallPlainGlass63 = new Entity('wallPlainGlass63')
engine.addEntity(wallPlainGlass63)
wallPlainGlass63.setParent(_scene)
wallPlainGlass63.addComponentOrReplace(gltfShape2)
const transform168 = new Transform({
  position: new Vector3(31.55202865600586, 12, 0.49999749660491943),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.185181140899658, 0.20073744654655457, 0.9999999403953552)
})
wallPlainGlass63.addComponentOrReplace(transform168)

const concreteWall65 = new Entity('concreteWall65')
engine.addEntity(concreteWall65)
concreteWall65.setParent(_scene)
concreteWall65.addComponentOrReplace(gltfShape3)
const transform169 = new Transform({
  position: new Vector3(31.818078994750977, 12, 0.499997079372406),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.1339031606912613, 0.21778088808059692, 0.9999997615814209)
})
concreteWall65.addComponentOrReplace(transform169)

const wallPlainGlass64 = new Entity('wallPlainGlass64')
engine.addEntity(wallPlainGlass64)
wallPlainGlass64.setParent(_scene)
wallPlainGlass64.addComponentOrReplace(gltfShape2)
const transform170 = new Transform({
  position: new Vector3(31.55202865600586, 12, 5.240045547485352),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.185181140899658, 0.20073744654655457, 0.9999999403953552)
})
wallPlainGlass64.addComponentOrReplace(transform170)

const concreteWall66 = new Entity('concreteWall66')
engine.addEntity(concreteWall66)
concreteWall66.setParent(_scene)
concreteWall66.addComponentOrReplace(gltfShape3)
const transform171 = new Transform({
  position: new Vector3(31.818078994750977, 12, 5.240045547485352),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.1339031606912613, 0.21778088808059692, 0.9999997615814209)
})
concreteWall66.addComponentOrReplace(transform171)

const wallPlainGlass67 = new Entity('wallPlainGlass67')
engine.addEntity(wallPlainGlass67)
wallPlainGlass67.setParent(_scene)
wallPlainGlass67.addComponentOrReplace(gltfShape2)
const transform172 = new Transform({
  position: new Vector3(31.846891403198242, 12, 0.459195613861084),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.272592782974243, 0.20073744654655457, 1.0000015497207642)
})
wallPlainGlass67.addComponentOrReplace(transform172)

const wallWhiteBricks = new Entity('wallWhiteBricks')
engine.addEntity(wallWhiteBricks)
wallWhiteBricks.setParent(_scene)
const transform173 = new Transform({
  position: new Vector3(2.966355562210083, 12.136510848999023, 10.825540542602539),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallWhiteBricks.addComponentOrReplace(transform173)
const gltfShape9 = new GLTFShape("88c8ac33-d706-46e1-a865-ea62e37b9782/Wall_Brick_White.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
wallWhiteBricks.addComponentOrReplace(gltfShape9)

const wallWhiteBricks2 = new Entity('wallWhiteBricks2')
engine.addEntity(wallWhiteBricks2)
wallWhiteBricks2.setParent(_scene)
wallWhiteBricks2.addComponentOrReplace(gltfShape9)
const transform174 = new Transform({
  position: new Vector3(5.467052936553955, 12.136510848999023, 10.825540542602539),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallWhiteBricks2.addComponentOrReplace(transform174)

const wallWhiteBricks3 = new Entity('wallWhiteBricks3')
engine.addEntity(wallWhiteBricks3)
wallWhiteBricks3.setParent(_scene)
wallWhiteBricks3.addComponentOrReplace(gltfShape9)
const transform175 = new Transform({
  position: new Vector3(7.9777984619140625, 12.136510848999023, 10.825540542602539),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallWhiteBricks3.addComponentOrReplace(transform175)

const concreteWall82 = new Entity('concreteWall82')
engine.addEntity(concreteWall82)
concreteWall82.setParent(_scene)
concreteWall82.addComponentOrReplace(gltfShape3)
const transform176 = new Transform({
  position: new Vector3(7.7758073806762695, 12, 10.402868270874023),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.7397243976593018, 0.009999999776482582, 23.41106414794922)
})
concreteWall82.addComponentOrReplace(transform176)

const wallWhiteBricks4 = new Entity('wallWhiteBricks4')
engine.addEntity(wallWhiteBricks4)
wallWhiteBricks4.setParent(_scene)
wallWhiteBricks4.addComponentOrReplace(gltfShape9)
const transform177 = new Transform({
  position: new Vector3(7.9777984619140625, 12.136510848999023, 10.825540542602539),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
wallWhiteBricks4.addComponentOrReplace(transform177)

const wallWhiteBricks5 = new Entity('wallWhiteBricks5')
engine.addEntity(wallWhiteBricks5)
wallWhiteBricks5.setParent(_scene)
wallWhiteBricks5.addComponentOrReplace(gltfShape9)
const transform178 = new Transform({
  position: new Vector3(7.9777984619140625, 12.136510848999023, 8.325540542602539),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
wallWhiteBricks5.addComponentOrReplace(transform178)

const wallWhiteBricks6 = new Entity('wallWhiteBricks6')
engine.addEntity(wallWhiteBricks6)
wallWhiteBricks6.setParent(_scene)
wallWhiteBricks6.addComponentOrReplace(gltfShape9)
const transform179 = new Transform({
  position: new Vector3(7.9777984619140625, 12.136510848999023, 3.825540542602539),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.328182578086853, 1, 1.0000011920928955)
})
wallWhiteBricks6.addComponentOrReplace(transform179)

const armchairWhiteModern3 = new Entity('armchairWhiteModern3')
engine.addEntity(armchairWhiteModern3)
armchairWhiteModern3.setParent(_scene)
const gltfShape10 = new GLTFShape("bd3d2d45-9aaf-4785-90ed-83fde84f8841/WhiteModernArmchair.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
armchairWhiteModern3.addComponentOrReplace(gltfShape10)
const transform180 = new Transform({
  position: new Vector3(13.713160514831543, 12.105035781860352, 12.559438705444336),
  rotation: new Quaternion(-1.0371868675943256e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
armchairWhiteModern3.addComponentOrReplace(transform180)

const crossTable2 = new Entity('crossTable2')
engine.addEntity(crossTable2)
crossTable2.setParent(_scene)
const gltfShape11 = new GLTFShape("741e12b9-17c2-4c59-bf8d-871780fbf0cd/CrossTable.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
crossTable2.addComponentOrReplace(gltfShape11)
const transform181 = new Transform({
  position: new Vector3(15.488436698913574, 12.062040328979492, 12.804413795471191),
  rotation: new Quaternion(-1.0371868675943256e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.7304713726043701, 0.7304713726043701, 0.7304713726043701)
})
crossTable2.addComponentOrReplace(transform181)

const scroll = new Entity('scroll')
engine.addEntity(scroll)
scroll.setParent(_scene)
const transform182 = new Transform({
  position: new Vector3(15.1104154586792, 12.632245063781738, 12.93878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scroll.addComponentOrReplace(transform182)

const constellationRug = new Entity('constellationRug')
engine.addEntity(constellationRug)
constellationRug.setParent(_scene)
const transform183 = new Transform({
  position: new Vector3(15.242377281188965, 12.071587562561035, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
constellationRug.addComponentOrReplace(transform183)
const gltfShape12 = new GLTFShape("d46670bf-a528-4680-84a6-39ca83a3caca/Carpet_01/Carpet_01.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
constellationRug.addComponentOrReplace(gltfShape12)

const cyanMagicStone = new Entity('cyanMagicStone')
engine.addEntity(cyanMagicStone)
cyanMagicStone.setParent(_scene)
const transform184 = new Transform({
  position: new Vector3(9.055366516113281, 11.916704177856445, 9.997773170471191),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cyanMagicStone.addComponentOrReplace(transform184)
const gltfShape13 = new GLTFShape("7d966086-6ac2-4875-b2fd-515993273e77/Crystal_03/Crystal_03.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
cyanMagicStone.addComponentOrReplace(gltfShape13)

const bedKing = new Entity('bedKing')
engine.addEntity(bedKing)
bedKing.setParent(_scene)
const transform185 = new Transform({
  position: new Vector3(5.638645648956299, 12.08144474029541, 10.93896198272705),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bedKing.addComponentOrReplace(transform185)
const gltfShape14 = new GLTFShape("46b54f75-ad9d-4b63-98ac-a733c4088998/Bed King.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
bedKing.addComponentOrReplace(gltfShape14)

const armchairWhiteModern4 = new Entity('armchairWhiteModern4')
engine.addEntity(armchairWhiteModern4)
armchairWhiteModern4.setParent(_scene)
armchairWhiteModern4.addComponentOrReplace(gltfShape10)
const transform186 = new Transform({
  position: new Vector3(16.32718849182129, 12.105035781860352, 13.151358604431152),
  rotation: new Quaternion(-5.116929422495017e-15, 0.7071067690849304, -8.429368847373553e-8, -0.70710688829422),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
armchairWhiteModern4.addComponentOrReplace(transform186)

const sofaModern2 = new Entity('sofaModern2')
engine.addEntity(sofaModern2)
sofaModern2.setParent(_scene)
sofaModern2.addComponentOrReplace(gltfShape4)
const transform187 = new Transform({
  position: new Vector3(28.323631286621094, 0, 2.02988600730896),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sofaModern2.addComponentOrReplace(transform187)

const stoolMetalBarrel2 = new Entity('stoolMetalBarrel2')
engine.addEntity(stoolMetalBarrel2)
stoolMetalBarrel2.setParent(_scene)
stoolMetalBarrel2.addComponentOrReplace(gltfShape6)
const transform188 = new Transform({
  position: new Vector3(24.092365264892578, 0, 1.4121716022491455),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.477736473083496, 1.477736473083496, 1.477736473083496)
})
stoolMetalBarrel2.addComponentOrReplace(transform188)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform189 = new Transform({
  position: new Vector3(13.700994491577148, 1.234055757522583, 0.505962610244751),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.75, 7, 0.9999998807907104)
})
nftPictureFrame2.addComponentOrReplace(transform189)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform190 = new Transform({
  position: new Vector3(18.938440322875977, 1.234055757522583, 0.5059621930122375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.75, 7, 0.9999998807907104)
})
nftPictureFrame3.addComponentOrReplace(transform190)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform191 = new Transform({
  position: new Vector3(8.433426856994629, 1.234055757522583, 0.5059632062911987),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.75, 7, 0.9999998807907104)
})
nftPictureFrame4.addComponentOrReplace(transform191)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform192 = new Transform({
  position: new Vector3(3.4401984214782715, 1.2272155284881592, 15.733426094055176),
  rotation: new Quaternion(6.721179331408561e-15, -1, 1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(6.75, 7, 0.9999998807907104)
})
nftPictureFrame10.addComponentOrReplace(transform192)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform193 = new Transform({
  position: new Vector3(8.35143756866455, 13.222813606262207, 8.255914688110352),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.3750083446502686, 3.5, 1.0000015497207642)
})
nftPictureFrame.addComponentOrReplace(transform193)

const nftPictureFrame11 = new Entity('nftPictureFrame11')
engine.addEntity(nftPictureFrame11)
nftPictureFrame11.setParent(_scene)
const transform194 = new Transform({
  position: new Vector3(3.4401984214782715, 1.2272155284881592, 15.733426094055176),
  rotation: new Quaternion(6.721179331408561e-15, -1, 1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(6.75, 7, 0.9999998807907104)
})
nftPictureFrame11.addComponentOrReplace(transform194)

const nftPictureFrame12 = new Entity('nftPictureFrame12')
engine.addEntity(nftPictureFrame12)
nftPictureFrame12.setParent(_scene)
const transform195 = new Transform({
  position: new Vector3(12.075948715209961, 0.8850464820861816, 8.00131893157959),
  rotation: new Quaternion(6.721179331408561e-15, -1, 1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(6.75, 7, 0.9999998807907104)
})
nftPictureFrame12.addComponentOrReplace(transform195)

const tieredDesk = new Entity('tieredDesk')
engine.addEntity(tieredDesk)
tieredDesk.setParent(_scene)
const transform196 = new Transform({
  position: new Vector3(21.576114654541016, 12.024524688720703, 8.010149002075195),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
tieredDesk.addComponentOrReplace(transform196)
const gltfShape15 = new GLTFShape("337f9d3d-cd76-4172-9f54-16c64a348734/Desk_01/Desk_01.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
tieredDesk.addComponentOrReplace(gltfShape15)

const chairHighBack = new Entity('chairHighBack')
engine.addEntity(chairHighBack)
chairHighBack.setParent(_scene)
const transform197 = new Transform({
  position: new Vector3(20.844030380249023, 12.033538818359375, 7.677361965179443),
  rotation: new Quaternion(3.809131304241585e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
chairHighBack.addComponentOrReplace(transform197)
const gltfShape16 = new GLTFShape("9cc4b4a2-46b6-4b49-aef9-da3959de0ac8/HighBackChair.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
chairHighBack.addComponentOrReplace(gltfShape16)

const videoComputerScreen = new Entity('videoComputerScreen')
engine.addEntity(videoComputerScreen)
videoComputerScreen.setParent(_scene)
const transform198 = new Transform({
  position: new Vector3(21.03486442565918, 12.925978660583496, 7.944777488708496),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
videoComputerScreen.addComponentOrReplace(transform198)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform199 = new Transform({
  position: new Vector3(3.4401984214782715, 7.55727481842041, 15.733426094055176),
  rotation: new Quaternion(6.721179331408561e-15, -1, 1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(6.75, 7, 0.9999998807907104)
})
nftPictureFrame13.addComponentOrReplace(transform199)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform200 = new Transform({
  position: new Vector3(8.543938636779785, 7.55727481842041, 15.733426094055176),
  rotation: new Quaternion(6.721179331408561e-15, -1, 1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(6.75, 7, 0.9999998807907104)
})
nftPictureFrame14.addComponentOrReplace(transform200)

const isfahanRug = new Entity('isfahanRug')
engine.addEntity(isfahanRug)
isfahanRug.setParent(_scene)
const transform201 = new Transform({
  position: new Vector3(18.739547729492188, 0.0534517765045166, 10.497361183166504),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
isfahanRug.addComponentOrReplace(transform201)
const gltfShape17 = new GLTFShape("ad246a68-7e29-4cb1-a71f-e0b1d4f0c57d/Carpet_03/Carpet_03.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
isfahanRug.addComponentOrReplace(gltfShape17)

const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform202 = new Transform({
  position: new Vector3(23.76083755493164, 0.7955000400543213, 1.4433804750442505),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5845165252685547, 0.5845165252685547, 0.5845165252685547)
})
radio.addComponentOrReplace(transform202)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform203 = new Transform({
  position: new Vector3(11.650337219238281, 16.37198829650879, 15.881234169006348),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(12.190583229064941, 12.190583229064941, 27.041263580322266)
})
plainText.addComponentOrReplace(transform203)

const teleport = new Entity('teleport')
engine.addEntity(teleport)
teleport.setParent(_scene)
const transform204 = new Transform({
  position: new Vector3(3.7872366905212402, 7.547674179077148, 3.382775068283081),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
teleport.addComponentOrReplace(transform204)

const armchairWhiteModern = new Entity('armchairWhiteModern')
engine.addEntity(armchairWhiteModern)
armchairWhiteModern.setParent(_scene)
armchairWhiteModern.addComponentOrReplace(gltfShape10)
const transform205 = new Transform({
  position: new Vector3(2.4046807289123535, 6.620944023132324, 12.007169723510742),
  rotation: new Quaternion(-1.7065523248214315e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
armchairWhiteModern.addComponentOrReplace(transform205)

const crossTable = new Entity('crossTable')
engine.addEntity(crossTable)
crossTable.setParent(_scene)
crossTable.addComponentOrReplace(gltfShape11)
const transform206 = new Transform({
  position: new Vector3(4.179956912994385, 6.577948570251465, 12.252145767211914),
  rotation: new Quaternion(-1.7065523248214315e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.7304718494415283, 0.7304713726043701, 0.7304718494415283)
})
crossTable.addComponentOrReplace(transform206)

const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform207 = new Transform({
  position: new Vector3(30.56267547607422, 13.405531883239746, 2.603851318359375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ambientSound.addComponentOrReplace(transform207)

const rainLight2 = new Entity('rainLight2')
engine.addEntity(rainLight2)
rainLight2.setParent(_scene)
const transform208 = new Transform({
  position: new Vector3(6.353038311004639, 8.03255558013916, 12.696813583374023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight2.addComponentOrReplace(transform208)

const nftPictureFrame15 = new Entity('nftPictureFrame15')
engine.addEntity(nftPictureFrame15)
nftPictureFrame15.setParent(_scene)
const transform209 = new Transform({
  position: new Vector3(24.26797866821289, 8.250262260437012, 0.505961537361145),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.75, 7, 0.9999998807907104)
})
nftPictureFrame15.addComponentOrReplace(transform209)

const nftPictureFrame17 = new Entity('nftPictureFrame17')
engine.addEntity(nftPictureFrame17)
nftPictureFrame17.setParent(_scene)
const transform210 = new Transform({
  position: new Vector3(3.2022409439086914, 1.234055757522583, 0.5059635639190674),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.75, 7, 0.9999998807907104)
})
nftPictureFrame17.addComponentOrReplace(transform210)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform211 = new Transform({
  position: new Vector3(19.0013370513916, 8.558727264404297, 0.5357899069786072),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.4561517238616943, 2.787317991256714, 0.9999999403953552)
})
imageFromURL.addComponentOrReplace(transform211)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform212 = new Transform({
  position: new Vector3(20.671968460083008, 9.451189994812012, 0.5673275589942932),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform212)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform213 = new Transform({
  position: new Vector3(15.327056884765625, 9.451189994812012, 0.567328155040741),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink2.addComponentOrReplace(transform213)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform214 = new Transform({
  position: new Vector3(13.656425476074219, 8.558727264404297, 0.5357905030250549),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.4561517238616943, 2.787317991256714, 0.9999999403953552)
})
imageFromURL2.addComponentOrReplace(transform214)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene)
const transform215 = new Transform({
  position: new Vector3(10.219015121459961, 9.451189994812012, 0.5673285722732544),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink3.addComponentOrReplace(transform215)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform216 = new Transform({
  position: new Vector3(8.548383712768555, 8.558727264404297, 0.5357909202575684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.4561517238616943, 2.787317991256714, 0.9999999403953552)
})
imageFromURL3.addComponentOrReplace(transform216)

const crossTable3 = new Entity('crossTable3')
engine.addEntity(crossTable3)
crossTable3.setParent(_scene)
crossTable3.addComponentOrReplace(gltfShape11)
const transform217 = new Transform({
  position: new Vector3(9.591816902160645, 6.577948570251465, 12.007169723510742),
  rotation: new Quaternion(7.873027249127688e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.7304723262786865, 0.7304713726043701, 0.7304723262786865)
})
crossTable3.addComponentOrReplace(transform217)

const armchairWhiteModern2 = new Entity('armchairWhiteModern2')
engine.addEntity(armchairWhiteModern2)
armchairWhiteModern2.setParent(_scene)
armchairWhiteModern2.addComponentOrReplace(gltfShape10)
const transform218 = new Transform({
  position: new Vector3(11.367093086242676, 6.620944023132324, 12.252145767211914),
  rotation: new Quaternion(7.873027249127688e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1.0000017881393433, 1, 1.0000017881393433)
})
armchairWhiteModern2.addComponentOrReplace(transform218)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform219 = new Transform({
  position: new Vector3(6.755953311920166, 13.669578552246094, 10.949745178222656),
  rotation: new Quaternion(1.3905401081894947e-15, 5.960464477539063e-8, -3.2507047167316906e-15, -1),
  scale: new Vector3(3.375009775161743, 3.5, 1.0000019073486328)
})
nftPictureFrame5.addComponentOrReplace(transform219)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform220 = new Transform({
  position: new Vector3(2.340730667114258, 13.669578552246094, 10.949745178222656),
  rotation: new Quaternion(1.3905401081894947e-15, 5.960464477539063e-8, -3.2507047167316906e-15, -1),
  scale: new Vector3(3.375009775161743, 3.5, 1.0000019073486328)
})
nftPictureFrame6.addComponentOrReplace(transform220)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform221 = new Transform({
  position: new Vector3(8.35143756866455, 13.222813606262207, 2.3382949829101562),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.375009298324585, 3.5, 1.0000017881393433)
})
nftPictureFrame7.addComponentOrReplace(transform221)

const parrot = new Entity('parrot')
engine.addEntity(parrot)
parrot.setParent(_scene)
const transform222 = new Transform({
  position: new Vector3(25.76421356201172, 2.94738507270813, 11.012203216552734),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
parrot.addComponentOrReplace(transform222)

const blockFloorLight = new Entity('blockFloorLight')
engine.addEntity(blockFloorLight)
blockFloorLight.setParent(_scene)
const transform223 = new Transform({
  position: new Vector3(16.538318634033203, 0, 15.585015296936035),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blockFloorLight.addComponentOrReplace(transform223)

const blockFloorLight2 = new Entity('blockFloorLight2')
engine.addEntity(blockFloorLight2)
blockFloorLight2.setParent(_scene)
const transform224 = new Transform({
  position: new Vector3(21.78324317932129, 0, 15.585015296936035),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blockFloorLight2.addComponentOrReplace(transform224)

const classicChandelier = new Entity('classicChandelier')
engine.addEntity(classicChandelier)
classicChandelier.setParent(_scene)
const transform225 = new Transform({
  position: new Vector3(25.5, 3.507340669631958, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
classicChandelier.addComponentOrReplace(transform225)

const pillarSimpleRound = new Entity('pillarSimpleRound')
engine.addEntity(pillarSimpleRound)
pillarSimpleRound.setParent(_scene)
const transform226 = new Transform({
  position: new Vector3(21.39735984802246, 0, 15.926440238952637),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillarSimpleRound.addComponentOrReplace(transform226)
const gltfShape18 = new GLTFShape("b587438c-9430-475f-98c5-3ce680627921/SimpleRoundPillar.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
pillarSimpleRound.addComponentOrReplace(gltfShape18)

const pillarSimpleRound2 = new Entity('pillarSimpleRound2')
engine.addEntity(pillarSimpleRound2)
pillarSimpleRound2.setParent(_scene)
pillarSimpleRound2.addComponentOrReplace(gltfShape18)
const transform227 = new Transform({
  position: new Vector3(17.050119400024414, 0, 15.926440238952637),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillarSimpleRound2.addComponentOrReplace(transform227)

const wallWhiteBricks7 = new Entity('wallWhiteBricks7')
engine.addEntity(wallWhiteBricks7)
wallWhiteBricks7.setParent(_scene)
wallWhiteBricks7.addComponentOrReplace(gltfShape9)
const transform228 = new Transform({
  position: new Vector3(12.17425537109375, 0.10361266136169434, 8.111468315124512),
  rotation: new Quaternion(-2.177062080483132e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.3281841278076172, 1, 1.0000026226043701)
})
wallWhiteBricks7.addComponentOrReplace(transform228)

const wallWhiteBricks8 = new Entity('wallWhiteBricks8')
engine.addEntity(wallWhiteBricks8)
wallWhiteBricks8.setParent(_scene)
wallWhiteBricks8.addComponentOrReplace(gltfShape9)
const transform229 = new Transform({
  position: new Vector3(8.87181282043457, 0.10361266136169434, 8.111468315124512),
  rotation: new Quaternion(-2.177062080483132e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.3281841278076172, 1, 1.0000026226043701)
})
wallWhiteBricks8.addComponentOrReplace(transform229)

const nftPictureFrame16 = new Entity('nftPictureFrame16')
engine.addEntity(nftPictureFrame16)
nftPictureFrame16.setParent(_scene)
const transform230 = new Transform({
  position: new Vector3(12.207717895507812, 0.8369958400726318, 8.473502159118652),
  rotation: new Quaternion(7.525816585586889e-15, -3.725290298461914e-8, -3.552713678800501e-15, 1),
  scale: new Vector3(6.750001430511475, 7, 1.0000001192092896)
})
nftPictureFrame16.addComponentOrReplace(transform230)

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
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
const script11 = new Script11()
const script12 = new Script12()
const script13 = new Script13()
const script14 = new Script14()
const script15 = new Script15()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script11.init(options)
script12.init(options)
script13.init(options)
script14.init(options)
script15.init(options)
script1.spawn(rainLight, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight, channelBus))
script2.spawn(verticalBlackPad, {"distance":14,"speed":4,"autoStart":true,"onReachEnd":[{"entityName":"verticalBlackPad","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalBlackPad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalBlackPad, channelBus))
script2.spawn(verticalBlackPad2, {"distance":14,"speed":6,"autoStart":true,"onReachEnd":[{"entityName":"verticalBlackPad2","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalBlackPad2","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalBlackPad2, channelBus))
script3.spawn(cyberpunkDoor, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor","actionId":"toggle","values":{}}]}, createChannel(channelId, cyberpunkDoor, channelBus))
script4.spawn(scroll, {"text":"Welcome to the Penthouse!","fontSize":36}, createChannel(channelId, scroll, channelBus))
script5.spawn(nftPictureFrame2, {"id":"14690091202296011974165920650720111904692441850638714977737035360108166512641","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_White","color":"#FFFFFF","ui":true,"uiText":"Accepting Bids"}, createChannel(channelId, nftPictureFrame2, channelBus))
script5.spawn(nftPictureFrame3, {"id":"108903064804058661802429717153937678236356840907516168847575435069163699175425","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_White","color":"#FFFFFF","ui":true,"uiText":"Accepting Bids"}, createChannel(channelId, nftPictureFrame3, channelBus))
script5.spawn(nftPictureFrame4, {"id":"9675820150197947440954866617288006727862474997644783512113762572609720942593","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_White","color":"#FFFFFF","ui":true,"uiText":"Accepting Bids"}, createChannel(channelId, nftPictureFrame4, channelBus))
script5.spawn(nftPictureFrame10, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script5.spawn(nftPictureFrame, {"id":"9675820150197947440954866617288006727862474997644783512113762566012651175937","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_White","color":"#FFFFFF","ui":true,"uiText":"Accepting Bids"}, createChannel(channelId, nftPictureFrame, channelBus))
script5.spawn(nftPictureFrame11, {"id":"9675820150197947440954866617288006727862474997644783512113762493444883742721","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_White","color":"#FFFFFF","ui":true,"uiText":"Accepting Bids"}, createChannel(channelId, nftPictureFrame11, channelBus))
script5.spawn(nftPictureFrame12, {"id":"9675820150197947440954866617288006727862474997644783512113762489046837231617","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_White","color":"#FFFFFF","ui":true,"uiText":"Accepting Bids"}, createChannel(channelId, nftPictureFrame12, channelBus))
script6.spawn(videoComputerScreen, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoComputerScreen","actionId":"toggle","values":{}}]}, createChannel(channelId, videoComputerScreen, channelBus))
script5.spawn(nftPictureFrame13, {"id":"9675820150197947440954866617288006727862474997644783512113762469255627931649","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script5.spawn(nftPictureFrame14, {"id":"278","contract":"0xb038c86e3293de253bdd1f800a048e2ab6e57104","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script7.spawn(radio, {"startOn":false,"volume":1,"onClickText":"Radio On/Off","onClick":[{"entityName":"radio","actionId":"toggle","values":{}}]}, createChannel(channelId, radio, channelBus))
script8.spawn(plainText, {"text":"The Penthouse","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))
script9.spawn(teleport, {"x":"51","y":"-114","name":"G"}, createChannel(channelId, teleport, channelBus))
script10.spawn(ambientSound, {"sound":"Birds","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
script1.spawn(rainLight2, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight2, channelBus))
script5.spawn(nftPictureFrame15, {"id":"9675820150197947440954866617288006727862474997644783512113762562714116292609","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_White","color":"#FFFFFF","ui":true,"uiText":"Accepting Bids"}, createChannel(channelId, nftPictureFrame15, channelBus))
script5.spawn(nftPictureFrame17, {"id":"9675820150197947440954866617288006727862474997644783512113762567112162803713","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_White","color":"#FFFFFF","ui":true,"uiText":"Accepting Bids"}, createChannel(channelId, nftPictureFrame17, channelBus))
script11.spawn(imageFromURL, {"image":"https://img.tofunft.com/image/https%3A%2F%2Fimg.tofunft.com%2Fipfs%2FQmdKZj1v7cVYuFPZjg5xCVGrsDzW4rB29SzZZahHBDi3dw%2F75.png/1440.png"}, createChannel(channelId, imageFromURL, channelBus))
script12.spawn(externalLink, {"url":"https://tofunft.com/nft/celo/0x9f46B8290A6D41B28dA037aDE0C3eBe24a5D1160/75","name":"Purchase NFT"}, createChannel(channelId, externalLink, channelBus))
script12.spawn(externalLink2, {"url":"https://tofunft.com/nft/celo/0xc8DF51073CD581902b4fb50131d31f29343131F0/294","name":"Purchase NFT"}, createChannel(channelId, externalLink2, channelBus))
script11.spawn(imageFromURL2, {"image":"https://img.tofunft.com/image/https%3A%2F%2Fimg.tofunft.com%2Fipfs%2FQmf4SjPj66qMwWsN34e35tjya6BA5a7abA8B2ct9DaizSC%2F294.png/1440.png"}, createChannel(channelId, imageFromURL2, channelBus))
script12.spawn(externalLink3, {"url":"https://tofunft.com/nft/celo/0xAc80c3c8b122DB4DcC3C351ca93aC7E0927C605d/3527","name":"Purchase NFT"}, createChannel(channelId, externalLink3, channelBus))
script11.spawn(imageFromURL3, {"image":"https://img.tofunft.com/image/https%3A%2F%2Fimg.tofunft.com%2Fipfs%2FQme97ifAexrMDfjE3DZRMasWhe7D276uYsCGonyprSA2MJ%2F3527.png/1440.png"}, createChannel(channelId, imageFromURL3, channelBus))
script5.spawn(nftPictureFrame5, {"id":"92877229357164046472028175889131918179999340354375960899241609975561199812609","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script5.spawn(nftPictureFrame6, {"id":"92877229357164046472028175889131918179999340354375960899241609920585618423809","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script5.spawn(nftPictureFrame7, {"id":"7783","contract":"0x2963ba471e265e5f51cafafca78310fe87f8e6d1","style":"Minimal_White","color":"#FFFFFF","ui":true,"uiText":"Accepting Bids"}, createChannel(channelId, nftPictureFrame7, channelBus))
script13.spawn(parrot, {"onActivate":[]}, createChannel(channelId, parrot, channelBus))
script14.spawn(blockFloorLight, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight, channelBus))
script14.spawn(blockFloorLight2, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight2, channelBus))
script15.spawn(classicChandelier, {"startOn":true,"clickable":true}, createChannel(channelId, classicChandelier, channelBus))
script5.spawn(nftPictureFrame16, {"id":"9675820150197947440954866617288006727862474997644783512113762495643906998273","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Minimal_White","color":"#FFFFFF","ui":true,"uiText":"Accepting Bids"}, createChannel(channelId, nftPictureFrame16, channelBus))