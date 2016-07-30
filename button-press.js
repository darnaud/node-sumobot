// Respond to a button press

var five = require('johnny-five');
	Tessel = require('tessel-io');
	board = new five.Board({
		io: new Tessel()
	});

board.on("ready", () => {
	var button = new five.Button({
		pin: "a4"
	})
	var led = new five.Led({
		pin: "a5"
	})
	 button.on('press', () => {
	 	console.log('Button pressed')
	 	led.on()
	 })

	 button.on('release', () => {
	 	console.log('Button released')
	 	led.off()
	 })
})

