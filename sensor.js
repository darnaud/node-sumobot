// Receive values from a sensor

var five = require('johnny-five');
	Tessel = require('tessel-io');
	Barcli = require('barcli')
	board = new five.Board({
		io: new Tessel()
	})

board.on("ready", () => {
	var graph = new Barcli({
		label: "Potentiometer",
		range: [0,1024]
	})
	var  rotary = new five.Sensor({
		pin: "a4",
		threshold: 10
	})
	rotary.scale(0, 1024).on("change", (value)=>{
		graph.update(value)
	})
})

