var _this = this;
var s;
var music;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("greenie", "assets/sprites/wizball.png");
        game.load.audio("wizball", ["assets/audio/oedipus_wizball_highscore.mp3", "assets/audio/oedipus_wizball_highscore.ogg"]);
    },
    create: function () {
        game.stage.backgroundColor = "#182d3b";
        game.input.touch.preventDefault = false;
        music = game.add.audio("wizball");
        music.play();
        s = game.add.sprite(game.world.centerX, game.world.centerY, "greenie");
        s.anchor.set(0.5);
        game.input.onDown.add(restarter, _this);
    },
    update: function () {
        s.rotation += 0.01;
    },
    render: function () {
        game.debug.soundInfo(music, 20, 32);
    }
});
function restarter() {
    music.restart();
}
