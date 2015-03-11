var _this = this;
var ufo;
var Keys = Phaser.Keyboard;
var speed = 4;
var style = "default";
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("ground", "assets/tests/ground-2x.png");
        game.load.image("river", "assets/tests/river-2x.png");
        game.load.image("sky", "assets/tests/sky-2x.png");
        game.load.image("cloud0", "assets/tests/cloud-big-2x.png");
        game.load.image("cloud1", "assets/tests/cloud-narrow-2x.png");
        game.load.image("cloud2", "assets/tests/cloud-small-2x.png");
        game.load.image("ufo", "assets/sprites/ufo.png");
        game.load.image("baddie", "assets/sprites/space-baddie.png");
        game.load.spritesheet("button", "assets/buttons/follow-style-button.png", 224, 70);
    },
    create: function () {
        game.world.setBounds(0, 0, 1400, 1400);
        for (var i = 0; i < 10; i++) {
            game.add.sprite(game.world.randomX, game.world.randomY, "baddie");
        }
        game.add.tileSprite(0, 0, 1400, 600, "sky");
        game.add.sprite(0, 360, "ground");
        game.add.sprite(0, 400, "river");
        game.add.sprite(200, 120, "cloud0");
        game.add.sprite(-60, 120, "cloud1");
        game.add.sprite(900, 170, "cloud2");
        ufo = game.add.sprite(300, 240, "ufo");
        ufo.anchor.setTo(0.5, 0.5);
        game.camera.follow(ufo);
        game.add.button(6, 40, "button", lockonFollow, _this, 0, 0, 0);
        game.add.button(6, 120, "button", platformerFollow, _this, 1, 1, 1);
        game.add.button(6, 200, "button", topdownFollow, _this, 2, 2, 2);
        game.add.button(6, 280, "button", topdownTightFollow, _this, 3, 3, 3);
    },
    update: function () {
        if (game.input.keyboard.isDown(Keys.LEFT)) {
            ufo.x -= speed;
            ufo.angle = -15;
        }
        else if (game.input.keyboard.isDown(Keys.RIGHT)) {
            ufo.x += speed;
            ufo.angle = 15;
        }
        else if (game.input.keyboard.isDown(Keys.UP)) {
            ufo.y -= speed;
        }
        else if (game.input.keyboard.isDown(Keys.DOWN)) {
            ufo.y += speed;
        }
        else {
            ufo.angle = 0;
        }
    },
    render: function () {
        game.debug.text("Click buttons to switch follow styles", 32, 32);
        game.debug.text("Current style: " + style, 32, 64);
    }
});
function lockonFollow() {
    game.camera.follow(ufo, Phaser.Camera.FOLLOW_LOCKON);
    style = "STYLE_LOCKON";
}
function platformerFollow() {
    game.camera.follow(ufo, Phaser.Camera.FOLLOW_PLATFORMER);
    style = "STYLE_PLATFORMER";
}
function topdownFollow() {
    game.camera.follow(ufo, Phaser.Camera.FOLLOW_TOPDOWN);
    style = "STYLE_TOPDOWN";
}
function topdownTightFollow() {
    game.camera.follow(ufo, Phaser.Camera.FOLLOW_TOPDOWN_TIGHT);
    style = "STYLE_TOPDOWN_TIGHT";
}
