
var atari: Phaser.Sprite;
var balls: Phaser.Group;
var multiballCursors: Phaser.CursorKeys;

var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => {
        game.load.image("atari", "assets/sprites/atari130xe.png");
        game.load.spritesheet("bullets", "assets/sprites/balls.png", 17, 17);
    }, 

    create: () => {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.stage.backgroundColor = "#2d2d2d";

        balls = game.add.group();

        balls.createMultiple(250, "bullets", 0, false);

        atari = game.add.sprite(300, 450, "atari");

        game.physics.arcade.gravity.y = 400;

        //  Enable physics on everything added to the world so far (the true parameter makes it recurse down into children)
        game.physics.arcade.enable(game.world, true);

        atari.body.allowGravity = 0;
        atari.body.immovable = true;

        multiballCursors = game.input.keyboard.createCursorKeys();

        game.time.events.loop(150, fire, this);

        game.add.text(16, 16, "Left / Right to move", { font: "18px Arial", fill: "#ffffff" });
    }, 

    update: () => {
        game.physics.arcade.collide(atari, balls, null, reflect, this);
        atari.body.velocity.x = 0;

        if (multiballCursors.left.isDown) {
            atari.body.velocity.x = -200;
        } else if (multiballCursors.right.isDown) {
            atari.body.velocity.x = 200;
        }

        balls.forEachAlive(checkBounds, this);
    }, 
});

function fire() {
    var ball = balls.getFirstExists(false);

    if (ball) {
        ball.frame = game.rnd.integerInRange(0,6);
        ball.exists = true;
        ball.reset(game.world.randomX, 0);

        ball.body.bounce.y = 0.8;
    }

}

function reflect(a: Phaser.Sprite, ball: Phaser.Sprite) {

    if (ball.y > (atari.y + 5)) {
        return true;
    } else {
        ball.body.velocity.x = atari.body.velocity.x;
        ball.body.velocity.y *= -(ball.body.bounce.y);

        return false;
    }

}

function checkBounds(ball: Phaser.Sprite) {
    if (ball.y > 600) {
        ball.kill();
    }
}
