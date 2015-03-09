
var bmd: Phaser.BitmapData;
var tooltip: Phaser.BitmapData;
var sprite: Phaser.Sprite;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
	preload: () => game.load.image("wheel", "assets/pics/color_wheel_swirl.png"), 

	create: () => {
		bmd = game.make.bitmapData(800, 600);
		bmd.draw("wheel", -200, -100);
		// TODO update phaser.d.ts for update?
		(<any> bmd).update();
		bmd.addToWorld();

		tooltip = game.make.bitmapData(64, 64);
		sprite = game.add.sprite(0, 0, tooltip);

		game.input.addMoveCallback(getPixelUpdateTooltip, this);
	}
});

function getPixelUpdateTooltip (pointer: Phaser.Pointer, x: number, y: number) {

	if (x >= 0 && x <= bmd.width && y >= 0 && y <= bmd.height) {
		var color: any = bmd.getPixelRGB(x, y);

		tooltip.fill(0, 0, 0);
		tooltip.rect(1, 1, 62, 62, color.rgba);
	
		sprite.x = x;
		sprite.y = y;
	}
}
