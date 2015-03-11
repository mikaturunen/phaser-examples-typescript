var _this = this;
var group;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.spritesheet("button", "assets/buttons/button_sprite_sheet.png", 193, 71);
        game.load.image("background", "assets/misc/starfield.jpg");
    },
    create: function () {
        game.add.tileSprite(0, 0, 800, 600, "background");
        group = game.add.group();
        var button = game.make.button(game.world.centerX - 95, 400, "button", function () { return game.world.remove(group); }, _this, 2, 1, 0);
        window.rich = button;
        button.onInputOver.add(function () { return console.log("button buttonInGroupOver"); }, _this);
        button.onInputOut.add(function () { return console.log("button out"); }, _this);
        group.add(button);
    }
});
