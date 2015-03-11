
var group: Phaser.Group;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => {
        game.load.spritesheet("button", "assets/buttons/button_sprite_sheet.png", 193, 71);
        game.load.image("background","assets/misc/starfield.jpg");
    }, 

    create: () => {
        game.add.tileSprite(0, 0, 800, 600, "background");
        group = game.add.group();

        var button: Phaser.Button = game.make.button(game.world.centerX - 95, 400, "button", () => game.world.remove(group), this, 2, 1, 0);
        (<any> window).rich = button;

        button.onInputOver.add(() => console.log("button buttonInGroupOver"), this);
        button.onInputOut.add(() => console.log("button out"), this);

        group.add(button);
    } 
});
