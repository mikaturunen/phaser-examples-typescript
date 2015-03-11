
var player: Phaser.Sprite;
var cursors: Phaser.CursorKeys;


var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.load.image("background","assets/tests/debug-grid-1920x1920.png");
        game.load.image("player","assets/sprites/phaser-dude.png");
    }, 

    create: () => {
        game.add.tileSprite(0, 0, 1920, 1920, "background");
        game.world.setBounds(0, 0, 1920, 1920);
        game.physics.startSystem(Phaser.Physics.P2JS);
        player = game.add.sprite(game.world.centerX, game.world.centerY, "player");
        game.physics.p2.enable(player);
        cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(player);

        //  The deadzone is a Rectangle that defines the limits at which the camera will start to scroll
        //  It does NOT keep the target sprite within the rectangle, all it does is control the boundary
        //  at which the camera will start to move. So when the sprite hits the edge, the camera scrolls
        //  (until it reaches an edge of the world)
        game.camera.deadzone = new Phaser.Rectangle(100, 100, 600, 400);
    }, 

    update: () => {
         player.body.setZeroVelocity();

        if (cursors.up.isDown) {
            player.body.moveUp(300)
        } else if (cursors.down.isDown) {
            player.body.moveDown(300);
        }

        if (cursors.left.isDown) {
            player.body.velocity.x = -300;
        } else if (cursors.right.isDown) {
            player.body.moveRight(300);
        }
    }, 

    render: () => {
        var zone: Phaser.Rectangle = game.camera.deadzone;

        game.context.fillStyle = "rgba(255,0,0,0.6)";
        game.context.fillRect(zone.x, zone.y, zone.width, zone.height);

        game.debug.cameraInfo(game.camera, 32, 32);
        game.debug.spriteCoords(player, 32, 500);
    } 
});
