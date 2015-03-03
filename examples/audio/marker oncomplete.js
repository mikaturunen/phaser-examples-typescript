var fx;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.audio("sfx", [
            "assets/audio/SoundEffects/fx_mixdown.mp3",
            "assets/audio/SoundEffects/fx_mixdown.ogg"
        ]);
    },
    create: function () {
        fx = game.add.audio("sfx");
        fx.addMarker("alien death", 1, 1.0);
        fx.addMarker("boss hit", 3, 0.5);
        fx.play(button.name);
    }
});
