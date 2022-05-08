//Video Screen

// #1
const myVideoClip = new VideoClip(
  'https://player.vimeo.com/external/704661573.m3u8?s=e8e8bfb5ba847897c23b8c8d844eb96c4009bc32'
)
const myVideoClip2 = new VideoClip(
  'https://player.vimeo.com/external/704660909.m3u8?s=7c88117ea47caa3d8ae50bc4256fa54bf9ee30fa'
)

// #2
const myVideoTexture = new VideoTexture(myVideoClip)
const myVideoTexture2 = new VideoTexture(myVideoClip2)

const videoTextureVersatile = new VideoTexture(myVideoClip)

// #3
const myMaterial = new Material()
myMaterial.albedoTexture = myVideoTexture
myMaterial.roughness = 1
myMaterial.specularIntensity = 0
myMaterial.metallic = 0

//const myMaterial2 = new Material()
//myMaterial2.albedoTexture = myVideoTexture2
//myMaterial2.roughness = 1
//myMaterial2.specularIntensity = 0
//myMaterial2.metallic = 0

// #4
const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(
  new Transform({
    position: new Vector3(8, 2.5, 8),
    scale: new Vector3(16/2,9/2,1)
  })
)
screen.addComponent(myMaterial)
//screen.addComponent(
//new OnPointerDown(() => {
//  //log("clicked")
//  //myVideoTexture.playing = !myVideoTexture.playing
////  myVideoTexture.pause()
//  if (myMaterial.albedoTexture == myVideoTexture) {
//    myMaterial.albedoTexture = myVideoTexture2
//    myVideoTexture.pause()
//    myVideoTexture2.play()
//  }
//  else {
//    myMaterial.albedoTexture = myVideoTexture
//    myVideoTexture2.pause()
//    myVideoTexture.play()
//  }
//})
)
engine.addEntity(screen)

