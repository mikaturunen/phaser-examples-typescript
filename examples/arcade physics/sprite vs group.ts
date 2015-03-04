
var sprite: Phaser.Sprite;
var group: Phaser.Group;
var spriteVsGroupCursors: Phaser.CursorKeys;

var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => {
        game.load.image("phaser", "assets/sprites/phaser-dude.png");
        game.load.spritesheet("veggies", "assets/sprites/fruitnveg32wh37.png", 32, 32);
    }, 

    create: () => {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.stage.backgroundColor = "#2d2d2d";

        //  This example will check Sprite vs. Group collision

        sprite = game.add.sprite(32, 200, "phaser");
        sprite.name = "phaser-dude";

        game.physics.enable(sprite, Phaser.Physics.ARCADE);
        
        group = game.add.group();
        group.enableBody = true;
        group.physicsBodyType = Phaser.Physics.ARCADE;

        for (var i = 0; i < 50; i++) {
            var c = group.create(game.rnd.integerInRange(100, 770), game.rnd.integerInRange(0, 570), "veggies", game.rnd.integerInRange(0, 35));
            c.name = "veg" + i;
            c.body.immovable = true;
        }

        for (var i = 0; i < 20; i++) {
            //  Here we"ll create some chillis which the player can pick-up. They are still part of the same Group.
            var c = group.create(game.rnd.integerInRange(100, 770), game.rnd.integerInRange(0, 570), "veggies", 17);
            c.name = "chilli" + i;
            c.body.immovable = true;
        }

        spriteVsGroupCursors = game.input.keyboard.createCursorKeys();
    }, 

    update: () => {
        game.physics.arcade.collide(sprite, group, spriteVsGroupCollisionHandler, null, this);

        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;

        if (spriteVsGroupCursors.left.isDown) {
            sprite.body.velocity.x = -200;
        } else if (spriteVsGroupCursors.right.isDown) {
            sprite.body.velocity.x = 200;
        }

        if (spriteVsGroupCursors.up.isDown) {
            sprite.body.velocity.y = -200;
        } else if (spriteVsGroupCursors.down.isDown) {
            sprite.body.velocity.y = 200;
        }
    } 
});

function spriteVsGroupCollisionHandler (player: Phaser.Sprite, veg: Phaser.Sprite) {
    //  If the player collides with the chillis then they get eaten :)
    //  The chilli frame ID is 17
    if (veg.frame == 17) {
        veg.kill();
    }
}

