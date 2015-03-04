
var sprite1: Phaser.Sprite;
var sprite2: Phaser.Sprite;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.load.image("atari", "assets/sprites/atari130xe.png");
        game.load.image("mushroom", "assets/sprites/mushroom2.png");
    }, 

    create: () => {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = "#2d2d2d";

        sprite1 = game.add.sprite(300, 50, "atari");
        sprite2 = game.add.sprite(400, 450, "mushroom");

        game.physics.arcade.enable([ sprite1, sprite2 ], Phaser.Physics.ARCADE);

        game.add.tween(sprite1.body).to( { y: 400 }, 3000, Phaser.Easing.Linear.None, true);
    }, 

    update: game.physics.arcade.overlap(sprite1, sprite2, overlapHandler, null, this), 

    render: () => {
        game.debug.body(sprite1);
        game.debug.body(sprite2);
    } 
});

function overlapHandler (obj1: Phaser.Sprite, obj2: Phaser.Sprite) {
    game.stage.backgroundColor = "#992d2d";
    obj2.kill();
}