//table for song data
//currently songs will be used for the 2 videos in order to test indexing the arrays
const songs = [
  ["https://player.vimeo.com/external/705195348.m3u8?s=cda4fa7a57702e166872527c43284c9cd58e255f", "Zombie - The Cranberries"],
  ["https://player.vimeo.com/external/705195284.m3u8?s=7c832b142a472828b753b6b3b578624d7032ac9b","Tennessee Whiskey - Chris Stapleton"],
  ["https://player.vimeo.com/external/705195262.m3u8?s=2843d0fa9df81b486a49f8beed6013d334759ce2", "Take My Breath Away - Top Gun (Berlin)"],
  ["https://player.vimeo.com/external/705195298.m3u8?s=4195993d33f684628543d3c7fbc32f16479ddb6d","Just Like Heaven - The Cure"],
  ["https://player.vimeo.com/external/705195012.m3u8?s=bf6b2c7da69e816aee2cb1dae09a9beba96955d2","Mr. Brightside - The Killers"],
  ["https://player.vimeo.com/external/705194981.m3u8?s=d7bd4981a83cecf95d1fbca8ef36b41b84a56e0a","Losing My Religion - R.E.M."],
  ["https://player.vimeo.com/external/705195064.m3u8?s=ad3058d8b516d471512ea85f5f00e3441049ebe7","Wonderwall - Oasis"],
  ["https://player.vimeo.com/external/705194903.m3u8?s=2d4402436c891e14a78a53fc54e692cbd399175d","Sorry - Justin Bieber"],
  ["https://player.vimeo.com/external/705194770.m3u8?s=80ad292a9ac54bf8777089a894f7c0c8b51e6c72","Ghost - Justin Bieber"],
  ["https://player.vimeo.com/external/705194781.m3u8?s=395371c568e53941c946031647ed19272a4b34de","Girl On Fire - Alicia Keys"],
  ["https://player.vimeo.com/external/705195180.m3u8?s=6ea7018c1dc70ed21a9cff6082e795d1fe47d766","Someone You Loved - Lewis Capaldi"],
  ["https://player.vimeo.com/external/705195045.m3u8?s=13c60025ef254f566558ed92e39f267d5a51ba22","Welcome To The Black Parade - MCR"],
  ["https://player.vimeo.com/external/705195029.m3u8?s=467b717ee81b3eb5d584dd3eb94191902a692c48","Mr. Jones - Counting Crows"],
  ["https://player.vimeo.com/external/705194670.m3u8?s=1161edbb3ce758066ac5fe9ade8aa838593cffdc","Africa - Toto"],
  ["https://player.vimeo.com/external/705194696.m3u8?s=c0b4f998ef2f56c9fa76b046fecd42273c61ebf6","Careless Whisper - George Michael"],
  ["https://player.vimeo.com/external/705194749.m3u8?s=0b9cc9aa39e93f50a428c431c9370fa603e142c2","Don't Speak - No Doubt"],
  ["https://player.vimeo.com/external/705194714.m3u8?s=2a288140b5f0e91435fdf015eaef34f88349e74e","Creep - Radiohead"],
  ["https://player.vimeo.com/external/705194733.m3u8?s=3f1c12ec45cbad2669dadb04446150e2fabc8bc7","Don't Go Breaking My Heart - Elton John"],
  ["https://player.vimeo.com/external/705194762.m3u8?s=57df4e567fceeee5b8d9d2a60d85936f6adb4b25","Fix You - Coldplay"],
  ["https://player.vimeo.com/external/705195215.m3u8?s=e8372360548fc7c4b613a8b91caebe57f24534ca","Summertime Sadness - Lana Del Rey"],
["https://player.vimeo.com/external/705195335.m3u8?s=59744fa20862d548a2911719c25c5d585f2ac16e","We Will Rock You - Queen"],
["https://player.vimeo.com/external/705195328.m3u8?s=00e57436e9692723a22bfe41dbaad9bf910f5321","Under the Bridge - Red Hot Chili Peppers"],
["https://player.vimeo.com/external/705195248.m3u8?s=a4db7aa8f6b758f3d733cb24c078c8515ede8b51","Take Me Home, Country Roads - John Denver"],
["https://player.vimeo.com/external/705195201.m3u8?s=7461c35fae79391f2522ba28cdcfac79ae1afdfb","Something Just Like This - The Chainsmokers"],
  ["https://player.vimeo.com/external/705195162.m3u8?s=dbc1efc313c35b6b2f9ee50df45a5284dda9fd2e","Piano Man - Billy Joel"],
  ["https://player.vimeo.com/external/705195147.m3u8?s=f456e3c65e02e51bb95f433b18c702c61180db83","Perfect - Ed Sheeran"],
  ["https://player.vimeo.com/external/705194916.m3u8?s=2ef00eb3bf993d7d04b922dc91ffbccdf4c7f0ed","Colgando en tus manos (duet) - Carlos Baute"],
  ["https://player.vimeo.com/external/705194950.m3u8?s=ae061981bf9ab281ed1169fde5b74d383265d28b","Shallow - Lady Gaga, Bradley Cooper"],
  ["https://player.vimeo.com/external/705194966.m3u8?s=d44e3b49532f27c740f4a53ca51a5b63537372fa","Listen to Your Heart - Roxette"],
  ["https://player.vimeo.com/external/705194639.m3u8?s=efcb00b2a41ad4e99311a5727ace10b8ee7b8913","A Thousand Years - Christina Perri"],
  ["https://player.vimeo.com/external/705194632.m3u8?s=9349995c8c0ac9eabc8e088a0e77fc9ba40085a7","(Sittin' on) The Dock of the Bay - Otis Redding"],
  ["https://player.vimeo.com/external/705194659.m3u8?s=02b1b15be206272870a531256a44138f31b5d3fa","A Whole New World - Aladdin"],
  ["https://player.vimeo.com/external/705195003.m3u8?s=fe99ca5a13d2fb93c01af1e6d4132141d13bd5ab","7 Years - Lukas Graham"],
  ["https://player.vimeo.com/external/705195138.m3u8?s=f09daa5800e41515dd68966e1ba8655bfd99e8c0","Passenger - Let Her Go"],
//["",""],
//["",""],
//["",""],
//["",""],
//["",""],
  
]

function PlayVideo(indexValue) {
  //log("ran")
  videoTextureVersatile.pause()
  const videoClipVersatile = new VideoClip(songs[indexValue][0])
  videoTextureVersatile = new VideoTexture(videoClipVersatile)
  
  myMaterial.albedoTexture = videoTextureVersatile
  videoTextureVersatile.seekTime(0)
  videoTextureVersatile.play()
  log("Now playing: " + songs[indexValue][1])
  //songs[indexValue].play()
}


const canvas = new UICanvas()

const message = new UIText(canvas)
message.value = "Want your ad here? Please message vissequ#1301 on Discord."
message.fontSize = 15
message.width = 120
message.height = 30
message.vAlign = "bottom"
message.hAlign = "middle"
message.positionX = -80

