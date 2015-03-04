var sprite;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () { return game.load.image("arrow", "assets/sprites/arrow.png"); },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = "#0072bc";
        sprite = game.add.sprite(400, 300, "arrow");
        sprite.anchor.setTo(0.5, 0.5);
    },
    update: function () {
        sprite.rotation = game.physics.arcade.angleToPointer(sprite);
    },
    render: function () { return game.debug.spriteInfo(sprite, 32, 32); }
});
