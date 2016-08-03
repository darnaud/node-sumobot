// Sensing temperature

var five = require('johnny-five'),
	Tessel = require('tessel-io'),
	board = new five.Board({
		io: new Tessel()
	})

board.on('ready', ()=>{
	var temp = new five.Temperature({
		controller: "TMP36",
		pin: "a4"

	})

	temp.on('change', function(){
		console.log( this.celsius + "°C")
	})
})