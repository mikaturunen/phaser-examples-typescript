
var buttons: Phaser.Button;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: () => {
        game.load.spritesheet("button", "assets/buttons/number-buttons-90x90.png", 90,90);
        game.load.image("background","assets/misc/starfield.jpg");
    }, 

    create: () => {
        //  Setting the background colour
        game.stage.backgroundColor = "#182d3b";

        // The numbers given in parameters are the indexes of the frames, in this order: over, out, down
        button = game.add.button(
                game.world.centerX, 
                game.world.centerY, 
                "button", 
                () => button.setFrames(4, 3, 5), 
                this, 
                1, 
                0, 
                2
            );

        //  setting the anchor to the center
        button.anchor.setTo(0.5, 0.5);
    } 
});
