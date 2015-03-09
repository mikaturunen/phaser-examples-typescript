var _this = this;
var i;
var r;
var bmd;
var bmdDest;
var colors;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    create: function () {
        bmd = game.make.bitmapData(game.width, game.height);
        bmdDest = game.make.bitmapData(game.width, game.height);
        bmdDest.addToWorld();
        colors = Phaser.Color.HSVColorWheel();
        game.input.addMoveCallback(fastCopyPaint, _this);
        i = 0;
        r = new Phaser.Rectangle(0, 0, game.width, game.height);
        var data = { r: 0, s: 0.5 };
        game.add.tween(data).to({ r: 360, s: 2 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);
    },
    update: function () {
        bmdDest.fill(0, 0, 0, 0.1);
        bmdDest.copy(bmd, 0, 0);
    }
});
function fastCopyPaint(pointer, x, y) {
    if (pointer.isDown) {
        bmd.circle(x, y, 4, colors[i].rgba);
        i = game.math.wrapValue(i, 1, 359);
    }
}
