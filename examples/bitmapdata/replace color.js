var _this = this;
var bmd;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () { return game.load.image("crystal", "assets/pics/jim_sachs_time_crystal.png"); },
    create: function () {
        bmd = game.make.bitmapData();
        bmd.load("crystal");
        bmd.addToWorld(game.world.centerX, game.world.centerY, 0.5, 0.5);
        game.input.onDown.add(replaceColorRecolor, _this);
    }
});
function replaceColorRecolor() {
    bmd.replaceRGB(0, 85, 255, 255, 0, 250, 40, 255);
}
