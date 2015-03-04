var _this = this;
var sprite;
var group;
var simpleSortDirectionCursors;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.image("phaser", "assets/sprites/phaser-dude.png");
        game.load.spritesheet("veggies", "assets/sprites/fruitnveg32wh37.png", 32, 32);
    },
    create: function () {
        game.world.setBounds(0, 0, 2000, 1200);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = "#2d2d2d";
        sprite = game.add.sprite(1960, 200, "phaser");
        game.physics.arcade.sortDirection = Phaser.Physics.Arcade.RIGHT_LEFT;
        game.physics.arcade.enable(sprite);
        group = game.add.physicsGroup(Phaser.Physics.ARCADE);
        for (var i = 0; i < 500; i++) {
            var c = group.create(game.rnd.integerInRange(200, 1900), game.rnd.integerInRange(0, 1100), "veggies", game.rnd.integerInRange(0, 35));
            c.name = "veg" + i;
            c.body.immovable = true;
        }
        for (var i = 0; i < 20; i++) {
            var c = group.create(game.rnd.integerInRange(100, 770), game.rnd.integerInRange(0, 570), "veggies", 17);
            c.body.immovable = true;
        }
        game.camera.follow(sprite);
        simpleSortDirectionCursors = game.input.keyboard.createCursorKeys();
    },
    update: function () {
        game.physics.arcade.collide(sprite, group, simpleSortDirectionCursorsCollisionHandler, null, _this);
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;
        if (simpleSortDirectionCursors.left.isDown) {
            sprite.body.velocity.x = -200;
        }
        else if (simpleSortDirectionCursors.right.isDown) {
            sprite.body.velocity.x = 200;
        }
        if (simpleSortDirectionCursors.up.isDown) {
            sprite.body.velocity.y = -200;
        }
        else if (simpleSortDirectionCursors.down.isDown) {
            sprite.body.velocity.y = 200;
        }
    }
});
function simpleSortDirectionCursorsCollisionHandler(player, veg) {
    if (veg.frame === 17) {
        veg.kill();
    }
}
