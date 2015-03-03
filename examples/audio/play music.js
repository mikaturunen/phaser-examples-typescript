var _this = this;
var s;
var music;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("disk", "assets/sprites/ra_dont_crack_under_pressure.png");
        game.load.audio("boden", ["assets/audio/bodenstaendig_2000_in_rock_4bit.mp3", "assets/audio/bodenstaendig_2000_in_rock_4bit.ogg"]);
    },
    create: function () {
        game.stage.backgroundColor = "#182d3b";
        game.input.touch.preventDefault = false;
        music = game.add.audio("boden");
        music.play();
        s = game.add.sprite(game.world.centerX, game.world.centerY, "disk");
        s.anchor.setTo(0.5, 0.5);
        game.input.onDown.add(musicVolumeChanger, _this);
    },
    update: function () {
        s.rotation += 0.01;
    },
    render: function () {
        game.debug.soundInfo(music, 20, 32);
    }
});
function musicVolumeChanger(pointer) {
    if (pointer.y < 300) {
        music.volume += 0.1;
    }
    else {
        music.volume -= 0.1;
    }
}
