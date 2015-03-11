
var button: Phaser.Button;
var background: Phaser.TileSprite;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => {
        game.load.atlas("button", "assets/buttons/button_texture_atlas.png", "assets/buttons/button_texture_atlas.json");
        game.load.image("background","assets/misc/starfield.jpg");
    }, 

    create: () => {
        game.stage.backgroundColor = "#182d3b";

        background = game.add.tileSprite(0, 0, 800, 600, "background");

        button = game.add.button(
                game.world.centerX - 95, 
                400, 
                "button", 
                buttonUsingTextureAtlasActionOnClick, 
                this, 
                "buttonUsingTextureAtlasOver", 
                "buttonUsingTextureAtlasOut", 
                "down"
            );

        button.onInputbuttonUsingTextureAtlasOver.add(buttonUsingTextureAtlasOver, this);
        button.onInputbuttonUsingTextureAtlasOut.add(buttonUsingTextureAtlasOut, this);
    } 
});

function buttonUsingTextureAtlasOver() {
    console.log("button buttonUsingTextureAtlasOver");
}

function buttonUsingTextureAtlasOut() {
    console.log("button buttonUsingTextureAtlasOut");
}

function buttonUsingTextureAtlasActionOnClick () {

    background.visible =! background.visible;

}
