
var i = 0;
var bmd: Phaser.BitmapData;
var colors: any;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    create: () => {
        bmd = game.add.bitmapData(800, 600);
        game.add.sprite(0, 0, bmd);

        colors = Phaser.Color.HSVColorWheel();

        game.input.addMoveCallback((pointer: Phaser.Pointer, x: number, y: number) => {
            if (pointer.isDown) {
                bmd.circle(x, y, 16, colors[i].rgba);
                i = game.math.wrapValue(i, 1, 359);
            }
        }, this);
    } 
});

