var starfieldStar;
var texture1;
var texture2;
var texture3;
var starFieldStars = [];
var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: function () { return game.load.image("star", "assets/sprites/bullet.png"); },
    create: function () {
        starfieldStar = game.make.sprite(0, 0, "star");
        texture1 = game.add.renderTexture(800, 600, "texture1");
        texture2 = game.add.renderTexture(800, 600, "texture2");
        texture3 = game.add.renderTexture(800, 600, "texture3");
        game.add.sprite(0, 0, texture1);
        game.add.sprite(0, 0, texture2);
        game.add.sprite(0, 0, texture3);
        var t = texture1;
        var s = 4;
        for (var i = 0; i < 300; i++) {
            if (i === 100) {
                s = 6;
                t = texture2;
            }
            else if (i === 200) {
                s = 7;
                t = texture3;
            }
            starFieldStars.push({ x: game.world.randomX, y: game.world.randomY, speed: s, texture: t });
        }
    },
    update: function () {
        for (var i = 0; i < 300; i++) {
            starFieldStars[i].y += starFieldStars[i].speed;
            if (starFieldStars[i].y > 600) {
                starFieldStars[i].x = game.world.randomX;
                starFieldStars[i].y = -32;
            }
            if (i == 0 || i == 100 || i == 200) {
                starFieldStars[i].texture.renderXY(starfieldStar, starFieldStars[i].x, starFieldStars[i].y, true);
            }
            else {
                starFieldStars[i].texture.renderXY(starfieldStar, starFieldStars[i].x, starFieldStars[i].y, false);
            }
        }
    }
});
