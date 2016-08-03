// Controlling a servo

var five = require('johnny-five'),
	Tessel = require('tessel-io'),
	board = new five.Board({
		io: new Tessel()
	})

board.on('ready', ()=>{
	var servo = new five.Servo({
		type: "continuous",
		pin: "a5"

	})

	servo.cw()

	setTimeout(()=>{
		console.log("stop");
		servo.stop();
	}, 2000)
})