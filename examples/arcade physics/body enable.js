var _this = this;
var sprite;
var sprite2;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () { return game.load.spritesheet("gameboy", "assets/sprites/gameboy_seize_color_40x60.png", 40, 60); },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = "#124184";
        sprite = game.add.sprite(300, 0, "gameboy", 2);
        sprite2 = game.add.sprite(300, 400, "gameboy", 3);
        game.physics.arcade.enable([sprite, sprite2]);
        game.physics.arcade.gravity.y = 200;
        sprite.body.bounce.y = 0.95;
        sprite.body.collideWorldBounds = true;
        sprite2.body.allowGravity = false;
        sprite2.body.immovable = true;
        game.input.onDown.add(toggleBody, _this);
    },
    update: function () { return game.physics.arcade.collide(sprite, sprite2); },
    render: function () {
        game.debug.text("Click to disable body1", 32, 32);
        if (sprite2.body.enable) {
            game.debug.body(sprite2);
        }
    }
});
function toggleBody() {
    if (sprite2.body.enable) {
        sprite2.body.enable = false;
    }
    else {
        sprite2.body.enable = true;
    }
}
