
var fullButton: Phaser.Button;
var sprite: Phaser.Sprite;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.load.image("dragon", "assets/pics/cougar_dragonsun.png");
        game.load.spritesheet("button", "assets/buttons/button_sprite_sheet.png", 193, 71);
    }, 

    create: () => {
        sprite = game.add.sprite(game.world.centerX, game.world.centerY, "dragon");
        sprite.anchor.set(0.5);

        game.stage.backgroundColor = "#000";

        // Stretch to fill
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

        fullButton = game.add.button(
                game.world.centerX - 95, 
                500, 
                "button", 
                () => sprite.tint = Math.random() * 0xFFFFFF, 
                this, 
                2, 
                1, 
                0
            );

        fullButton.visible = false;

        game.scale.enterFullScreen.add(() => fullButton.visible = true, this);
        game.scale.leaveFullScreen.add(() => fullButton.visible = false, this);

        game.input.onDown.add(() => game.scale.startFullScreen(), this);
    }, 

    render: () => { 
        if (game.scale.isFullScreen) {
            game.debug.text("ESC to leave fullscreen", 270, 16);
        } else {
            game.debug.text("Click / Tap to go fullscreen", 270, 16);
        } 
    }
});
