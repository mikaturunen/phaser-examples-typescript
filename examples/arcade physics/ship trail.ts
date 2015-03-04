
var sprite: Phaser.Sprite;
var bmd: Phaser.BitmapData;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.load.image("chunk", "assets/sprites/chunk.png");
        game.load.image("arrow", "assets/sprites/asteroids_ship.png");
    }, 

    create: () => {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //  Click on the left or right of the game to shoot the space ship in that direction
        game.stage.backgroundColor = "#124184";

        bmd = game.add.bitmapData(800, 600);
        bmd.context.fillStyle = "#ffffff";

        var bg = game.add.sprite(0, 0, bmd);

        game.physics.arcade.gravity.y = 100;

        sprite = game.add.sprite(32, 450, "arrow");
        sprite.anchor.set(0.5);

        game.physics.enable(sprite, Phaser.Physics.ARCADE);

        sprite.body.collideWorldBounds = true;
        sprite.body.bounce.set(0.8);

        game.input.onDown.add(shipTrailLaunch, this);
    },

    update: () => {
        sprite.rotation = sprite.body.angle;

        bmd.context.fillRect(sprite.x, sprite.y, 2, 2);

        bmd.dirty = true;
    }, 

    render: () => game.debug.bodyInfo(sprite, 32, 32) 
});

function shipTrailLaunch() {
    if (game.input.x < sprite.x) {
        sprite.body.velocity.setTo(-200, -200);
    } else {
        sprite.body.velocity.setTo(200, -200);
    }
}
