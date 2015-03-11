
var button: Phaser.Button;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => {
        game.load.spritesheet("button", "assets/buttons/button_sprite_sheet.png", 193, 71);
        game.load.image("background","assets/misc/starfield.jpg");
    }, 

    create: () => {
        game.stage.backgroundColor = "#cccccc";
        //  The numbers given in parameters are the indexes of the frames, in this order: over, out, down
        button = game.add.button(
                game.world.centerX, 
                game.world.centerY, 
                "button", 
                () => alert("Though I\"m turning around, you can still click on me"), 
                this, 
                2, 
                1, 
                0
            );
        //  Set the anchor of the sprite in the center, otherwise it would rotate around the top-left corner
        button.anchor.setTo(0.5, 0.5);
    },

    update: () => (button.angle += 1)
});
