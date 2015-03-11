
var group: Phaser.Group;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => {
        game.load.spritesheet("button", "assets/buttons/button_sprite_sheet.png", 193, 71);
        game.load.image("background","assets/misc/starfield.jpg");
    }, 

    create: () => {
        game.add.tileSprite(0, 0, 800, 600, "background");
        group = game.add.group();

        var button: Phaser.Button = game.make.button(game.world.centerX - 95, 400, "button", buttonInGroupRemove, this, 2, 1, 0);
        window.rich = button;

        button.onInputbuttonInGroupOver.add(buttonInGroupOver, this);
        button.onInputOut.add(buttonInGroupOut, this);

        group.add(button);
    } 
});

function buttonInGroupRemove() {
    game.world.remove(group);
}

function buttonInGroupOver() {
    console.log("button buttonInGroupOver");
}

function buttonInGroupOut() {
    console.log("button out");
}
