var _this = this;
var sprite1;
var sprite2;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.image("atari", "assets/sprites/atari130xe.png");
        game.load.image("mushroom", "assets/sprites/mushroom2.png");
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = "#2d2d2d";
        sprite1 = game.add.sprite(300, 50, "atari");
        sprite1.name = "atari";
        game.physics.enable(sprite1, Phaser.Physics.ARCADE);
        sprite1.body.velocity.y = 100;
        sprite1.body.setSize(220, 10, 0, 0);
        sprite2 = game.add.sprite(400, 450, "mushroom");
        sprite2.name = "mushroom";
        game.physics.enable(sprite2, Phaser.Physics.ARCADE);
        sprite2.body.immovable = true;
    },
    update: function () { return game.physics.arcade.collide(sprite1, sprite2, verticalCollisionHandler, null, _this); },
    render: function () {
        game.debug.body(sprite1);
        game.debug.body(sprite2);
    }
});
function verticalCollisionHandler(obj1, obj2) {
    game.stage.backgroundColor = "#992d2d";
}
