var bmd;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () { return game.load.image("crystal", "assets/pics/cougar_dragonsun.png"); },
    create: function () {
        game.world.setBounds(-200000, -200000, 400000, 400000);
        console.log(game.world.bounds);
        console.log(game.world.x);
        console.log(game.world.y);
    }
});
