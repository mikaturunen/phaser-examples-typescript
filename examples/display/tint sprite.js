var _this = this;
var tintPic;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () { return game.load.image("pic", "assets/pics/barbarian_loading.png"); },
    create: function () {
        tintPic = game.add.sprite(game.world.centerX, game.world.centerY, "pic");
        tintPic.anchor.set(0.5);
        game.time.events.loop(Phaser.Timer.SECOND * 2, function () {
            tintPic.tint = Math.random() * 0xffffff;
        }, _this);
    }
});
