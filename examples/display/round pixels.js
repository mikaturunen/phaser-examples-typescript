var _this = this;
var boss;
var roundPixelsButton;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.image("boss", "assets/misc/boss1.png");
        game.load.image("melon", "assets/sprites/melon.png");
        game.load.spritesheet("button", "assets/buttons/button_sprite_sheet.png", 193, 71);
    },
    create: function () {
        game.renderer.renderSession.roundPixels = true;
        boss = game.add.sprite(game.world.centerX, game.world.centerY, "boss");
        boss.anchor.setTo(0.5, 0.5);
        boss.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
        roundPixelsButton = game.add.button(32, 32, "button", function () {
            boss.scale.x += 0.5;
            boss.scale.y += 0.5;
        }, _this, 2, 1, 0);
    }
});
