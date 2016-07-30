// Turn on LED with Tessel 2

var five = require('johnny-five');
	Tessel = require('tessel-io');
	board = new five.Board({
		io: new Tessel()
	});

board.on("ready", () => {
	var led = new five.Led("a5");

	
	//led.on();
	//led.blink(2500)
	led.blink();
})

