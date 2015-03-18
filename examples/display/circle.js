var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', {
    create: function () {
        var graphics = game.add.graphics(0, 0);
        graphics.beginFill(0xFF0000, 1);
        graphics.drawCircle(300, 300, 100);
    }
});
