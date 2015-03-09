
var bmd: Phaser.BitmapData;
var area: Phaser.Rectangle;
var dropTime = 0;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
	preload: () => game.load.image("pic", "assets/pics/hotshot-chaos_in_tokyo.png"), 
	
	create: () => {
		game.stage.backgroundColor = "#2d2d2d";

		bmd = game.make.bitmapData(800, 600);

		bmd.addToWorld();

		area = new Phaser.Rectangle(0, 300, 200, 16);

		bmd.copyRect("pic", area, 300, 0);
	},

	update: () => {
		if (area.y > 0 && game.time.now > dropTime) {
			for (var y = 0; y < area.y; y++) {
				bmd.copyRect("pic", area, 300, y);
			}

			area.y--;
			dropTime = game.time.now + 25;
		}
	} 
});
