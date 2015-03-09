
var bmd: Phaser.BitmapData;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => game.load.image("crystal", "assets/pics/cougar_dragonsun.png"), 

    create: () => {
        bmd = game.make.bitmapData();
        bmd.load("crystal");
        bmd.addToWorld(game.world.centerX, game.world.centerY, 0.5, 0.5);

        game.input.onDown.add(processPixels3Start, this);
    }
});

function processPixels3Start () {
	bmd.processPixelRGB(forEachPixel, this);
}

function forEachPixel (pixel: any) {
    /**
    * This callback will be sent a single object with 6 properties: `{ r: number, g: number, b: number, a: number, color: number, rgba: string }`.
    * Where r, g, b and a are integers between 0 and 255 representing the color component values for red, green, blue and alpha.
    * The `color` property is an Int32 of the full color. Note the endianess of this will change per system.
    * The `rgba` property is a CSS style rgba() string which can be used with context.fillStyle calls, among others.
    * The callback must return either `false`, in which case no change will be made to the pixel, or a new color object.
    * If a new color object is returned the pixel will be set to the r, g, b and a color values given within it.
    */

	pixel.r = 255 - pixel.r;
	pixel.g = 255 - pixel.g;
	pixel.b = 255 - pixel.b;

	return pixel;
}