var _this = this;
var bmd;
var loop;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("back", "assets/pics/swirl1.jpg");
        game.load.image("loop", "assets/particles/glass.png");
    },
    create: function () {
        game.add.image(0, 0, "back");
        loop = game.make.sprite(0, 0, "loop");
        loop.anchor.set(0.5);
        loop.scale.set(0.05);
        loop.alpha = 0.01;
        bmd = game.add.bitmapData(game.width, game.height);
        bmd.fill(0, 0, 0, 1);
        bmd.addToWorld();
        game.input.addMoveCallback(paint, _this);
        game.add.tween(loop.scale).to({ x: 0.75, y: 0.75 }, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
        game.add.tween(loop).to({ alpha: 0.25 }, 1000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
    },
    update: function () {
        loop.rotation += 0.1;
    }
});
function paint(pointer, x, y) {
    if (pointer.isDown) {
        bmd.draw(loop, x, y, null, null, "destination-out");
    }
}
