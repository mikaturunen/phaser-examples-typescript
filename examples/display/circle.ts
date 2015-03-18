var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { 
    create: () => {
        var graphics = game.add.graphics(0, 0);
        graphics.beginFill(0xFF0000, 1);
        graphics.drawCircle(300, 300, 100);
    } 
});
