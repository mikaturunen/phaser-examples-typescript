var bmd;
var text;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
    preload: function () { return game.load.image('back', 'assets/pics/swirl1.jpg'); },
    create: function () {
        game.add.image(0, 0, 'back');
        bmd = game.add.bitmapData(game.width, game.height);
        bmd.fill(0, 0, 0, 1);
        bmd.addToWorld();
        text = game.make.text(0, 0, "phaser", { font: "bold 32px Arial", fill: "#ff0044" });
        text.anchor.set(0.5);
        game.add.tween(text.scale).to({ x: 0.5, y: 0.5 }, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
    },
    update: function () {
        bmd.fill(0, 0, 0, 0.05);
        bmd.draw(text, game.world.randomX, game.world.randomY, null, null, 'destination-out');
    }
});
