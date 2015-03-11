var _this = this;
var buttons;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.spritesheet("button", "assets/buttons/number-buttons-90x90.png", 90, 90);
        game.load.image("background", "assets/misc/starfield.jpg");
    },
    create: function () {
        game.stage.backgroundColor = "#182d3b";
        button = game.add.button(game.world.centerX, game.world.centerY, "button", function () { return button.setFrames(4, 3, 5); }, _this, 1, 0, 2);
        button.anchor.setTo(0.5, 0.5);
    }
});
