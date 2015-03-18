
var starfieldStar: Phaser.Sprite;
var texture1: Phaser.RenderTexture;
var texture2: Phaser.RenderTexture;
var texture3: Phaser.RenderTexture;
var starFieldStars: any[] = [];

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    preload: () => game.load.image("star", "assets/sprites/bullet.png"), 

    create: () => {
        //  This is the sprite that will be drawn to the texture
        //  Note that we "make" it, not "add" it, as we don"t want it on the display list
        starfieldStar = game.make.sprite(0, 0, "star");

        //  For this effect we"ll create a vertical scrolling starfield with 300 stars split across 3 layers.
        //  This will use only 3 textures / sprites in total.
        texture1 = game.add.renderTexture(800, 600, "texture1");
        texture2 = game.add.renderTexture(800, 600, "texture2");
        texture3 = game.add.renderTexture(800, 600, "texture3");
        
        game.add.sprite(0, 0, texture1);
        game.add.sprite(0, 0, texture2);
        game.add.sprite(0, 0, texture3);

        var t = texture1;
        var s = 4;

        //  100 sprites per layer
        for (var i = 0; i < 300; i++) {
            if (i === 100) {
                //  With each 100 stars we ramp up the speed a little and swap to the next texture
                s = 6;
                t = texture2;
            } else if (i === 200) {
                s = 7;
                t = texture3;
            }

            starFieldStars.push({ x: game.world.randomX, y: game.world.randomY, speed: s, texture: t });
        }
    }, 

    update: () => {
        for (var i = 0; i < 300; i++) {
            //  Update the stars y position based on its speed
            starFieldStars[i].y += starFieldStars[i].speed;

            if (starFieldStars[i].y > 600) {
                //  Off the bottom of the screen? Then wrap around to the top
                starFieldStars[i].x = game.world.randomX;
                starFieldStars[i].y = -32;
            }

            if (i == 0 || i == 100 || i == 200) {
                //  If it"s the first star of the layer then we clear the texture
                starFieldStars[i].texture.renderXY(star, starFieldStars[i].x, starFieldStars[i].y, true);
            } else {
                //  Otherwise just draw the star sprite where we need it
                starFieldStars[i].texture.renderXY(star, starFieldStars[i].x, starFieldStars[i].y, false);
            }
        }
    } 
});
