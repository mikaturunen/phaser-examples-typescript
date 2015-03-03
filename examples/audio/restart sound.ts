
var s: Phaser.Sprite;
var music: Phaser.Sound;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.load.image("greenie", "assets/sprites/wizball.png");
        game.load.audio("wizball", ["assets/audio/oedipus_wizball_highscore.mp3", "assets/audio/oedipus_wizball_highscore.ogg"]);
    },

    create: () => {
        game.stage.backgroundColor = "#182d3b";
        game.input.touch.preventDefault = false;

        music = game.add.audio("wizball");

        music.play();

        s = game.add.sprite(game.world.centerX, game.world.centerY, "greenie");
        s.anchor.set(0.5);

        game.input.onDown.add(restarter, this);
    }, 

    update: () => {
        s.rotation += 0.01;
    }, 
    
    render: () => {
        game.debug.soundInfo(music, 20, 32);
    } 
});

function restarter() {
    (<any>music).restart();
}