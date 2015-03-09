var _this = this;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
    create: function () {
        game.stage.backgroundColor = '#003663';
        var bmd = game.add.bitmapData(32, 32);
        var grd = bmd.context.createLinearGradient(0, 0, 0, 32);
        grd.addColorStop(0, '#8ED6FF');
        grd.addColorStop(1, '#004CB3');
        bmd.context.fillStyle = grd;
        bmd.context.fillRect(0, 0, 32, 32);
        game.cache.addBitmapData('blueShade', bmd);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(8, 8, game.cache.getBitmapData('blueShade'));
        createBox();
        game.time.events.repeat(Phaser.Timer.SECOND, 20, createBox, _this);
        game.input.onDown.add(updateBitmapDataTexture, _this);
    },
    render: function () { return game.debug.text('Click to regenerate the texture', 48, 30); }
});
function createBox() {
    var sprite = game.add.sprite(game.world.randomX, game.world.randomY, game.cache.getBitmapData('blueShade'));
    game.physics.arcade.enable(sprite);
    sprite.body.collideWorldBounds = true;
    sprite.body.bounce.set(1);
    sprite.body.velocity.x = game.rnd.realInRange(-200, 200);
    sprite.body.velocity.y = game.rnd.realInRange(-200, 200);
}
function updateBitmapDataTexture() {
    var bmd = game.cache.getBitmapData('blueShade');
    var grd = bmd.context.createLinearGradient(0, 0, 0, 32);
    grd.addColorStop(0, generateHexColor());
    grd.addColorStop(1, generateHexColor());
    bmd.context.fillStyle = grd;
    bmd.context.fillRect(0, 0, 32, 32);
    bmd.dirty = true;
}
function generateHexColor() {
    return '#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16);
}
