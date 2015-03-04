var _this = this;
var sprite;
var bullets;
var veggies;
var groupVsGroupCursor;
var bulletTime = 0;
var bullet;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("phaser", "assets/sprites/phaser-dude.png");
        game.load.image("bullet", "assets/misc/bullet0.png");
        game.load.spritesheet("veggies", "assets/sprites/fruitnveg32wh37.png", 32, 32);
    },
    create: function () {
        game.stage.backgroundColor = "#2d2d2d";
        veggies = game.add.group();
        veggies.enableBody = true;
        veggies.physicsBodyType = Phaser.Physics.ARCADE;
        for (var i = 0; i < 50; i++) {
            var c = veggies.create(game.world.randomX, Math.random() * 500, "veggies", game.rnd.integerInRange(0, 36));
            c.name = "veg" + i;
            c.body.immovable = true;
        }
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        for (var i = 0; i < 20; i++) {
            var b = bullets.create(0, 0, "bullet");
            b.name = "bullet" + i;
            b.exists = false;
            b.visible = false;
            b.checkWorldBounds = true;
            b.events.onOutOfBounds.add(groupVsGroupResetBullet, _this);
        }
        sprite = game.add.sprite(400, 550, "phaser");
        game.physics.enable(sprite, Phaser.Physics.ARCADE);
        groupVsGroupCursor = game.input.keyboard.createCursorKeys();
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
    },
    update: function () {
        game.physics.arcade.overlap(bullets, veggies, groupVsGroupCollisionHandler, null, _this);
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;
        if (groupVsGroupCursor.left.isDown) {
            sprite.body.velocity.x = -300;
        }
        else if (groupVsGroupCursor.right.isDown) {
            sprite.body.velocity.x = 300;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            groupVsGroupFireBullet();
        }
    }
});
function groupVsGroupFireBullet() {
    if (game.time.now > bulletTime) {
        bullet = bullets.getFirstExists(false);
        if (bullet) {
            bullet.reset(sprite.x + 6, sprite.y - 8);
            bullet.body.velocity.y = -300;
            bulletTime = game.time.now + 150;
        }
    }
}
function groupVsGroupResetBullet(bullet) {
    bullet.kill();
}
function groupVsGroupCollisionHandler(bullet, veg) {
    bullet.kill();
    veg.kill();
}
