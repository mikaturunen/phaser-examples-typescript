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
        sprite1 = game.add.sprite(300, 50, "atari");
        sprite2 = game.add.sprite(400, 450, "mushroom");
        game.physics.arcade.enable([sprite1, sprite2], Phaser.Physics.ARCADE);
        game.add.tween(sprite1.body).to({ y: 400 }, 3000, Phaser.Easing.Linear.None, true);
    },
    update: function () { return game.physics.arcade.overlap(sprite1, sprite2, overlapHandler, null, _this); },
    render: function () {
        game.debug.body(sprite1);
        game.debug.body(sprite2);
    }
});
function overlapHandler(obj1, obj2) {
    game.stage.backgroundColor = "#992d2d";
    obj2.kill();
}
