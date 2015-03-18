
var tintPic: Phaser.Sprite;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => game.load.image("pic", "assets/pics/barbarian_loading.png"), 

    create: () => {
        tintPic = game.add.sprite(game.world.centerX, game.world.centerY, "pic");
        tintPic.anchor.set(0.5);

        game.time.events.loop(Phaser.Timer.SECOND * 2, () => {
            tintPic.tint = Math.random() * 0xffffff;
        }, this);
    } 
});
