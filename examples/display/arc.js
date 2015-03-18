var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    create: function () {
        var graphics = game.add.graphics(game.world.centerX, game.world.centerY);
        graphics.lineStyle(8, 0xffd900);
        graphics.arc(0, 0, 135, game.math.degToRad(0), game.math.degToRad(90), false);
        graphics.moveTo(-100, -100);
        graphics.lineStyle(0);
        graphics.beginFill(0xFF3300);
        graphics.arc(-100, -100, 135, game.math.degToRad(0), game.math.degToRad(90), true);
        graphics.endFill();
    }
});
