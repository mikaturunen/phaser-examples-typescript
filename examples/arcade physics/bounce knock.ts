// Original JS mods by Patrick OReilly 
// Original JS Twitter: @pato_reilly Web: http://patricko.byethost9.com

var image: Phaser.Sprite;
var ball: Phaser.Sprite;
var knocker: Phaser.Sprite;
var knockCursors: Phaser.CursorKeys;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.load.image("dude", "assets/sprites/phaser-dude.png");
        game.load.image("ball", "assets/sprites/pangball.png");
    }, 

    create: () => {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        knockCursors = game.input.keyboard.createCursorKeys();
        
        //  This creates a simple sprite that is using our loaded image and
        //  displays it on-screen
        //  and assign it to a variable
        ball = game.add.sprite(400, 200, "ball");

        knocker = game.add.sprite(400, 200, "dude");

        game.physics.enable([knocker,ball], Phaser.Physics.ARCADE);

        knocker.body.immovable = true;

        //  This gets it moving
        ball.body.velocity.setTo(200, 200);

        //  This makes the game world bounce-able
        ball.body.collideWorldBounds = true;

        //  This sets the image bounce energy for the horizontal 
        //  and vertical vectors (as an x,y point). "1" is 100% energy return
        ball.body.bounce.setTo(1, 1);
    }, 

    update: () => {
         //  Enable physics between the knocker and the ball
        game.physics.arcade.collide(knocker, ball);

        if (knockCursors.up.isDown) {
            knocker.body.velocity.y = -300;
        } else if (knockCursors.down.isDown) {
            knocker.body.velocity.y =  300;
        } else if (knockCursors.left.isDown) {
            knocker.body.velocity.x = -300;
        } else if (knockCursors.right.isDown) {
            knocker.body.velocity.x = 300;
        } else {
            knocker.body.velocity.setTo(0, 0);
        }
    }, 

    render: () => game.debug.spriteInfo(ball, 32, 32) 
});
