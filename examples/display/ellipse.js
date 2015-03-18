var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    create: function () {
        var graphics = game.add.graphics(game.world.centerX, game.world.centerY);
        graphics.lineStyle(8, 0xffd900);
        graphics.drawEllipse(100, 100, 200, 60);
    }
});
