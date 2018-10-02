//json-server --watch db.json
document.addEventListener('DOMContentLoaded', () => {

  const emojiList = document.querySelector('.emojis-list')

  const endPoint = 'http://localhost:3000/api/v1/emojis';
  fetch(endPoint)
    .then(res => res.json())
    .then(json =>
      json.forEach(emoji => {
        const markup = `
        <li>
          <h3>${emoji.title}</h3>
        </li>`;

        emojiList.innerHTML += markup
      })
    );
    function setup() {
  createCanvas(640, 480);
}

  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }
});

//////////////////////////////////////////////////////

let eventArray = []
let rec_start = 0
let recording_track = 0
let current_track = 0

document.addEventListener('click', clickHandler)
document.addEventListener('keydown', keyDownHandler)

function setup() {
	sounds = {
		coin: loadSound("sounds/coin.wav"),
		horn: loadSound("sounds/horn.wav"),
		beep: loadSound("sounds/musicnote1.wav"),
		boop: loadSound("sounds/musicnote6.wav"),
		ping: loadSound("sounds/musicnote5.wav"),
		rockBeat: loadSound("sounds/rockBeat.wav"),
		funkBeat: loadSound("sounds/funkBeat.wav"),
		shuffleBeat: loadSound("sounds/shuffleBeat.wav"),
		airhorn: loadSound("sounds/airhorn.mp3")
	}
	createCanvas(0, 0);
}
function clickHandler(e){
   //Inside of your clickhandler function, call playSound
  playSound(e)
}
function playSound(e){
	sounds[e.target.id].play()
	sounds[e.target.id].setVolume(0.3)
}
