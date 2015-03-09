var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: game.load.image("einstein", "assets/pics/ra_einstein.png"),
    create: function () {
        var image = game.add.sprite(0, 0, "einstein");
        game.physics.enable(image, Phaser.Physics.ARCADE);
        image.body.velocity.x = 150;
    }
});
