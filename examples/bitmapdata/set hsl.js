var _this = this;
var bmd;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () { return game.load.image("pic", "assets/tests/ships.png"); },
    create: function () {
        game.stage.backgroundColor = "#2d2d2d";
        bmd = game.make.bitmapData();
        bmd.load("pic");
        var sprite = bmd.addToWorld(game.world.centerX, game.world.centerY, 0.5, 0.5, 3, 3);
        sprite.smoothed = false;
        game.input.onDown.add(setHslStart, _this);
    }
});
function setHslStart() {
    bmd.shiftHSL(0.1);
}
