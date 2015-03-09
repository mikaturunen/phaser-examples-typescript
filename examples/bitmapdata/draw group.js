var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("bg", "assets/pics/undersea.jpg");
        game.load.image("loop", "assets/sprites/beball1.png");
    },
    create: function () {
        game.add.sprite(0, 0, "bg");
        var group = game.make.group();
        for (var i = 0; i < 40; i++) {
            group.create(game.world.randomX, game.world.randomY, "loop");
        }
        var bmd = game.add.bitmapData(game.width, game.height);
        bmd.addToWorld();
        bmd.drawGroup(group);
    }
});
