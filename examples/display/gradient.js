var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.stage.backgroundColor = "#0c9fc7";
        var out = [];
        var bmd = game.add.bitmapData(800, 600);
        bmd.addToWorld();
        var y = 0;
        for (var i = 0; i < 30; i++) {
            var c = Phaser.Color.interpolateColor(0x66d973, 0x40b54d, 30, i);
            bmd.rect(0, y, 800, y + 2, Phaser.Color.getWebRGB(c));
            out.push(Phaser.Color.getWebRGB(c));
            y += 2;
        }
        for (var i = 0; i < 60; i++) {
            var c = Phaser.Color.interpolateColor(0x40b54d, 0x1d962b, 60, i);
            bmd.rect(0, y, 800, y + 2, Phaser.Color.getWebRGB(c));
            out.push(Phaser.Color.getWebRGB(c));
            y += 2;
        }
        console.log(JSON.stringify(out));
    }
});
