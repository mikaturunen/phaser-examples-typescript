var player;
var facing = "left";
var jumpTimer = 0;
var platformerTightCursors;
var jumpButton;
var bg;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.spritesheet("dude", "assets/games/starstruck/dude.png", 32, 48);
        game.load.image("background", "assets/games/starstruck/background2.png");
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        bg = game.add.tileSprite(0, 0, 800, 600, "background");
        game.physics.arcade.gravity.y = 300;
        player = game.add.sprite(32, 320, "dude");
        game.physics.enable(player, Phaser.Physics.ARCADE);
        player.body.collideWorldBounds = true;
        player.body.gravity.y = 1000;
        player.body.maxVelocity.y = 500;
        player.body.setSize(20, 32, 5, 16);
        player.animations.add("left", [0, 1, 2, 3], 10, true);
        player.animations.add("turn", [4], 20, true);
        player.animations.add("right", [5, 6, 7, 8], 10, true);
        platformerTightCursors = game.input.keyboard.createCursorKeys();
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },
    update: function () {
        player.body.velocity.x = 0;
        if (platformerTightCursors.left.isDown) {
            player.body.velocity.x = -150;
            if (facing != "left") {
                player.animations.play("left");
                facing = "left";
            }
        }
        else if (platformerTightCursors.right.isDown) {
            player.body.velocity.x = 150;
            if (facing != "right") {
                player.animations.play("right");
                facing = "right";
            }
        }
        else {
            if (facing != "idle") {
                player.animations.stop();
                if (facing == "left") {
                    player.frame = 0;
                }
                else {
                    player.frame = 5;
                }
                facing = "idle";
            }
        }
        if (jumpButton.isDown && player.body.onFloor() && game.time.now > jumpTimer) {
            player.body.velocity.y = -500;
            jumpTimer = game.time.now + 750;
        }
    },
    render: function () { return game.debug.bodyInfo(player, 16, 24); }
});
