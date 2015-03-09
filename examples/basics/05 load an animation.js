var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () { return game.load.atlasJSONHash("bot", "assets/sprites/running_bot.png", "assets/sprites/running_bot.json"); },
    create: function () {
        var bot = game.add.sprite(200, 200, "bot");
        bot.animations.add("run");
        bot.animations.play("run", 15, true);
    }
});
