
var ball: Phaser.Sprite;
var pointerCursor: Phaser.CursorKeys;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.load.image("backdrop", "assets/pics/remember-me.jpg");
        game.load.image("ball", "assets/sprites/shinyball.png");
    }, 

    create: () => {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0, 0, 1920, 1200);
        game.add.sprite(0, 0, "backdrop");

        ball = game.add.sprite(game.world.randomX, 200, "ball");

        game.physics.arcade.enable(ball);

        game.camera.follow(ball);

        pointerCursor = game.input.keyboard.createCursorKeys();
    }, 

    update: () => {
        ball.body.velocity.x = 0;
        ball.body.velocity.y = 0;

        if (pointerCursor.left.isDown) {
            ball.body.velocity.x = -240;
        } else if (pointerCursor.right.isDown) {
            ball.body.velocity.x = 240;
        }

        if (pointerCursor.up.isDown) {
            ball.body.velocity.y = -240;
        } else if (pointerCursor.down.isDown) {
            ball.body.velocity.y = 240;
        }
    }, 

    render: () => game.debug.text("Distance to pointer: " + game.physics.arcade.distanceToPointer(ball), 32, 32) 
});
