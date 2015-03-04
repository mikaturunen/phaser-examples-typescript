
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

        //  This will check Sprite vs. Sprite collision

        sprite1 = game.add.sprite(50, 200, "atari");
        sprite2 = game.add.sprite(700, 220, "mushroom");

        game.physics.enable( [ sprite1, sprite2 ], Phaser.Physics.ARCADE);

        sprite1.name = "atari";
        sprite1.body.velocity.x = 100;
        
        sprite2.name = "mushroom";
        sprite2.body.velocity.x = -100;
    }, 

    update: () => game.physics.arcade.collide(sprite1, sprite2, spriteVsSpriteCollisionHandler, null, this), 

    render: () => {
        game.debug.body(sprite1);
        game.debug.body(sprite2);
    } 
});

function spriteVsSpriteCollisionHandler (obj1: Phaser.Sprite, obj2: Phaser.Sprite) {

    //  The two sprites are colliding
    game.stage.backgroundColor = "#992d2d";

}
