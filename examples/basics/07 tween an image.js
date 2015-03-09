var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () { return game.load.image("einstein", "assets/pics/ra_einstein.png"); },
    create: function () {
        var sprite = game.add.sprite(-400, 0, "einstein");
        var tween = game.add.tween(sprite);
        tween.to({ x: 600 }, 6000);
        tween.start();
    }
});
