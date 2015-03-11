
var button: Phaser.Button;
var background: Phaser.Sprite;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => {
        game.load.spritesheet("button", "assets/buttons/button_sprite_sheet.png", 193, 71);
        game.load.image("background","assets/misc/starfield.jpg");
    }, 

    create: () => {
        game.stage.backgroundColor = "#182d3b";
        background = game.add.tileSprite(0, 0, 800, 600, "background");
        button = game.add.button(game.world.centerX - 95, 400, "button", actionOnClickNormal, this, 2, 1, 0);

        button.onInputactionOnClickOver.add(actionOnClickOver, this);
        button.onInputactionOnClickOut.add(actionOnClickOut, this);
        button.onInputactionOnClickUp.add(actionOnClickUp, this);
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
    background.visible =! background.visible;
}
