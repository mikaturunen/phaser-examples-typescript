var data;
var rasters;
var pos = [];
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', {
    preload: function () { return game.load.image('raster', 'assets/demoscene/raster-blue.png'); },
    create: function () {
        data = game.make.tween({ y: 0 }).to({ y: 300 }, 1000, Phaser.Easing.Sinusoidal.In).yoyo(true).generateData(60);
        rasters = game.add.group();
        var total = 8;
        var offset = 4;
        for (var i = 0; i < total; i++) {
            var raster = rasters.create(0, 0, 'raster');
            raster.width = 800;
            raster.alpha = (i + 1) * (1 / total);
            pos.push(i * offset);
        }
    },
    update: function () {
        rasters.resetCursor();
        for (var i = 0; i < rasters.total; i++) {
            pos[i]++;
            if (pos[i] === data.length) {
                pos[i] = 0;
            }
            rasters.cursor.y = 100 + data[pos[i]].y;
            rasters.next();
        }
    }
});
