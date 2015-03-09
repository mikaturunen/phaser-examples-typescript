var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.image("pic", "assets/pics/questar.png");
        game.load.image("mask", "assets/pics/mask-test2.png");
    },
    create: function () {
        game.stage.backgroundColor = 0x4d4d4d;
        game.add.text(64, 10, "Source image", { font: "16px Arial", fill: "#ffffff" });
        game.add.image(64, 32, "pic");
        game.add.text(400, 10, "Alpha mask", { font: "16px Arial", fill: "#ffffff" });
        game.add.image(400, 32, "mask");
        var bmd = game.make.bitmapData(320, 256);
        bmd.alphaMask("pic", "mask");
        game.add.image(game.world.centerX, 320, bmd).anchor.set(0.5, 0);
    }
});
