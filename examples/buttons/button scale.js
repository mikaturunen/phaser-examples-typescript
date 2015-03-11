var _this = this;
var background;
var button1;
var button2;
var button3;
var button3;
var button4;
var button5;
var button6;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.spritesheet("button", "assets/buttons/button_sprite_sheet.png", 193, 71);
        game.load.image("sky0", "assets/skies/space2.png");
        game.load.image("sky1", "assets/skies/cavern1.png");
        game.load.image("sky2", "assets/skies/chrome.png");
        game.load.image("sky3", "assets/skies/fire.png");
        game.load.image("sky4", "assets/skies/fog.png");
        game.load.image("sky5", "assets/skies/sky1.png");
        game.load.image("sky6", "assets/skies/toxic.png");
    },
    create: function () {
        background = game.add.sprite(0, 0, "sky0");
        background.name = "background";
        button1 = game.add.button(100, 100, "button", buttonScaleChangeSky, _this, 2, 1, 0);
        button1.name = "sky1";
        button1.anchor.setTo(0.5, 0.5);
        button2 = game.add.button(330, 200, "button", buttonScaleChangeSky, _this, 2, 1, 0);
        button2.name = "sky2";
        button2.angle = 24;
        button2.anchor.setTo(0.5, 0.5);
        button3 = game.add.button(100, 300, "button", buttonScaleChangeSky, _this, 2, 1, 0);
        button3.name = "sky3";
        button3.width = 300;
        button3.anchor.setTo(0, 0.5);
        button4 = game.add.button(300, 450, "button", buttonScaleChangeSky, _this, 2, 1, 0);
        button4.name = "sky4";
        button4.scale.setTo(2, 2);
        button5 = game.add.button(100, 450, "button", buttonScaleChangeSky, _this, 2, 1, 0);
        button5.name = "sky5";
        button5.scale.setTo(0.5, 0.5);
        button6 = game.add.button(570, 200, "button", buttonScaleChangeSky, _this, 2, 1, 0);
        button6.name = "sky6";
        button6.angle = 32;
        button6.scale.setTo(2, 2);
        button6.anchor.setTo(0.5, 0.5);
    }
});
function buttonScaleChangeSky(button) {
    background.loadTexture(button.name);
}
