
var i: number;
var r: Phaser.Rectangle;
var bmd: Phaser.BitmapData;
var bmdDest: Phaser.BitmapData;
var colors: any[];

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    create: () => {
        bmd = game.make.bitmapData(game.width, game.height);
        bmdDest = game.make.bitmapData(game.width, game.height);
        bmdDest.addToWorld();

        colors = Phaser.Color.HSVColorWheel();
        game.input.addMoveCallback(fastCopyPaint, this);

        i = 0;
        r = new Phaser.Rectangle(0, 0, game.width, game.height);

        //  r = the rotation, s = the scale
        var data: any = { r: 0, s: 0.5 };
        //  Change the tween duration, ease type, values, etc for different effects
        game.add.tween(data).to( { r: 360, s: 2 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);
    }, 
    
    update: () => {
        //  Change the 0.1 to something like 0.5 for a shorter "trail"
        bmdDest.fill(0, 0, 0, 0.1);
        //  Change the 0.7 at the end, it"s the alpha value, lower it for a softer effect
        bmdDest.copy(bmd, 0, 0);
    } 
});

function fastCopyPaint(pointer: Phaser.Pointer, x: number, y: number) {

    if (pointer.isDown) {
        //  Change the 4 - the width of the pen, to anything you like
        bmd.circle(x, y, 4, colors[i].rgba);
        i = (<any> game.math).wrapValue(i, 1, 359);
    }

}
