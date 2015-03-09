var _this = this;
var text;
var counter = 0;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: game.load.image("einstein", "assets/pics/ra_einstein.png"),
    create: function () {
        var image = game.add.sprite(game.world.centerX, game.world.centerY, "einstein");
        image.anchor.set(0.5);
        image.inputEnabled = true;
        text = game.add.text(250, 16, "", { fill: "#ffffff" });
        image.events.onInputDown.add(listener, _this);
    }
});
function listener() {
    counter++;
    text.text = "You clicked " + counter + " times!";
}
