var bmd;
var innerCircle;
var outerCircle;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    create: function () {
        bmd = game.make.bitmapData(800, 600);
        bmd.addToWorld();
        innerCircle = new Phaser.Circle(200, 200, 100);
        outerCircle = new Phaser.Circle(200, 200, 300);
        game.add.tween(innerCircle).to({ x: 100, y: 100, radius: 1 }, 3000, "Sine.easeInOut", true, 0, -1, true);
    },
    update: function () {
        var grd = bmd.context.createRadialGradient(innerCircle.x, innerCircle.y, innerCircle.radius, outerCircle.x, outerCircle.y, outerCircle.radius);
        grd.addColorStop(0, "#8ED6FF");
        grd.addColorStop(1, "#003BA2");
        bmd.cls();
        bmd.circle(outerCircle.x, outerCircle.y, outerCircle.radius, grd);
    }
});
