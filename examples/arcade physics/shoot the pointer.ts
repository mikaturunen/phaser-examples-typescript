
var sprite: Phaser.Sprite;
var bullets: Phaser.Group;

var fireRate = 100;
var nextFire = 0;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.load.image("arrow", "assets/sprites/arrow.png");
        game.load.image("bullet", "assets/sprites/purple_ball.png");
    }, 

    create: () => {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = "#313131";

        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;

        bullets.createMultiple(50, "bullet");
        bullets.setAll("checkWorldBounds", true);
        bullets.setAll("outOfBoundsKill", true);
        
        sprite = game.add.sprite(400, 300, "arrow");
        sprite.anchor.set(0.5);

        game.physics.enable(sprite, Phaser.Physics.ARCADE);

        sprite.body.allowRotation = false;
    }, 

    update: () => {
        sprite.rotation = game.physics.arcade.angleToPointer(sprite);

        if (game.input.activePointer.isDown) {
            shootThePointer();
        }
    }, 

    render: () => {
        game.debug.text("Active Bullets: " + bullets.countLiving() + " / " + bullets.total, 32, 32);
        game.debug.spriteInfo(sprite, 32, 450);
    } 
});

function shootThePointer() {
    if (game.time.now > nextFire && bullets.countDead() > 0) {
        nextFire = game.time.now + fireRate;

        var bullet = bullets.getFirstDead();

        bullet.reset(sprite.x - 8, sprite.y - 8);

        game.physics.arcade.moveToPointer(bullet, 300);
    }
}
