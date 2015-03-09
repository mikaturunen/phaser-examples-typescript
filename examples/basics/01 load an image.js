var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () { return game.load.image("einstein", "assets/pics/ra_einstein.png"); },
    create: function () { return game.add.sprite(0, 0, "einstein"); }
});
