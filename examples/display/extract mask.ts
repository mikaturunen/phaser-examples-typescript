
var maskFont: Phaser.BitmapData;
var extractMask: Phaser.BitmapData;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
	preload: () => game.load.image("font", "assets/demoscene/knighthawks.png"), 

	create: () => {
		maskFont = game.make.bitmapData(320, 150);
		extractMask = game.make.bitmapData(320, 150);
		extractMask.fill(50, 50, 50);

		maskFont.draw("font");

		(<any> maskFont).update();

		game.add.sprite(0, 0, maskFont);
		game.add.sprite(0, 150, extractMask);

		game.input.onDown.addOnce(() => maskFont.extract(extractMask, 237, 0, 140), this);
	} 
});
