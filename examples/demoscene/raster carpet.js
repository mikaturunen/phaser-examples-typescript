var bmd;
var fx;
var sx = 0;
var speed = 0.1;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.baseURL = "http://files.phaser.io.s3.amazonaws.com/misc/";
        game.load.crossOrigin = "anonymous";
        game.load.image("raster", "rastercarpet.png");
    },
    create: function () {
        bmd = game.make.bitmapData(480, 480);
        for (var i = 0; i < 480; i++) {
            bmd.draw("raster", 0, i);
        }
        fx = game.make.bitmapData(640, 480);
        var a = fx.addToWorld();
        a.y = 48;
    },
    update: function () {
        fx.cls();
        for (var i = 0; i < 30; i++) {
            var x = i * 16;
            var y = 0;
            var w = (i * 16) + 16;
            var h = 480 - (i * 16);
            var tx = 232 + Math.sin(sx) * (i * 8);
            var ty = i * 6;
            var blendMode = null;
            var roundPx = true;
            fx.copy(bmd, x, y, w, h, tx, ty, w, h, 0, 0, 0, 1, 1, 1, blendMode, roundPx);
        }
        sx += speed;
    }
});
