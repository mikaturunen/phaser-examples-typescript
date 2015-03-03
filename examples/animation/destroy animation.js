var _this = this;
var sprites;
var rip = 0;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.spritesheet("mummy", "assets/sprites/metalslug_mummy37x45.png", 37, 45, 18);
    },
    create: function () {
        sprites = game.add.group();
        game.time.events.loop(50, createSprite, _this);
    },
    update: function () {
        sprites.setAll("x", 10, true, true, 1);
        sprites.forEach(checkSprite, _this, true);
    },
    render: function () {
        game.debug.text("Group size: " + sprites.total, 32, 32);
        game.debug.text("Destroyed: " + rip, 32, 64);
    }
});
function createSprite() {
    var mummy = sprites.create(0, game.world.randomY, "mummy");
    mummy.animations.add("walk");
    mummy.play("walk", 10, true);
}
function checkSprite(sprite) {
    try {
        if (sprite.x > game.width) {
            rip++;
            sprites.remove(sprite, true);
        }
    }
    catch (e) {
        console.log(sprite);
    }
}
