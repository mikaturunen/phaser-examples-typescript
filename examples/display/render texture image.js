var textureBall;
var texture;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () { return game.load.image("ball", "assets/sprites/spinObj_01.png"); },
    create: function () {
        textureBall = game.make.sprite(0, 0, "ball");
        texture = game.add.renderTexture(game.width, game.height);
        game.add.sprite(0, 0, texture);
    },
    update: function () {
        if (!game.input.activePointer.position.isZero()) {
            texture.renderXY(ball, game.input.activePointer.x, game.input.activePointer.y, true);
        }
    }
});
