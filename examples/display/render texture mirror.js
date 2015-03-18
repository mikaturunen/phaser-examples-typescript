var mirrorBall;
var texture;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () { return game.load.image("ball", "assets/sprites/pangball.png"); },
    create: function () {
        texture = game.add.renderTexture(800, 600, "mousetrail");
        mirrorBall = game.make.sprite(0, 0, "ball");
        mirrorBall.anchor.set(0.5);
        game.add.sprite(0, 0, texture);
    },
    update: function () {
        if (!game.input.activePointer.position.isZero()) {
            texture.renderXY(mirrorBall, game.input.activePointer.x, game.input.activePointer.y, true);
            texture.renderXY(mirrorBall, game.input.activePointer.x, 600 - game.input.activePointer.y, false);
        }
    }
});