//new utils.Delay(10000, () => {
//message.value = "This is the second sentence."
//log("util delay reached")
////not reached
//})



//log(songs[0][1])

const scrollableContainer = new UIScrollRect(canvas)
scrollableContainer.width = "50%"
scrollableContainer.height = "70%"
scrollableContainer.backgroundColor = Color4.Gray()
scrollableContainer.isVertical = true
scrollableContainer.onChanged = new OnChanged(() => {
  log("scrolled to ", scrollableContainer.positionY)
})

//later iterate through to automatically generate

const clickableImageHeight = 91

const myText2 = new UIText(scrollableContainer)
myText2.value = "Please wait your turn before playing a song. Click the black box to the right of the name to play the song."
myText2.fontSize = 12
myText2.adaptWidth = false
myText2.textWrapping = true
myText2.width = 250
//myText.height = 4
///myText.opacity = .5
myText2.positionY = 235
myText2.positionX = -10

const myText3 = new UIText(scrollableContainer)
myText3.value = "Close >>"
myText3.fontSize = 12
myText3.adaptWidth = false
myText3.textWrapping = true
myText3.width = 100
//myText.height = 4
///myText.opacity = .5
myText3.positionY = 290
myText3.positionX = 100

const toggleMenuButton = new UIImage(canvas, new Texture("images/0.png"))
toggleMenuButton.name = "clickable-image"
toggleMenuButton.width = "50px"
toggleMenuButton.height = "25px"
toggleMenuButton.opacity = 1
toggleMenuButton.sourceWidth = 92
toggleMenuButton.sourceHeight = clickableImageHeight
toggleMenuButton.isPointerBlocker = true
toggleMenuButton.vAlign = "middle"
//toggleMenuButton.positionY = 0
toggleMenuButton.hAlign = "left"
//toggleMenuButton.positionX = -660
toggleMenuButton.onClick = new OnClick(() => {
  if (scrollableContainer.visible == true) {
    scrollableContainer.visible = false
  }
  else if (scrollableContainer.visible == false) {
    scrollableContainer.visible = true
  }
}
scrollableContainer.visible = false
  
var arrayLength = songs.length;
for (var i = 0; i < arrayLength; i++) {
  console.log(songs[i]);
  //Do something
  
  const savedIndexValue = i
  
  
  
  const clickableImage = new UIImage(scrollableContainer, new Texture("images/0.png"))
  clickableImage.name = "clickable-image"
  clickableImage.width = "300px"
  clickableImage.height = "25px"
  clickableImage.opacity = .5
  clickableImage.sourceWidth = 92
  clickableImage.sourceHeight = clickableImageHeight
  clickableImage.isPointerBlocker = true
  clickableImage.positionY = 180-(clickableImageHeight*i)/3.2
  clickableImage.positionX = -20
  clickableImage.onClick = new OnClick(() => {
    log(savedIndexValue + " was clicked")
    
    //not working here idk why
    //scrollableContainer.visible = false
    
    PlayVideo(savedIndexValue)
    
    
    
}
    
  const myText = new UIText(clickableImage)
  myText.value = songs[savedIndexValue][1]
  myText.fontSize = 12
  myText.adaptWidth = false
  myText.textWrapping = true
  myText.width = 300
  //myText.height = 4
  ///myText.opacity = .5
  myText.positionY = 18
  myText.positionX = 0
    
  const playButton = new UIImage(scrollableContainer, new Texture("images/0.png"))
  playButton.name = "clickable-image"
  playButton.width = "25px"
  playButton.height = "25px"
  playButton.opacity = 1
  playButton.sourceWidth = 92
  playButton.sourceHeight = clickableImageHeight
  playButton.isPointerBlocker = true
  playButton.positionY = 180-(clickableImageHeight*i)/3.2
  playButton.positionX = 140
  playButton.onClick = new OnClick(() => {
    log(savedIndexValue + " was clicked")
    PlayVideo(savedIndexValue)
}
    
  const closeButton = new UIImage(scrollableContainer, new Texture("images/0.png"))
  closeButton.name = "clickable-image"
  closeButton.width = "50px"
  closeButton.height = "25px"
  closeButton.opacity = 1
  closeButton.sourceWidth = 92
  closeButton.sourceHeight = clickableImageHeight
  closeButton.isPointerBlocker = true
  closeButton.positionY = 275
  closeButton.positionX = 110
  closeButton.onClick = new OnClick(() => {
    scrollableContainer.visible = false
}
