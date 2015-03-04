var _this = this;
var sprite;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () { return game.load.image("ilkke", "assets/sprites/atari800xl.png"); },
    create: function () {
        game.stage.backgroundColor = "#2d2d2d";
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 100;
        sprite = game.add.sprite(100, 96, "ilkke");
        game.physics.arcade.enable(sprite);
        sprite.body.collideWorldBounds = true;
        sprite.body.velocity.x = 200;
        sprite.body.bounce.set(0.9);
        sprite.inputEnabled = true;
        sprite.input.enableDrag();
        sprite.events.onDragStart.add(startDrag, _this);
        sprite.events.onDragStop.add(stopDrag, _this);
        game.add.text(32, 32, "Drag and release the sprite", { font: "16px Arial", fill: "#ffffff" });
    }
});
function startDrag() {
    sprite.body.moves = false;
}
function stopDrag() {
    sprite.body.moves = true;
}
