var _this = this;
var buttons;
var cancelBackground;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.spritesheet("button", "assets/buttons/button_sprite_sheet.png", 193, 71);
        game.load.image("background", "assets/misc/starfield.jpg");
    },
    create: function () {
        game.stage.backgroundColor = "#182d3b";
        cancelBackground = game.add.tileSprite(0, 0, 800, 600, "background");
        button = game.add.button(game.world.centerX - 95, 400, "button", cancelButtonOnUp, _this, 2, 1, 0);
    }
});
function cancelButtonOnUp(button, pointer, isOver) {
    if (isOver) {
        cancelBackground.visible = !cancelBackground.visible;
    }
}
