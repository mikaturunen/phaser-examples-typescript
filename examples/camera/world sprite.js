var card;
var cameraCursors;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("backdrop", "assets/pics/remember-me.jpg");
        game.load.image("card", "assets/sprites/mana_card.png");
    },
    create: function () {
        game.world.setBounds(0, 0, 1920, 1200);
        game.add.sprite(0, 0, "backdrop");
        card = game.add.sprite(200.5, 200.5, "card");
        game.physics.enable(card, Phaser.Physics.ARCADE);
        card.body.collideWorldBounds = true;
        game.camera.follow(card);
        cameraCursors = game.input.keyboard.createCursorKeys();
    },
    update: function () {
        card.body.velocity.x = 0;
        card.body.velocity.y = 0;
        if (cameraCursors.left.isDown) {
            card.body.velocity.x = -240;
        }
        else if (cameraCursors.right.isDown) {
            card.body.velocity.x = 240;
        }
        if (cameraCursors.up.isDown) {
            card.body.velocity.y = -240;
        }
        else if (cameraCursors.down.isDown) {
            card.body.velocity.y = 240;
        }
    },
    render: function () {
        game.debug.cameraInfo(game.camera, 500, 32);
        game.debug.spriteCoords(card, 32, 32);
    }
});
