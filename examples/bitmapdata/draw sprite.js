var _this = this;
var bmd;
var loop;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () { return game.load.image("loop", "assets/sprites/loop.png"); },
    create: function () {
        loop = game.make.sprite(0, 0, "loop");
        loop.anchor.set(0.5);
        bmd = game.add.bitmapData(game.width, game.height);
        bmd.addToWorld();
        bmd.smoothed = false;
        game.input.addMoveCallback(drawSpritePaint, _this);
    },
    update: function () {
        loop.rotation += 0.1;
    }
});
function drawSpritePaint(pointer, x, y) {
    if (pointer.isDown) {
        bmd.draw(loop, x, y);
    }
}
