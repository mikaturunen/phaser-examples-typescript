var _this = this;
var card;
var cameraCursors;
var moving = 0;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("backdrop", "assets/pics/remember-me.jpg");
        game.load.image("card", "assets/sprites/mana_card.png");
    },
    create: function () {
        game.world.setBounds(0, 0, 1920, 1200);
        game.add.sprite(0, 0, "backdrop");
        card = game.add.sprite(200, 200, "card");
        cameraCursors = game.input.keyboard.createCursorKeys();
        game.input.onDown.add(function () {
            moving = (moving === 0) ? moving = 1 : moving = 0;
        }, _this);
    },
    update: function () {
        if (moving === 0) {
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
        }
        else {
            if (cameraCursors.left.isDown) {
                card.x -= 4;
            }
            else if (cameraCursors.right.isDown) {
                card.x += 4;
            }
            if (cameraCursors.up.isDown) {
                card.y -= 4;
            }
            else if (cameraCursors.down.isDown) {
                card.y += 4;
            }
        }
    },
    render: function () {
        game.debug.cameraInfo(game.camera, 500, 32);
        game.debug.spriteInfo(card, 32, 32);
        game.debug.text("Click to toggle sprite / camera movement with cameraCursors", 32, 550);
    }
});
