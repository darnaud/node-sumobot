// Converting 10 bit analog nput to 8 bit PWM Output

var five = require('johnny-five'),
	Tessel = require('tessel-io'),
	board = new five.Board({
		io: new Tessel()
	})
board.on('ready', ()=> {
	var led = new five.Led('a5'),
		rotary = new five.Sensor({
			pin:'a4',
			threshold:5,
			frequency: 100
		})

	rotary.on('change', (value)=>{
		led.brightness(value>>2)
	})
})

