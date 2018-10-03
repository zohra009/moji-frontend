hello = document.querySelector("#hello")
document.addEventListener('keydown', clickHandlerRecord)
document.addEventListener('click', clickHandler)


let eventArray = []
let rec_start = 0
let recording_track = 0
let current_track = 0
// eventArray[0] = reserved, eventArray[1] = track 1, eventArray[2] = track 2, eventArray[3] = track 3

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
		airhorn: loadSound("sounds/airhorn.mp3"),
		amy_winehouse_best_friends: loadSound("sounds/amy_winehouse_best_friends.mp3"),
		explode: loadSound("sounds/explode.wav"),
		funkBeat: loadSound("sounds/funkBeat.wav"),
		gnatattack_AAAUUUGGHHH: loadSound("sounds/gnatattack_AAAUUUGGHHH.wav"),
		rockBeat: loadSound("sounds/rockBeat.wav"),
		someSortOfDrumThing: loadSound("sounds/some sort of drum thing.wav"),
		yosiDrumLoop: loadSound("sounds/yoshi drum loop.wav"),
	}
	createCanvas(0, 0);
}

function draw() {};

function clickHandlerRecord(e) {
	// if the button is a sound
	if (e.target.className === "sound") {
			// if we are "recording"
			if (recording_track > 0){
			e.preventDefault()
			sounds[e.target.id].play()
			sounds[e.target.id].setVolume(0.3)
			eventItem = e.target.id
			eventTime = e.timeStamp
			eventObj = {sound: eventItem, time: eventTime}
			eventArray[recording_track].push(eventObj)
			// if not recording, just plays sound
			} else {
				sounds[e.target.id].play()
				sounds[e.target.id].setVolume(0.3)
			}
		// if the button is "record"
		} else if (e.target.className === "record"){
			if (e.target.innerText === "Record") {
				recording_track = parseInt(e.target.dataset.id)
				startRecording(e.timeStamp, recording_track)
				eventItem = 'record'
				eventTime = e.timeStamp
				eventObj = {sound: eventItem, time: eventTime}
				eventArray[recording_track].push(eventObj)
			} else {
				resetRec()
			}
		// if the button is "play"
		} else if (e.target.className === "play"){
		current_track = parseInt(e.target.dataset.id)
			if (e.target.id === "play_all") {
				// play the entire song
				let mergedTrack = mergeTracks()
				playTrack(mergedTrack)
			} else {
				// play an individual track
			soundTimesArray = mapArray(current_track)
			playTrack(soundTimesArray)
			}
	}
}

// function clickHandler(e) {
// 	// if the button is a sound
//   // console.log(e.target);
// 	if (e.target.className === "sound"){
// 		sounds[e.target.id].play()
// 		sounds[e.target.id].setVolume(0.3)
//   }
// 		// if the button is "record"
// }

function clickHandler(e) {
	if (recording_track > 0){
		switch (e.target.id){
			case '1' :
			e.preventDefault()
			sounds['coin'].play()
			sounds['coin'].setVolume(0.3)
			eventItem = 'coin'
			eventTime = e.timeStamp
			eventObj = {sound: eventItem, time: eventTime}
			eventArray[recording_track].push(eventObj)
			break
			case '2' :
			e.preventDefault()
			sounds['horn'].play()
			sounds['horn'].setVolume(0.3)
			eventItem = 'horn'
			eventTime = e.timeStamp
			eventObj = {sound: eventItem, time: eventTime}
			eventArray[recording_track].push(eventObj)
			break
			case '3' :
			e.preventDefault()
			sounds['beep'].play()
			sounds['beep'].setVolume(0.3)
			eventItem = 'beep'
			eventTime = e.timeStamp
			eventObj = {sound: eventItem, time: eventTime}
			eventArray[recording_track].push(eventObj)
			break
			case '4' :
			e.preventDefault()
			sounds['boop'].play()
			sounds['boop'].setVolume(0.3)
			eventItem = 'boop'
			eventTime = e.timeStamp
			eventObj = {sound: eventItem, time: eventTime}
			eventArray[recording_track].push(eventObj)
			break
			case '5' :
			e.preventDefault()
			sounds['ping'].play()
			sounds['ping'].setVolume(0.3)
			eventItem = 'ping'
			eventTime = e.timeStamp
			eventObj = {sound: eventItem, time: eventTime}
			eventArray[recording_track].push(eventObj)
			break
			case 'airhorn' :
			sounds['airhorn'].play()
			sounds['airhorn'].setVolume(0.5)
			break
		}
	} else {
  		switch (e.target.id){
			case 'coin' :
				sounds['coin'].play()
				sounds['coin'].setVolume(0.7)
				break
			case 'horn' :
				sounds['horn'].play()
				sounds['horn'].setVolume(0.7)
				break
			case 'beep' :
				sounds['beep'].play()
				sounds['beep'].setVolume(0.7)
				break
			case 'boop' :
				sounds['boop'].play()
				sounds['boop'].setVolume(0.7)
				break
			case 'ping' :
				sounds['ping'].play()
				sounds['ping'].setVolume(0.7)
				break
			case 'airhorn' :
  			sounds['airhorn'].play()
  			sounds['airhorn'].setVolume(0.5)
			   break
      case 'amy_winehouse_best_friends' :
  			sounds['amy_winehouse_best_friends'].play()
  			sounds['amy_winehouse_best_friends'].setVolume(0.5)
			   break
      case 'explode' :
   		   sounds['explode'].play()
   			 sounds['explode'].setVolume(0.5)
   			break
      case 'funkBeat' :
     		 sounds['funkBeat'].play()
     		 sounds['funkBeat'].setVolume(0.5)
     		break
      case 'rockBeat' :
       	 sounds['rockBeat'].play()
       	 sounds['rockBeat'].setVolume(0.5)
       	break
      case 'gnatattack_AAAUUUGGHHH' :
         	sounds['gnatattack_AAAUUUGGHHH'].play()
         	sounds['gnatattack_AAAUUUGGHHH'].setVolume(0.5)
         break
      case 'yosiDrumLoop' :
          sounds['yosiDrumLoop'].play()
          sounds['yosiDrumLoop'].setVolume(0.5)
          break
		}
	}
}
