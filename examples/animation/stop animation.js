var _this = this;
var greenJellyfish;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.atlas("seacreatures", "assets/sprites/seacreatures_json.png", "assets/sprites/seacreatures_json.json");
        game.load.image("undersea", "assets/pics/undersea.jpg");
        game.load.image("coral", "assets/pics/seabed.png");
    },
    create: function () {
        game.add.image(0, 0, "undersea");
        game.add.sprite(32, 32, "seacreatures", "greenJellyfish0000");
        greenJellyfish = game.add.sprite(330, 100, "seacreatures");
        greenJellyfish.animations.add("swim", Phaser.Animation.generateFrameNames("greenJellyfish", 0, 39, "", 4), 30, true);
        greenJellyfish.animations.play("swim");
        game.add.image(0, 466, "coral");
        game.add.tween(greenJellyfish).to({ y: 250 }, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        game.input.onDown.addOnce(stopAnimation, _this);
    }
});
function stopAnimation() {
    greenJellyfish.animations.stop(null, true);
}
