var _this = this;
var maskFont;
var extractMask;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () { return game.load.image("font", "assets/demoscene/knighthawks.png"); },
    create: function () {
        maskFont = game.make.bitmapData(320, 150);
        extractMask = game.make.bitmapData(320, 150);
        extractMask.fill(50, 50, 50);
        maskFont.draw("font");
        maskFont.update();
        game.add.sprite(0, 0, maskFont);
        game.add.sprite(0, 150, extractMask);
        game.input.onDown.addOnce(function () { return maskFont.extract(extractMask, 237, 0, 140); }, _this);
    }
});
