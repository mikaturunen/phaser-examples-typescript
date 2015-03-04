var car;
var aliens;
var massVelocityCursors;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
    preload: function () {
        game.load.image('car', 'assets/sprites/car90.png');
        game.load.image('baddie', 'assets/sprites/space-baddie.png');
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        aliens = game.add.group();
        aliens.enableBody = true;
        for (var i = 0; i < 50; i++) {
            var s = aliens.create(game.world.randomX, game.world.randomY, 'baddie');
            s.name = 'alien' + s;
            s.body.collideWorldBounds = true;
            s.body.bounce.setTo(0.8, 0.8);
            s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        }
        car = game.add.sprite(400, 300, 'car');
        car.name = 'car';
        car.anchor.set(0.5);
        game.physics.enable(car, Phaser.Physics.ARCADE);
        car.body.collideWorldBounds = true;
        car.body.bounce.set(0.8);
        car.body.allowRotation = true;
        car.body.immovable = true;
        massVelocityCursors = game.input.keyboard.createCursorKeys();
    },
    update: function () {
        game.physics.arcade.collide(car, aliens);
        car.body.velocity.x = 0;
        car.body.velocity.y = 0;
        car.body.angularVelocity = 0;
        if (massVelocityCursors.left.isDown) {
            car.body.angularVelocity = -200;
        }
        else if (massVelocityCursors.right.isDown) {
            car.body.angularVelocity = 200;
        }
        if (massVelocityCursors.up.isDown) {
            car.body.velocity.copyFrom(game.physics.arcade.velocityFromAngle(car.angle, 300));
        }
    }
});
