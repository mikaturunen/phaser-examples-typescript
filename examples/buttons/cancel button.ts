
var button: Phaser.Button;
var background: Phaser.TileSprite;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => {
        game.load.spritesheet("button", "assets/buttons/button_sprite_sheet.png", 193, 71);
        game.load.image("background","assets/misc/starfield.jpg");
    }, 

    create: () => {
        game.stage.backgroundColor = "#182d3b";
        background = game.add.tileSprite(0, 0, 800, 600, "background");
        button = game.add.button(game.world.centerX - 95, 400, "button", cancelButtonOnUp, this, 2, 1, 0);
    }
});

function cancelButtonOnUp(button: Phaser.Button, pointer: Phaser.Pointer, isOver: boolean) {
    //  In this example if the Pointer is no longer over the Button, then we"ll treat it
    //  as if the user cancelled the operation and didn"t want to press the Button after all
    if (isOver) {
        background.visible =! background.visible;
    }
}
