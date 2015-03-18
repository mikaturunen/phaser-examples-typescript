var trailMushroom;
var trailTexture;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () { return game.load.image("mushroom", "assets/sprites/mushroom2.png"); },
    create: function () {
        trailTexture = game.add.renderTexture(800, 600, "mousetrail");
        trailMushroom = game.make.sprite(0, 0, "mushroom");
        trailMushroom.anchor.set(0.5);
        game.add.sprite(0, 0, texture);
    },
    update: function () {
        if (!game.input.activePointer.position.isZero()) {
            texture.render(trailMushroom, game.input.activePointer.position, false);
        }
    }
});
