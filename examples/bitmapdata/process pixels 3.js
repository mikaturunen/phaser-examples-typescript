var _this = this;
var bmd;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () { return game.load.image("crystal", "assets/pics/cougar_dragonsun.png"); },
    create: function () {
        bmd = game.make.bitmapData();
        bmd.load("crystal");
        bmd.addToWorld(game.world.centerX, game.world.centerY, 0.5, 0.5);
        game.input.onDown.add(processPixels3Start, _this);
    }
});
function processPixels3Start() {
    bmd.processPixelRGB(forEachPixel, this);
}
function forEachPixel(pixel) {
    pixel.r = 255 - pixel.r;
    pixel.g = 255 - pixel.g;
    pixel.b = 255 - pixel.b;
    return pixel;
}
