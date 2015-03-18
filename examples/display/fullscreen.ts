
var game: Phaser.Game = new Phaser.Game(320, 241, Phaser.AUTO, "phaser-example", { 
    preload: () => {
        game.load.image("dragon", "assets/pics/cougar_dragonsun.png");
        game.load.image("star", "assets/pics/monika_krawinkel-amberstar_title.png");
        game.load.image("nanoha", "assets/pics/nanoha_taiken_pink.png");
    }, 

    create: () => {
        var i = game.add.image(game.world.centerX, game.world.centerY, "nanoha");
        i.anchor.set(0.5);

        // var sprite = game.add.sprite(game.world.centerX, game.world.centerY, "dragon");
        // sprite.anchor.set(0.5);

        game.stage.backgroundColor = "#4d4d4d";

        // Stretch to fill
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

        // Keep original size
        // game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;

        // Maintain aspect ratio
        // game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        game.input.onDown.add(() => {
            if (game.scale.isFullScreen) {
                game.scale.stopFullScreen();
            } else {
                game.scale.startFullScreen(false);
            }
        }, this);
    }, 

    render: () => game.debug.inputInfo(32, 32)
});

