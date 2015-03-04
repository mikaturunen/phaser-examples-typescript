// Original JS mods by Patrick OReilly
// Original JS twitter: @pato_reilly

var arrow: Phaser.Sprite;
var ball: Phaser.Sprite;
var catchFlag = false;
var launchVelocity = 0;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { 
    preload: () => {
        game.load.image('analog', 'assets/tests/fusia.png');
        game.load.image('arrow', 'assets/sprites/longarrow2.png');
        game.load.image('ball', 'assets/sprites/pangball.png'); 
    }, 
    
    create: () => {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // set global gravity
        game.physics.arcade.gravity.y = 200;
        game.stage.backgroundColor = '#0072bc';
        
        var graphics = game.add.graphics(0,0);
        graphics.beginFill(0x049e0c);
        graphics.drawRect(395, 350, 10, 250);

        analog = game.add.sprite(400, 350, 'analog');

        game.physics.enable(analog, Phaser.Physics.ARCADE);

        analog.body.allowGravity = false;
        analog.width = 8;
        analog.rotation = 220;
        analog.alpha = 0;
        analog.anchor.setTo(0.5, 0.0);
        
        arrow = game.add.sprite(400, 350, 'arrow');

        game.physics.enable(arrow, Phaser.Physics.ARCADE);

        arrow.anchor.setTo(0.1, 0.5);
        arrow.body.moves = false;
        arrow.body.allowGravity = false;
        arrow.alpha = 0;
        
        ball = game.add.sprite(100, 400, 'ball');
        game.physics.enable(ball, Phaser.Physics.ARCADE);
        ball.anchor.setTo(0.5, 0.5);
        ball.body.collideWorldBounds = true;
        ball.body.bounce.setTo(0.9, 0.9);
        
        // Enable input.
        ball.inputEnabled = true;
        ball.input.start(0, true);
        ball.events.onInputDown.add(launchSet);
        ball.events.onInputUp.add(launcher);
    }, 

    update: () => {
        arrow.rotation = game.physics.arcade.angleBetween(arrow, ball);
    
        if (catchFlag == true) {
            //  Track the ball sprite to the mouse  
            ball.x = game.input.activePointer.worldX;   
            ball.y = game.input.activePointer.worldY;
            
            arrow.alpha = 1;    
            analog.alpha = 0.5;
            analog.rotation = arrow.rotation - 3.14 / 2;
            analog.height = game.physics.arcade.distanceToPointer(arrow);  
            launchVelocity = analog.height;
        }   
    }, 

    render: () => {
        game.debug.text("Drag the ball and release to launch", 32, 32);
        game.debug.bodyInfo(ball, 32, 64);
    } 
});

function launchSet(ball: Phaser.Sprite, pointer: Phaser.Pointer) {
    ball.body.moves = false;
    ball.body.velocity.setTo(0, 0);
    ball.body.allowGravity = false;
    catchFlag = true;
}

function launcher() {
    catchFlag = false;
    
    ball.body.moves = true;
    arrow.alpha = 0;
    analog.alpha = 0;
    var Xvector = (arrow.x - ball.x) * 3;
    var Yvector = (arrow.y - ball.y) * 3;
    ball.body.allowGravity = true;  
    ball.body.velocity.setTo(Xvector, Yvector);
}
