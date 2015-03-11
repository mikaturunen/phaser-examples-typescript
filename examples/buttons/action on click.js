var _this = this;
var buttons;
var actionBackground;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.spritesheet("button", "assets/buttons/button_sprite_sheet.png", 193, 71);
        game.load.image("background", "assets/misc/starfield.jpg");
    },
    create: function () {
        game.stage.backgroundColor = "#182d3b";
        actionBackground = game.add.tileSprite(0, 0, 800, 600, "background");
        button = game.add.button(game.world.centerX - 95, 400, "button", actionOnClickNormal, _this, 2, 1, 0);
        button.onInputactionOnClickOver.add(actionOnClickOver, _this);
        button.onInputactionOnClickOut.add(actionOnClickOut, _this);
        button.onInputactionOnClickUp.add(actionOnClickUp, _this);
    }
});
function actionOnClickUp() {
    console.log("button actionOnClickUp", arguments);
}
function actionOnClickOver() {
    console.log("button actionOnClickOver");
}
function actionOnClickOut() {
    console.log("button actionOnClickOut");
}
function actionOnClickNormal() {
    actionBackground.visible = !actionBackground.visible;
}
