var _this = this;
var fullButton;
var sprite;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("dragon", "assets/pics/cougar_dragonsun.png");
        game.load.spritesheet("button", "assets/buttons/button_sprite_sheet.png", 193, 71);
    },
    create: function () {
        sprite = game.add.sprite(game.world.centerX, game.world.centerY, "dragon");
        sprite.anchor.set(0.5);
        game.stage.backgroundColor = "#000";
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        fullButton = game.add.button(game.world.centerX - 95, 500, "button", function () { return sprite.tint = Math.random() * 0xFFFFFF; }, _this, 2, 1, 0);
        fullButton.visible = false;
        game.scale.enterFullScreen.add(function () { return fullButton.visible = true; }, _this);
        game.scale.leaveFullScreen.add(function () { return fullButton.visible = false; }, _this);
        game.input.onDown.add(function () { return game.scale.startFullScreen(); }, _this);
    },
    render: function () {
        if (game.scale.isFullScreen) {
            game.debug.text("ESC to leave fullscreen", 270, 16);
        }
        else {
            game.debug.text("Click / Tap to go fullscreen", 270, 16);
        }
    }
});
