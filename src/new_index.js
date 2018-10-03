hello = document.querySelector("#hello")
// document.addEventListener('keydown', keyDownHandler)
document.addEventListener('click', clickHandler)

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
  // console.log(e.key);
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
