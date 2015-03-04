
var ball: Phaser.Sprite;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.load.image("backdrop", "assets/pics/remember-me.jpg");
        game.load.image("ball", "assets/sprites/shinyball.png");    
    }, 

    create: () => {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0, 0, 1920, 1200);
        game.add.sprite(0, 0, "backdrop");

        ball = game.add.sprite(game.world.randomX, 200, "ball");
        game.physics.arcade.enable(ball);
        game.camera.follow(ball);
        game.input.onDown.add(moveBallToPointer, this);
    }, 

    render: () => game.debug.text("distance: " + game.physics.arcade.distanceToPointer(ball), 32, 32) 
});


function moveBallToPointer() {
    game.camera.follow(ball);
    game.physics.arcade.moveToPointer(ball, 100);
}

