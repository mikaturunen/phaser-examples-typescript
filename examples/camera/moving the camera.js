var cameraCursors;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () { return game.load.image("mushroom", "assets/sprites/mushroom2.png"); },
    create: function () {
        game.stage.backgroundColor = "#2d2d2d";
        game.world.setBounds(0, 0, 2000, 2000);
        for (var i = 0; i < 150; i++) {
            game.add.sprite(game.world.randomX, game.world.randomY, "mushroom");
        }
        cameraCursors = game.input.keyboard.createCursorKeys();
    },
    update: function () {
        if (cameraCursors.up.isDown) {
            game.camera.y -= 4;
        }
        else if (cameraCursors.down.isDown) {
            game.camera.y += 4;
        }
        if (cameraCursors.left.isDown) {
            game.camera.x -= 4;
        }
        else if (cameraCursors.right.isDown) {
            game.camera.x += 4;
        }
    },
    render: function () { return game.debug.cameraInfo(game.camera, 32, 32); }
});
