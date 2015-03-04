
var sprite: Phaser.Sprite;
var showDebug = true;

var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => game.load.image("atari", "assets/sprites/atari130xe.png"), 

    create: () => {
        game.stage.backgroundColor = "#2d2d2d";
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.physics.arcade.gravity.y = 100;

        sprite = game.add.sprite(150, 100, "atari");

        game.physics.arcade.enable(sprite);

        sprite.body.velocity.set(-100, -100);
        sprite.body.bounce.set(1);
        sprite.body.collideWorldBounds = true;

        game.input.onDown.add(toggle, this);
    }, 

    render: () => {
        if (showDebug) {
            game.debug.bodyInfo(sprite, 32, 32);
            game.debug.body(sprite);
        } 
    } 
});

function toggle() {
    showDebug = (showDebug) ? false : true;

    if (!showDebug) {
        game.debug.reset();
    }
}
