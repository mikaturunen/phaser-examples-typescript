var player;
var cameraCursors;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("background", "assets/tests/debug-grid-1920x1920.png");
        game.load.image("player", "assets/sprites/phaser-dude.png");
    },
    create: function () {
        game.add.tileSprite(0, 0, 1920, 1920, "background");
        game.world.setBounds(0, 0, 1920, 1920);
        game.physics.startSystem(Phaser.Physics.P2JS);
        player = game.add.sprite(game.world.centerX, game.world.centerY, "player");
        game.physics.p2.enable(player);
        cameraCursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(player);
        game.camera.deadzone = new Phaser.Rectangle(100, 100, 600, 400);
    },
    update: function () {
        player.body.setZeroVelocity();
        if (cameraCursors.up.isDown) {
            player.body.moveUp(300);
        }
        else if (cameraCursors.down.isDown) {
            player.body.moveDown(300);
        }
        if (cameraCursors.left.isDown) {
            player.body.velocity.x = -300;
        }
        else if (cameraCursors.right.isDown) {
            player.body.moveRight(300);
        }
    },
    render: function () {
        var zone = game.camera.deadzone;
        game.context.fillStyle = "rgba(255,0,0,0.6)";
        game.context.fillRect(zone.x, zone.y, zone.width, zone.height);
        game.debug.cameraInfo(game.camera, 32, 32);
        game.debug.spriteCoords(player, 32, 500);
    }
});
