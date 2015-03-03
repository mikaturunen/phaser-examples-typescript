var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.image('orb', 'assets/sprites/orb-blue.png');
    },
    create: function () {
        game.stage.backgroundColor = "#ef3d45";
        var orb = game.make.sprite(0, 0, "orb");
        var bmd = game.add.bitmapData(352, 22);
        var x = 0;
        var y = -22;
        for (var i = 0; i < 16; i++) {
            bmd.draw(orb, x, y);
            x += 22;
            y += 3;
        }
        game.add.image(0, 0, bmd);
        game.cache.addSpriteSheet("dynamic", "", bmd.canvas, 22, 22, 16, 0, 0);
        for (i = 0; i < 16; i++) {
            var test = game.add.sprite(200, 100 + (i * 22), "dynamic");
            test.animations.add("float");
            test.play("float", 20, true);
        }
    }
});
