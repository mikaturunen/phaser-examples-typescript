
var sprite: Phaser.Sprite;

var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    //  You can fill the preloader with as many assets as your game requires
    //  Here we are loading an image. The first parameter is the unique
    //  string by which we"ll identify the image later in our code.
    //  The second parameter is the URL of the image (relative)
    //  NOTE that I'm using the one liner for the fuction here, you need to expand it to () => { <code> }
    //  just like the update function
    preload: game.load.image("phaser", "assets/sprites/phaser.png"), 

    create: () => {
        //  To make the sprite move we need to enable Arcade Physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        sprite = game.add.sprite(game.world.centerX, game.world.centerY, "phaser");
        sprite.anchor.set(0.5);

        //  And enable the Sprite to have a physics body:
        game.physics.arcade.enable(sprite);
    }, 

    update: () => {
        //  If the sprite is > 8px away from the pointer then let"s move to it
        if (game.physics.arcade.distanceToPointer(sprite, game.input.activePointer) > 8) {
            //  Make the object seek to the active pointer (mouse or touch).
            game.physics.arcade.moveToPointer(sprite, 300);
        } else {
            //  Otherwise turn off velocity because we"re close enough to the pointer
            sprite.body.velocity.set(0);
        }
    }, 

    render: () => game.debug.inputInfo(32, 32) 
});
