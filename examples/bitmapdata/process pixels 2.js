var _this = this;
var bmd;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () { return game.load.image("crystal", "assets/pics/cougar_dragonsun.png"); },
    create: function () {
        bmd = game.make.bitmapData();
        bmd.load("crystal");
        bmd.addToWorld(game.world.centerX, game.world.centerY, 0.5, 0.5);
        game.input.onDown.add(processPixels2Start, _this);
    }
});
function processPixels2Start() {
    bmd.processPixelRGB(processPixel2ForEachPixel, this);
}
function processPixel2ForEachPixel(pixel) {
    pixel.r = pixel.r;
    pixel.g = pixel.r;
    pixel.b = pixel.r;
    return pixel;
}
