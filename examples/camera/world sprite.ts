
var card: Phaser.Sprite;
var cameraCursors: Phaser.CursorKeys;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
         game.load.image("backdrop", "assets/pics/remember-me.jpg");
        game.load.image("card", "assets/sprites/mana_card.png");
    }, 

    create: () => {
        game.world.setBounds(0, 0, 1920, 1200);

        game.add.sprite(0, 0, "backdrop");

        card = game.add.sprite(200.5, 200.5, "card");

        game.physics.enable(card, Phaser.Physics.ARCADE);
        card.body.collideWorldBounds = true;

        game.camera.follow(card);

        cameraCursors = game.input.keyboard.createCursorKeys();
    }, 

    update: () => {
         card.body.velocity.x = 0;
        card.body.velocity.y = 0;

        if (cameraCursors.left.isDown) {
            // card.x -= 4;
            card.body.velocity.x = -240;
        } else if (cameraCursors.right.isDown) {
            // card.x += 4;
            card.body.velocity.x = 240;
        }

        if (cameraCursors.up.isDown) {
            // card.y -= 4;
            card.body.velocity.y = -240;
        } else if (cameraCursors.down.isDown) {
            // card.y += 4;
            card.body.velocity.y = 240;
        }
    }, 

    render: () => {
        game.debug.cameraInfo(game.camera, 500, 32);
        game.debug.spriteCoords(card, 32, 32);
    } 
});
