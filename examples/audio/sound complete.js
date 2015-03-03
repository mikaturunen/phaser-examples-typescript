var _this = this;
var explosion;
var sword;
var blaster;
var text;
var text1;
var text2;
var text3;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.audio("explosion", "assets/audio/SoundEffects/explosion.mp3");
        game.load.audio("sword", "assets/audio/SoundEffects/sword.mp3");
        game.load.audio("blaster", "assets/audio/SoundEffects/blaster.mp3");
    },
    create: function () {
        game.stage.backgroundColor = "#414040";
        var style = {
            font: "65px Arial",
            fill: "#52bace",
            align: "center"
        };
        text = game.add.text(game.world.centerX, 100, "decoding", style);
        text.anchor.set(0.5, 0);
        explosion = game.add.audio("explosion");
        sword = game.add.audio("sword");
        blaster = game.add.audio("blaster");
        game.sound.setDecodedCallback([explosion, sword, blaster], start, _this);
    }
});
function start() {
    text.text = "Press 1, 2 or 3";
    var style = { font: "48px Arial", fill: "#cdba52", align: "center" };
    text1 = game.add.text(game.world.centerX, 250, "Blaster: Stopped", style);
    text1.anchor.set(0.5, 0);
    text2 = game.add.text(game.world.centerX, 350, "Explosion: Stopped", style);
    text2.anchor.set(0.5, 0);
    text3 = game.add.text(game.world.centerX, 450, "Sword: Stopped", style);
    text3.anchor.set(0.5, 0);
    explosion.onStop.add(soundStopped, this);
    sword.onStop.add(soundStopped, this);
    blaster.onStop.add(soundStopped, this);
    var key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    var key2 = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    var key3 = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
    key1.onDown.add(playFx, this);
    key2.onDown.add(playFx, this);
    key3.onDown.add(playFx, this);
}
function playFx(key) {
    switch (key.keyCode) {
        case Phaser.Keyboard.ONE:
            text1.text = "Blaster: Playing";
            blaster.play();
            break;
        case Phaser.Keyboard.TWO:
            text2.text = "Explosion: Playing";
            explosion.play();
            break;
        case Phaser.Keyboard.THREE:
            text3.text = "Sword: Playing";
            sword.play();
            break;
    }
}
function soundStopped(sound) {
    if (sound === blaster) {
        text1.text = "Blaster: Complete";
    }
    else if (sound === explosion) {
        text2.text = "Explosion: Complete";
    }
    else if (sound === sword) {
        text3.text = "Sword: Complete";
    }
}
