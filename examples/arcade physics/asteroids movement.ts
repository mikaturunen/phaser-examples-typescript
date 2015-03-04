
var sprite: Phaser.Sprite;
var asteroidCursors: Phaser.CursorKeys;
var bullet: Phaser.Sprite;
var bullets: Phaser.Group;
var bulletTime = 0;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.load.image("space", "assets/skies/deep-space.jpg");
        game.load.image("bullet", "assets/games/asteroids/bullets.png");
        game.load.image("ship", "assets/games/asteroids/ship.png");
    }, 

    create: () => {
        //  This will run in Canvas mode, so let"s gain a little speed and display
        //  TODO update phaser.d.ts with clearBeforeRender vs render number
        (<any> game.renderer).clearBeforeRender = false;
        //  TODO update phaser.d.ts with clearBeforeRender vs render number
        (<any> game.renderer).roundPixels = true;

        //  We need arcade physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //  A spacey background
        game.add.tileSprite(0, 0, game.width, game.height, "space");

        //  Our ships bullets
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;

        //  All 40 of them
        bullets.createMultiple(40, "bullet");
        bullets.setAll("anchor.x", 0.5);
        bullets.setAll("anchor.y", 0.5);

        //  Our player ship
        sprite = game.add.sprite(300, 300, "ship");
        sprite.anchor.set(0.5);

        //  and its physics settings
        game.physics.enable(sprite, Phaser.Physics.ARCADE);

        sprite.body.drag.set(100);
        sprite.body.maxVelocity.set(200);

        //  Game input
        asteroidCursors = game.input.keyboard.createCursorKeys();
        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
    }, 

    update: () => {
        if (asteroidCursors.up.isDown) {
            game.physics.arcade.accelerationFromRotation(sprite.rotation, 200, sprite.body.acceleration);
        } else {
            sprite.body.acceleration.set(0);
        }

        if (asteroidCursors.left.isDown) {
            sprite.body.angularVelocity = -300;
        } else if (asteroidCursors.right.isDown) {
            sprite.body.angularVelocity = 300;
        } else {
            sprite.body.angularVelocity = 0;
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            fireBullet();
        }

        screenWrap(sprite);
        bullets.forEachExists(screenWrap, this);
    }
});

function fireBullet () {
    if (game.time.now > bulletTime) {
        bullet = bullets.getFirstExists(false);

        if (bullet) {
            bullet.reset(sprite.body.x + 16, sprite.body.y + 16);
            bullet.lifespan = 2000;
            bullet.rotation = sprite.rotation;
            game.physics.arcade.velocityFromRotation(sprite.rotation, 400, bullet.body.velocity);
            bulletTime = game.time.now + 50;
        }
    }
}

function screenWrap (sprite: Phaser.Sprite) {
    if (sprite.x < 0) {
        sprite.x = game.width;
    } else if (sprite.x > game.width) {
        sprite.x = 0;
    }

    if (sprite.y < 0) {
        sprite.y = game.height;
    } else if (sprite.y > game.height) {
        sprite.y = 0;
    }
}