var image;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
    preload: function () { return game.load.image('flyer', 'assets/sprites/phaser-dude.png'); },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        image = game.add.sprite(400, 200, 'flyer');
        game.physics.enable(image, Phaser.Physics.ARCADE);
        image.body.velocity.setTo(200, 200);
        image.body.collideWorldBounds = true;
        image.body.bounce.set(0.8);
        image.body.gravity.set(0, 180);
    },
    render: function () { return game.debug.spriteInfo(image, 32, 32); }
});
