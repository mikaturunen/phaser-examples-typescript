var sprite;
var counter = 0;
var step = Math.PI * 2 / 360;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () { return game.load.image("sprite", "assets/sprites/phaser2.png"); },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        sprite = game.add.sprite(game.world.centerX, game.world.centerY, "sprite");
        sprite.anchor.set(0.5);
        game.physics.arcade.enable(sprite);
    },
    update: function () {
        var tStep = Math.sin(counter);
        sprite.body.y = 120 + tStep * 60;
        counter += step;
    },
    render: function () {
        game.debug.body(sprite);
    }
});
