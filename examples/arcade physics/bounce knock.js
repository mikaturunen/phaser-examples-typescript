var image;
var ball;
var knocker;
var knockCursors;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("dude", "assets/sprites/phaser-dude.png");
        game.load.image("ball", "assets/sprites/pangball.png");
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        knockCursors = game.input.keyboard.createCursorKeys();
        ball = game.add.sprite(400, 200, "ball");
        knocker = game.add.sprite(400, 200, "dude");
        game.physics.enable([knocker, ball], Phaser.Physics.ARCADE);
        knocker.body.immovable = true;
        ball.body.velocity.setTo(200, 200);
        ball.body.collideWorldBounds = true;
        ball.body.bounce.setTo(1, 1);
    },
    update: function () {
        game.physics.arcade.collide(knocker, ball);
        if (knockCursors.up.isDown) {
            knocker.body.velocity.y = -300;
        }
        else if (knockCursors.down.isDown) {
            knocker.body.velocity.y = 300;
        }
        else if (knockCursors.left.isDown) {
            knocker.body.velocity.x = -300;
        }
        else if (knockCursors.right.isDown) {
            knocker.body.velocity.x = 300;
        }
        else {
            knocker.body.velocity.setTo(0, 0);
        }
    },
    render: function () { return game.debug.spriteInfo(ball, 32, 32); }
});
