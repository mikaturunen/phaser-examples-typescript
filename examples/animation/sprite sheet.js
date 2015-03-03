var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.spritesheet("mummy", "assets/sprites/metalslug_mummy37x45.png", 37, 45, 18);
    },
    create: function () {
        var mummy = game.add.sprite(300, 200, "mummy");
        mummy.animations.add("walk");
        mummy.animations.play("walk", 20, true);
    }
});
