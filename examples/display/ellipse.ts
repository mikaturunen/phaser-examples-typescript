var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    create: () => {
        var graphics = game.add.graphics(game.world.centerX, game.world.centerY);
        //  Our first arc will be a line only
        graphics.lineStyle(8, 0xffd900);
        graphics.drawEllipse(100, 100, 200, 60);
    }
});
