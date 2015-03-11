var _this = this;
var buttons;
var textureAtlasBackground;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.atlas("button", "assets/buttons/button_texture_atlas.png", "assets/buttons/button_texture_atlas.json");
        game.load.image("background", "assets/misc/starfield.jpg");
    },
    create: function () {
        game.stage.backgroundColor = "#182d3b";
        textureAtlasBackground = game.add.tileSprite(0, 0, 800, 600, "background");
        button = game.add.button(game.world.centerX - 95, 400, "button", function () { return (textureAtlasBackground.visible = !textureAtlasBackground.visible); }, _this, "buttonUsingTextureAtlasOver", "buttonUsingTextureAtlasOut", "down");
        button.onInputOver.add(function () { return console.log("button buttonUsingTextureAtlasOver"); }, _this);
        button.onInputOut.add(function () { return console.log("button buttonUsingTextureAtlasOut"); }, _this);
    }
});
