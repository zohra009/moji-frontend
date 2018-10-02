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
		coin: loadSound("assets/coin.wav"),
		horn: loadSound("assets/horn.wav"),
		beep: loadSound("assets/musicnote1.wav"),
		boop: loadSound("assets/musicnote6.wav"),
		ping: loadSound("assets/musicnote5.wav"),
		rockBeat: loadSound("assets/rockBeat.wav"),
		funkBeat: loadSound("assets/funkBeat.wav"),
		shuffleBeat: loadSound("assets/shuffleBeat.wav"),
		airhorn: loadSound("assets/airhorn.mp3")
	}
	createCanvas(0, 0);
}
 function clickHandler(e){
     if(e.target.className === "sound")
     //if we record do the following
     if(recording_track > 0){
     e.preventDefault()
     sounds[e.target.id].play()
     sounds[e.traget.id]setVolume(0.3)
     eventItem = e.target.id
     eventObj = {sound: eventItem, time: eventTime}
     eventArray[recording_track].push(eventObj) //push eventobj into the eventArray
     // play sound if recoding is not occuring
    } else{
       sounds.[e.target.id].play()
       sounds[e.target.id].setVolume(0.3)
    }
    } else if(e.target.className === "record"){ //if we're press record button
    if(e.target.innerText === "Record") //if it's record
      recording_track = parseInt(e.target.dataset.id)
      startRecording(e.timestamp, recording_track)
      eventItem = 'Record'
      eventTime = e.timeStamp
      eventObj = {sound: eventItem, time: eventTime}
      eventArray[recording_track.push(eventObj)]
    } else{
    resetRec() //if not recorded reset it
    }
  //if we press play do the follwoing
} else if(e.target.className === "play"){
  current_track = parseInt(e.target.dataset.id) //get the integer for that play time
    if(e.target.id === "play_all"){
      //play entire song
      let mergeTrack = mergeTrack()
      playTrack(mergeTrack)
    } else {
      //play a single track
      soundTimesArray = mapArray(current_track)
      playTrack(soundTimesArray)
    }
}
