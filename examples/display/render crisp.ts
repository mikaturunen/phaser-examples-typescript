
var renderCripsBoss: Phaser.Sprite;
var renderCripsMelon: Phaser.Sprite;
var renderCripsButton: Phaser.Button;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => {
        game.load.image("boss", "assets/misc/boss1.png");
        game.load.image("melon", "assets/sprites/melon.png");
        game.load.spritesheet("button", "assets/renderCripsbuttons/button_sprite_sheet.png", 193, 71);
    }, 

    create: () => {
        renderCripsBoss = game.add.sprite(game.world.centerX, game.world.centerY, "boss");
        renderCripsBoss.anchor.setTo(0.5, 0.5);

        renderCripsMelon = game.add.sprite(500, game.world.centerY, "melon");
        renderCripsMelon.anchor.setTo(0.5, 0.5);

        //  For browsers that support it, this keeps our pixel art looking crisp (works across Canvas and WebGL)

        //  You can either set smoothing on a specific sprite, like this:
        renderCripsBoss.smoothed = false;

        //  Or across the whole stage, like this:
        // game.stage.smoothed = false;

        //  Zoom in each time we press the renderCripsbutton
        renderCripsButton = game.add.button(32, 32, "button", () => {
            renderCripsBoss.scale.x += 0.5;
            renderCripsBoss.scale.y += 0.5;

            renderCripsMelon.scale.x += 0.5;
            renderCripsMelon.scale.y += 0.5;
        }, this, 2, 1, 0);
    } 
});
