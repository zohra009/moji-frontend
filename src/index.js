// const sounds = {
//   coin: loadSound("sounds/coin.wav"),
//   horn: loadSound("sounds/horn.wav"),
//   beep: loadSound("sounds/musicnote1.wav"),
//   boop: loadSound("sounds/musicnote6.wav"),
//   ping: loadSound("sounds/musicnote5.wav"),
//   rockBeat: loadSound("sounds/rockBeat.wav"),
//   funkBeat: loadSound("sounds/funkBeat.wav"),
//   shuffleBeat: loadSound("sounds/shuffleBeat.wav"),
//   airhorn: loadSound("sounds/airhorn.mp3")
// }
// //json-server --watch db.json
// document.addEventListener('DOMContentLoaded', () => {
//   const coinBtn = document.querySelector("#coin")
//   const hornBtn = document.querySelector("#horn")
//   const beepBtn = document.querySelector("#beep")
//   const boopBtn = document.querySelector("#boop")
//   const pingBtn = document.querySelector("#ping")
//   console.log(coinBtn);
//   console.log(hornBtn);
//   console.log(beepBtn);
//
//   const emojiList = document.querySelector('.emojis-list')
//
//   const emojiUrl = 'http://localhost:3000/api/v1/emojis';
//   fetch(emojiUrl)
//     .then(res => res.json())
//     .then(json =>
//       json.forEach(emoji => {
//         const markup = `
//         <li>
//           <h3>${emoji.title}</h3>
//         </li>`;
//
//         emojiList.innerHTML += markup
//       })
//     );
//     function setup() {
//   createCanvas(640, 480);
//     }
//
//   function draw() {
//     if (mouseIsPressed) {
//       fill(0);
//     } else {
//       fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
//   }
//   playSound(sounds.coin)
// });
//
// //////////////////////////////////////////////////////
//
// let eventArray = []
// let rec_start = 0
// let recording_track = 0
// let current_track = 0
//
// document.addEventListener('click', clickHandler)
// document.addEventListener('keydown', keyDownHandler)
//
// function clickHandler(e) {
// // if the button is a sound
//   if (e.target.className === "sound") {
//     console.log(sounds)
//   }
// }
//     // keyDownHandler(e)
//
// 	// createCanvas(0, 0);
//   // function setup()
//
// function keyDownHandler(e){
//    //Inside of your clickhandler function, call playSound
//   playSound(e)
// }
// function playSound(e){
// 	sounds[e.target.id].play()
// 	sounds[e.target.id].setVolume(0.3)
//   console.log(e);
// }
