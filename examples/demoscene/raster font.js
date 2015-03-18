var font;
var alpha;
var mask = new Phaser.Rectangle();
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("knightHawks", "assets/demoscene/knighthawks.png");
        game.load.image("raster", "assets/demoscene/multi-color-raster.png");
    },
    create: function () {
        font = game.make.bitmapData();
        alpha = game.make.bitmapData();
        raster = game.make.bitmapData();
        font.load("knightHawks");
        font.extract(alpha, 237, 0, 140, 255, true);
        raster.resize(font.width, font.height);
        game.add.image(0, 0, "knightHawks");
        game.add.image(360, 0, alpha);
        game.add.image(0, 200, raster);
        game.add.image(360, 200, font);
        mask.setTo(0, 0, font.width, game.cache.getImage("raster").height);
        game.add.tween(mask).to({ y: -(mask.height - font.height) }, 4000, Phaser.Easing.Sinusoidal.InOut, true, 0, 100, true);
    },
    update: function () {
        raster.cls();
        raster.alphaMask("raster", alpha, mask);
        font.draw(raster);
    }
});
