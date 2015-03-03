var _this = this;
var music;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("disk", "assets/sprites/ra_dont_crack_under_pressure.png");
        game.load.audio("boden", "assets/audio/goaman_intro.mp3");
    },
    create: function () {
        game.stage.backgroundColor = "#182d3b";
        game.input.touch.preventDefault = false;
        music = game.add.audio("boden");
        music.onDecoded.add(function () { return music.fadeIn(4000); }, _this);
        var s = game.add.sprite(game.world.centerX, game.world.centerY, "disk");
        s.anchor.setTo(0.5, 0.5);
    },
    render: function () {
        game.debug.soundInfo(music, 20, 32);
    }
});
