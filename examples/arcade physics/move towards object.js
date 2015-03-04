var balls;
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', {
    preload: function () { return game.load.image('ball', 'assets/sprites/shinyball.png'); },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        balls = game.add.group();
        balls.enableBody = true;
        for (var i = 0; i < 50; i++) {
            var ball = balls.create(game.world.randomX, game.world.randomY, 'ball');
        }
    },
    update: function () {
        if (game.input.mousePointer.isDown) {
            balls.forEach(game.physics.arcade.moveToPointer, game.physics.arcade, false, 200);
        }
        else {
            balls.setAll('body.velocity.x', 0);
            balls.setAll('body.velocity.y', 0);
        }
    }
});
