
var boss: Phaser.Sprite;
var roundPixelsButton: Phaser.Button;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => {
        game.load.image("boss", "assets/misc/boss1.png");
        game.load.image("melon", "assets/sprites/melon.png");
        game.load.spritesheet("button", "assets/buttons/button_sprite_sheet.png", 193, 71);
    }, 

    create: () => {
        // TODO phaser.d.ts update?
        (<any> game.renderer).renderSession.roundPixels = true;

        boss = game.add.sprite(game.world.centerX, game.world.centerY, "boss");
        // boss = game.add.sprite(200.5, 200, "boss");
        boss.anchor.setTo(0.5, 0.5);

        boss.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

        //  Zoom in each time we press the button
        roundPixelsButton = game.add.button(32, 32, "button", () => {
            boss.scale.x += 0.5;
            boss.scale.y += 0.5;
        }, this, 2, 1, 0);
    } 
});
