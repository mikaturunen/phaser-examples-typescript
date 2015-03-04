var sprite;
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', {
    preload: function () { return game.load.image('arrow', 'assets/sprites/arrow.png'); },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#0072bc';
        sprite = game.add.sprite(400, 300, 'arrow');
        sprite.anchor.setTo(0.5, 0.5);
        game.physics.enable(sprite, Phaser.Physics.ARCADE);
        sprite.body.allowRotation = false;
    },
    update: function () {
        sprite.rotation = game.physics.arcade.moveToPointer(sprite, 60, game.input.activePointer, 500);
    },
    render: function () { return game.debug.spriteInfo(sprite, 32, 32); }
});
