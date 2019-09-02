let hello = document.getElementById("hello")

document.addEventListener('click', clickHandler)

var mic, recorder, soundFile;
var state = 0; // mousePress will increment from Record, to Stop, to Play


function preload()
{

  // img = loadImage("background_img.png");
}

function setup() {
	sounds = {
		coin: loadSound("sounds/coin.wav"),
		horn: loadSound("sounds/horn.wav"),
		beep: loadSound("sounds/musicnote1.wav"),
		boop: loadSound("sounds/musicnote6.wav"),
		ping: loadSound("sounds/musicnote5.wav"),
		rockBeat: loadSound("sounds/rockBeat.wav"),
		gnatattack_hit: loadSound("sounds/gnatattack_hit.wav"),
		shuffleBeat: loadSound("sounds/shuffleBeat.wav"),
		airhorn: loadSound("sounds/airhorn.mp3"),
		amy_winehouse_best_friends: loadSound("sounds/amy_winehouse_best_friends.mp3"),
		explode: loadSound("sounds/explode.wav"),
		funkBeat: loadSound("sounds/funkBeat.wav"),
		gnatattack_AAAUUUGGHHH: loadSound("sounds/gnatattack_AAAUUUGGHHH.wav"),
		dogundo: loadSound("sounds/dogundo.wav"),
		someSortOfDrumThing: loadSound("sounds/some sort of drum thing.wav"),
		yosiDrumLoop: loadSound("sounds/yoshi drum loop.wav"),
		erase1: loadSound("sounds/erase1.wav"),
	}
	let canvas = createCanvas(300,50);
	 // console.log(sounds);
		// let img = loadImage('background_img.png')
		// image(img, 0, 0)
	  background(231, 180, 171);
		// image(img, 0, 1000)
		// console.log('render image', img, 'function', image(img, 0, 0));
	  fill(0);
	  text('Click 2 start recording', 20, 20);

	  // create an audio in
	  mic = new p5.AudioIn();

	  // users must manually enable their browser microphone for recording to work properly!
	  mic.start();

	  // create a sound recorder
	  recorder = new p5.SoundRecorder();

	  // connect the mic to the recorder
	  recorder.setInput(mic);

	  // create an empty sound file that we will use to playback the recording
	  soundFile = new p5.SoundFile();
		// createCanvas(0, 0);

		canvas.parent(hello)

	}

	function mousePressed(event) {
		if (event.target.id !== 'defaultCanvas0') {
			return; //finish function; return exits function
		}
	  // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
	  if (state === 0 && mic.enabled) {

	    // Tell recorder to record to a p5.SoundFile which we will use for playback
	    recorder.record(soundFile);

	    background(255,0,0);
	    text('Recording now! Click to stop.', 20, 20);
	    state += 1;
	  }

	  else if (state === 1) {
	    recorder.stop(); // stop recorder, and send the result to soundFile

	    background(0,255,0);
	    text('Recording stopped. Click to play & save', 20, 20);
	    state++;
	  }

	  else if (state === 2) {
	    soundFile.play(); // play the result!
	  }
}

function draw() {};

function clickHandler(e) {
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
			case 'gnatattack_hit' :
				sounds['gnatattack_hit'].play()
				sounds['gnatattack_hit'].setVolume(0.5)
				break
			case 'gnatattack_AAAUUUGGHHH' :
				sounds['gnatattack_AAAUUUGGHHH'].play()
				sounds['gnatattack_AAAUUUGGHHH'].setVolume(0.5)
				break
					case "spacebar" :
						break
			case 'yosiDrumLoop' :
				sounds['yosiDrumLoop'].play()
				sounds['yosiDrumLoop'].setVolume(0.5)
				break
			case 'dogundo' :
				sounds['dogundo'].play()
				sounds['dogundo'].setVolume(0.5)
				break
			case 'funkBeat' :
				sounds['funkBeat'].play()
				sounds['funkBeat'].setVolume(0.5)
				break
			case 'erase1' :
				 sounds['erase1'].play()
				 sounds['erase1'].setVolume(0.5)
				 break

	}
}
