var bmd;
var waveSize = 8;
var wavePixelChunk = 2;
var waveData;
var waveDataCounter;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () { return game.load.image("ball", "assets/sprites/shinyball.png"); },
    create: function () {
        bmd = game.add.bitmapData(32, 64);
        for (var i = 0; i < 100; i++) {
            game.add.sprite(game.world.randomX, game.world.randomY, bmd);
        }
        waveData = game.math.sinCosGenerator(32, 8, 8, 2);
    },
    update: function () {
        bmd.cls();
        updateWobblyBall();
    }
});
function updateWobblyBall() {
    var s = 0;
    var copyRect = { x: 0, y: 0, w: wavePixelChunk, h: 32 };
    var copyPoint = { x: 0, y: 0 };
    for (var x = 0; x < 32; x += wavePixelChunk) {
        copyPoint.x = x;
        copyPoint.y = waveSize + (waveSize / 2) + waveData.sin[s];
        bmd.context.drawImage(game.cache.getImage("ball"), copyRect.x, copyRect.y, copyRect.w, copyRect.h, copyPoint.x, copyPoint.y, copyRect.w, copyRect.h);
        copyRect.x += wavePixelChunk;
        s++;
    }
    bmd.render();
    game.math.shift(waveData.sin);
    waveDataCounter++;
    if (waveDataCounter == waveData.length) {
        waveDataCounter = 0;
    }
}
