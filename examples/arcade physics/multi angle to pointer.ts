
var sprite1: Phaser.Sprite;
var sprite2: Phaser.Sprite;
var sprite3: Phaser.Sprite;
var sprite4: Phaser.Sprite;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => game.load.image("arrow", "assets/sprites/longarrow.png"), 

    create: () => {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.stage.backgroundColor = "#363636";

        sprite1 = game.add.sprite(150, 150, "arrow");
        sprite1.anchor.setTo(0.1, 0.5);

        sprite2 = game.add.sprite(200, 500, "arrow");
        sprite2.anchor.setTo(0.1, 0.5);

        sprite3 = game.add.sprite(400, 200, "arrow");
        sprite3.anchor.setTo(0.1, 0.5);

        sprite4 = game.add.sprite(600, 400, "arrow");
        sprite4.anchor.setTo(0.1, 0.5);
    }, 

    update: () => {
        //  This will update the sprite.rotation so that it points to the currently active pointer
        //  On a Desktop that is the mouse, on mobile the most recent finger press.

        sprite1.rotation = game.physics.arcade.angleToPointer(sprite1);
        sprite2.rotation = game.physics.arcade.angleToPointer(sprite2);
        sprite3.rotation = game.physics.arcade.angleToPointer(sprite3);
        sprite4.rotation = game.physics.arcade.angleToPointer(sprite4);
    } 
});