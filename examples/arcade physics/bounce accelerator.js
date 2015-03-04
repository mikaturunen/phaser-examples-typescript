var flyer;
var bounceCursors;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () { return game.load.spritesheet("dude", "assets/games/starstruck/dude.png", 32, 48); },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        cursors = game.input.keyboard.createCursorKeys();
        flyer = game.add.sprite(400, 200, "dude");
        flyer.animations.add("left", [0, 1, 2, 3], 10, true);
        flyer.animations.add("right", [5, 6, 7, 8], 10, true);
        game.physics.enable(flyer, Phaser.Physics.ARCADE);
        flyer.body.velocity.setTo(200, 200);
        flyer.body.collideWorldBounds = true;
        flyer.body.bounce.setTo(0.8, 0.8);
    },
    update: function () {
        if (cursors.up.isDown) {
            flyer.body.acceleration.y = -600;
            if (flyer.body.velocity.x > 0) {
                flyer.animations.play("right");
            }
            else {
                flyer.animations.play("left");
            }
        }
        else if (cursors.down.isDown) {
            flyer.body.acceleration.y = 600;
            if (flyer.body.velocity.x > 0) {
                flyer.animations.play("right");
            }
            else {
                flyer.animations.play("left");
            }
        }
        else if (cursors.left.isDown) {
            flyer.body.acceleration.x = -500;
            flyer.animations.play("left");
        }
        else if (cursors.right.isDown) {
            flyer.body.acceleration.x = 500;
            flyer.animations.play("right");
        }
        else {
            flyer.frame = 4;
            flyer.body.acceleration.setTo(0, 0);
            flyer.animations.stop();
        }
    },
    render: function () { return game.debug.spriteInfo(flyer, 32, 32); }
});
