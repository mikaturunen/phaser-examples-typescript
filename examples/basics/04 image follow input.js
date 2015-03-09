var sprite;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: game.load.image("phaser", "assets/sprites/phaser.png"),
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        sprite = game.add.sprite(game.world.centerX, game.world.centerY, "phaser");
        sprite.anchor.set(0.5);
        game.physics.arcade.enable(sprite);
    },
    update: function () {
        if (game.physics.arcade.distanceToPointer(sprite, game.input.activePointer) > 8) {
            game.physics.arcade.moveToPointer(sprite, 300);
        }
        else {
            sprite.body.velocity.set(0);
        }
    },
    render: function () { return game.debug.inputInfo(32, 32); }
});
