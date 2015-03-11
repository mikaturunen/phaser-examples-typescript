
var buttons: Phaser.Button;
var textureAtlasBackground: Phaser.TileSprite;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => {
        game.load.atlas("button", "assets/buttons/button_texture_atlas.png", "assets/buttons/button_texture_atlas.json");
        game.load.image("background","assets/misc/starfield.jpg");
    }, 

    create: () => {
        game.stage.backgroundColor = "#182d3b";

        textureAtlasBackground = game.add.tileSprite(0, 0, 800, 600, "background");

        button = game.add.button(
                game.world.centerX - 95, 
                400, 
                "button", 
                () => (textureAtlasBackground.visible =! textureAtlasBackground.visible), 
                this, 
                "buttonUsingTextureAtlasOver", 
                "buttonUsingTextureAtlasOut", 
                "down"
            );

        button.onInputOver.add(() => console.log("button buttonUsingTextureAtlasOver"), this);
        button.onInputOut.add(() => console.log("button buttonUsingTextureAtlasOut"), this);
    } 
});
