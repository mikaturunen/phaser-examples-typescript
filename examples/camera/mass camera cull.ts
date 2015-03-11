
var cameraCursors: Phaser.CursorKeys;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => {
        game.load.image("backdrop", "assets/pics/remember-me.jpg");
        game.load.image("baddie1", "assets/sprites/shmup-baddie.png");
        game.load.image("baddie2", "assets/sprites/shmup-baddie2.png");
        game.load.image("baddie3", "assets/sprites/shmup-baddie3.png");
    }, 

    create: () => {
        game.world.setBounds(0, 0, 1920, 1200);

        game.add.sprite(0, 0, "backdrop");

        //  Generate 100 random sprites
        for (var i = 0; i < 100; i++) {
            var s: Phaser.Sprite = game.add.sprite(game.rnd.between(800, 1100), game.world.randomY, "baddie" + game.rnd.between(1, 3));
            game.physics.arcade.enable(s);
            s.body.velocity.x = game.rnd.between(-25, -50);
            s.autoCull = true;
            s.checkWorldBounds = true;
            s.events.onOutOfBounds.add(() => (sprite.x = game.world.bounds.right), this);
        }

        cameraCursors = game.input.keyboard.createCursorKeys();
    }, 

    update: () => {
        if (cameraCursors.up.isDown) {
            game.camera.y -= 4;
        } else if (cameraCursors.down.isDown) {
            game.camera.y += 4;
        }

        if (cameraCursors.left.isDown) {
            game.camera.x -= 4;
        } else if (cameraCursors.right.isDown) {
            game.camera.x += 4;
        }
    }, 

    render: () => game.debug.cameraInfo(game.camera, 32, 32) 
});
