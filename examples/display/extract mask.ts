
var font: Phaser.BitmapData;
var mask: Phaser.BitmapData;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
	preload: () => game.load.image("font", "assets/demoscene/knighthawks.png"), 

	create: () => {
		font = game.make.bitmapData(320, 150);
		mask = game.make.bitmapData(320, 150);
		mask.fill(50, 50, 50);

		font.draw("font");

		font.update();

		game.add.sprite(0, 0, font);
		game.add.sprite(0, 150, mask);

		game.input.onDown.addOnce(() => font.extract(mask, 237, 0, 140), this);
	} 
});
