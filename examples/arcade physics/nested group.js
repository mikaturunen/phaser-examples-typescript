var sprites;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.spritesheet("spinner", "assets/sprites/bluemetal_32x32x4.png", 32, 32);
        game.load.image("phaser", "assets/sprites/phaser.png");
    },
    create: function () {
        sprites = game.add.group();
        for (var i = 0; i < 30; i++) {
            var s = sprites.create(game.rnd.integerInRange(100, 700), game.rnd.integerInRange(32, 200), "spinner");
            s.animations.add("spin", [0, 1, 2, 3]);
            s.play("spin", 20, true);
            game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = game.rnd.integerInRange(-200, 200);
            s.body.velocity.y = game.rnd.integerInRange(-200, 200);
        }
        var groupB = game.make.group();
        groupB.create(16, 16, "phaser");
        sprites.add(groupB);
        sprites.setAll("body.collideWorldBounds", true);
        sprites.setAll("body.bounce.x", 1);
        sprites.setAll("body.bounce.y", 1);
        sprites.setAll("body.minBounceVelocity", 0);
    },
    update: function () { return game.physics.arcade.collide(sprites); }
});
