
var arrow: Phaser.Sprite;
var target: Phaser.Sprite;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { 
    preload: () => {
        game.load.image('arrow', 'assets/sprites/longarrow.png');
        game.load.image('ball', 'assets/sprites/pangball.png');
    }, 

    create: () => {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.stage.backgroundColor = '#0072bc';

        arrow = game.add.sprite(200, 250, 'arrow');
        arrow.anchor.setTo(0.1, 0.5);

        target = game.add.sprite(600, 400, 'ball');
        target.anchor.setTo(0.5, 0.5);
        target.inputEnabled = true;
        target.input.enableDrag(true);
    }, 

    update: () => {
        arrow.rotation = game.physics.arcade.angleBetween(arrow, target);
    }, 

    render: () => {
        game.debug.text("Drag the ball", 32, 32);
        game.debug.spriteInfo(arrow, 32, 100);
    } 
});
