var bot;
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () {
        game.load.atlasJSONHash("bot", "assets/sprites/running_bot.png", "assets/sprites/running_bot.json");
    },
    create: function () {
        bot = game.add.sprite(200, 200, "bot");
        bot.animations.add("run");
        bot.animations.play("run", 15, true);
    },
    update: function () {
        bot.x -= 2;
        if (bot.x < -bot.width) {
            bot.x = game.world.width;
        }
    }
});
