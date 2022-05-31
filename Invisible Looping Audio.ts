// I was having issues playing mp3s, so this is for turning an mp3 into an mp4 with no video and then looping it on a video screen that is so small nobody can see it

const myVideoClip = new VideoClip(
  'sounds/video.mp4'
)

const myVideoTexture = new VideoTexture(myVideoClip)

const myMaterial = new Material()
myMaterial.albedoTexture = myVideoTexture
myMaterial.roughness = 1
myMaterial.specularIntensity = 0
myMaterial.metallic = 0

const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(
  new Transform({
    position: new Vector3(8, 1, 8),
    scale: new Vector3(.0001,.0001,.0001)
  })
)
screen.addComponent(myMaterial)
engine.addEntity(screen)

myVideoTexture.play()
myVideoTexture.loop = true
