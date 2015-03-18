
var jellyfish: Phaser.Sprite;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.load.atlas("seacreatures", "assets/sprites/seacreatures_json.png", "assets/sprites/seacreatures_json.json");
        game.load.image("undersea", "assets/pics/undersea.jpg");
        game.load.image("coral", "assets/pics/seabed.png");
    }, 

    create: () => {
        game.add.image(0, 0, "undersea");

        jellyfish = game.add.sprite(370, 200, "seacreatures");

        jellyfish.animations.add("swim", Phaser.Animation.generateFrameNames("blueJellyfish", 0, 32, "", 4), 30, true);
        jellyfish.animations.play("swim");

        game.add.image(0, 466, "coral");

        game.add.tween(jellyfish).to({ y: "100" }, 8000, "Quad.easeInOut", true, 0, 1000, true);

        game.time.events.loop(Phaser.Timer.SECOND * 2, () => jellyfish.tint = Math.random() * 0xffffff, this);
    } 
});
