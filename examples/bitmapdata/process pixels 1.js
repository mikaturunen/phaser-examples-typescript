var _this = this;
var bmd;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () { return game.load.image("crystal", "assets/pics/cougar_dragonsun.png"); },
    create: function () {
        bmd = game.make.bitmapData();
        bmd.load("crystal");
        bmd.addToWorld(game.world.centerX, game.world.centerY, 0.5, 0.5);
        game.input.onDown.add(processPixelStart, _this);
    }
});
function processPixelStart() {
    bmd.processPixelRGB(processPixelForEachPixel, this);
}
function processPixelForEachPixel(pixel) {
    var r = pixel.r;
    var g = pixel.g;
    var b = pixel.b;
    pixel.r = b;
    pixel.g = g;
    pixel.b = r;
    return pixel;
}
