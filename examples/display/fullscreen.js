var _this = this;
var game = new Phaser.Game(320, 241, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.image("dragon", "assets/pics/cougar_dragonsun.png");
        game.load.image("star", "assets/pics/monika_krawinkel-amberstar_title.png");
        game.load.image("nanoha", "assets/pics/nanoha_taiken_pink.png");
    },
    create: function () {
        var i = game.add.image(game.world.centerX, game.world.centerY, "nanoha");
        i.anchor.set(0.5);
        game.stage.backgroundColor = "#4d4d4d";
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.input.onDown.add(function () {
            if (game.scale.isFullScreen) {
                game.scale.stopFullScreen();
            }
            else {
                game.scale.startFullScreen(false);
            }
        }, _this);
    },
    render: function () { return game.debug.inputInfo(32, 32); }
});
