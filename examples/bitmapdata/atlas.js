var bmd;
var jellyfish;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () { return game.load.atlas("seacreatures", "assets/sprites/seacreatures_json.png", "assets/sprites/seacreatures_json.json"); },
    create: function () {
        bmd = game.make.bitmapData(800, 600);
        game.add.image(0, 0, bmd);
        jellyfish = game.add.sprite(0, 0, "seacreatures", "blueJellyfish0010");
        jellyfish.animations.add("swim", Phaser.Animation.generateFrameNames("blueJellyfish", 0, 32, "", 4), 30, true);
        jellyfish.animations.play("swim");
    },
    update: function () {
        if (game.input.activePointer.isDown) {
            bmd.draw(jellyfish, game.input.activePointer.position.x, game.input.activePointer.position.y);
        }
    }
});
