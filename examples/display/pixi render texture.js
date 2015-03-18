var renderTexture;
var renderTexture2;
var currentTexture;
var outputSprite;
var stuffContainer;
var count = 0;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.image("spin1", "assets/sprites/spinObj_01.png");
        game.load.image("spin2", "assets/sprites/spinObj_02.png");
        game.load.image("spin3", "assets/sprites/spinObj_03.png");
        game.load.image("spin4", "assets/sprites/spinObj_04.png");
        game.load.image("spin5", "assets/sprites/spinObj_05.png");
        game.load.image("spin6", "assets/sprites/spinObj_06.png");
        game.load.image("spin7", "assets/sprites/spinObj_07.png");
        game.load.image("spin8", "assets/sprites/spinObj_08.png");
    },
    create: function () {
        renderTexture = game.add.renderTexture(800, 600, "texture1");
        renderTexture2 = game.add.renderTexture(800, 600, "texture2");
        currentTexture = renderTexture;
        outputSprite = game.add.sprite(400, 300, currentTexture);
        outputSprite.anchor.x = 0.5;
        outputSprite.anchor.y = 0.5;
        stuffContainer = game.add.group();
        stuffContainer.x = 800 / 2;
        stuffContainer.y = 600 / 2;
        for (var i = 0; i < 20; i++) {
            var item = stuffContainer.create(Math.random() * 400 - 200, Math.random() * 400 - 200, game.rnd.pick(game.cache.getKeys(Phaser.Cache.IMAGE)));
            item.anchor.setTo(0.5, 0.5);
        }
        count = 0;
    },
    update: function () {
        stuffContainer.addAll("rotation", 0.1);
        count += 0.01;
        var temp = renderTexture;
        renderTexture = renderTexture2;
        renderTexture2 = temp;
        outputSprite.setTexture(renderTexture);
        stuffContainer.rotation -= 0.01;
        outputSprite.scale.x = outputSprite.scale.y = 1 + Math.sin(count) * 0.2;
        renderTexture2.renderXY(game.stage, 0, 0, true);
    }
});
