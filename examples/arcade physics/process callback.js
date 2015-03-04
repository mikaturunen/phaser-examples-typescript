var _this = this;
var sprite1;
var sprite2;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("atari", "assets/sprites/atari130xe.png");
        game.load.image("mushroom", "assets/sprites/mushroom2.png");
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = "#2d2d2d";
        sprite1 = game.add.sprite(0, 200, "atari");
        sprite2 = game.add.sprite(750, 220, "mushroom");
        game.physics.enable([sprite1, sprite2], Phaser.Physics.ARCADE);
        sprite1.body.velocity.x = 50 + Math.random() * 100;
        sprite2.body.velocity.x = -(50 + Math.random() * 100);
    },
    update: function () { return game.physics.arcade.collide(sprite1, sprite2, processCallbackCollisionHandler, processCallback, _this); },
    render: function () {
        game.debug.text("The processCallback will only collide if sprite1 is going fastest.", 32, 32);
        game.debug.text("Sprite 1 speed: " + sprite1.body.speed, 32, 64);
        game.debug.text("Sprite 2 speed: " + sprite2.body.speed, 32, 96);
    }
});
function processCallback(obj1, obj2) {
    if (obj1.body.speed > obj2.body.speed) {
        return true;
    }
    else {
        return false;
    }
}
function processCallbackCollisionHandler(obj1, obj2) {
    game.stage.backgroundColor = "#992d2d";
}
