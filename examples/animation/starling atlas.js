var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.atlasXML("octopus", "assets/sprites/octopus.png", "assets/sprites/octopus.xml");
    },
    create: function () {
        game.stage.backgroundColor = "#1873CE";
        var octopus = game.add.sprite(300, 200, "octopus");
        octopus.animations.add("swim");
        octopus.animations.play("swim", 30, true);
        game.add.tween(octopus).to({ y: 300 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
    }
});
