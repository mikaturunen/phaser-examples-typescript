var _this = this;
var buttons;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.spritesheet("button", "assets/buttons/button_sprite_sheet.png", 193, 71);
        game.load.image("background", "assets/misc/starfield.jpg");
    },
    create: function () {
        game.stage.backgroundColor = "#cccccc";
        button = game.add.button(game.world.centerX, game.world.centerY, "button", function () { return alert("Though I\"m turning around, you can still click on me"); }, _this, 2, 1, 0);
        button.anchor.setTo(0.5, 0.5);
    },
    update: function () { return (button.angle += 1); }
});
