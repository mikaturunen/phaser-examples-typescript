
var bmd: Phaser.BitmapData;
var text: Phaser.Text;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => game.load.image("back", "assets/pics/swirl1.jpg"), 

    create: () => {
        //  Our background
        game.add.image(0, 0, "back");

        //  This is the BitmapData we"re going to be drawing to
        bmd = game.add.bitmapData(game.width, game.height);

        //  Black and opaque
        bmd.fill(0, 0, 0, 1);

        bmd.addToWorld();

        //  Our text object
        text = game.make.text(0, 0, "phaser", { font: "bold 32px Arial", fill: "#ff0044" });
        // tODO update phaser.d.ts ?
        (<any> text).anchor.set(0.5);

        game.add.tween(text.scale).to( { x: 0.5, y: 0.5 }, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);

        //  Uncomment for a pretty sweet effect :)
        // game.time.events.loop(Phaser.Timer.SECOND * 4, function() { bmd.cls(); }, this);
    }, 

    update: () => {
        bmd.fill(0, 0, 0, 0.05);

        //  Un-comment to see the rotation in action
        // text.rotation += 0.05;

        // TODO update phaser.d.ts
        (<any> bmd).draw(text, game.world.randomX, game.world.randomY, null, null, "destination-out");
    } 
});
