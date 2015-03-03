
var s: Phaser.Sprite;
var music: Phaser.Audio;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { 
    preload: () => {
        game.load.image('disk', 'assets/sprites/ra_dont_crack_under_pressure.png');
        //  Firefox doesn't support mp3 files, so use ogg
        game.load.audio('boden', ['assets/audio/bodenstaendig_2000_in_rock_4bit.mp3', 'assets/audio/bodenstaendig_2000_in_rock_4bit.ogg']);
    }, 

    create: () => {
        game.stage.backgroundColor = '#182d3b';
        game.input.touch.preventDefault = false;

        music = game.add.audio('boden');

        music.play();

        s = game.add.sprite(game.world.centerX, game.world.centerY, 'disk');
        s.anchor.setTo(0.5, 0.5);

        game.input.onDown.add(changeVolume, this);
    }, 

    update: () => {
        s.rotation += 0.01;
    }, 

    render: () => {
        game.debug.soundInfo(music, 20, 32);
    }
});

function changeVolume(pointer) {

    if (pointer.y < 300)
    {
        music.volume += 0.1;
    }
    else
    {
        music.volume -= 0.1;
    }

}
