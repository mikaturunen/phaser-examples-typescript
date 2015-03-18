var _this = this;
var renderCripsBoss;
var renderCripsMelon;
var renderCripsButton;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.image("boss", "assets/misc/boss1.png");
        game.load.image("melon", "assets/sprites/melon.png");
        game.load.spritesheet("button", "assets/renderCripsbuttons/button_sprite_sheet.png", 193, 71);
    },
    create: function () {
        renderCripsBoss = game.add.sprite(game.world.centerX, game.world.centerY, "boss");
        renderCripsBoss.anchor.setTo(0.5, 0.5);
        renderCripsMelon = game.add.sprite(500, game.world.centerY, "melon");
        renderCripsMelon.anchor.setTo(0.5, 0.5);
        renderCripsBoss.smoothed = false;
        renderCripsButton = game.add.button(32, 32, "button", function () {
            renderCripsBoss.scale.x += 0.5;
            renderCripsBoss.scale.y += 0.5;
            renderCripsMelon.scale.x += 0.5;
            renderCripsMelon.scale.y += 0.5;
        }, _this, 2, 1, 0);
    }
});
