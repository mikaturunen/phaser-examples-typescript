
var mirrorBall Phaser.Sprite;
var texture: Phaser.RenderTexture;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
	preload: () => game.load.image("ball", "assets/sprites/pangball.png"), 

	create: () => {
		//	Here we"ll create a renderTexture the same size as our game
		texture = game.add.renderTexture(800, 600, "mousetrail");

		//	This is the sprite that will be drawn to the texture
		//	Note that we "make" it, not "add" it, as we don"t want it on the display list.
		mirrorBall = game.make.sprite(0, 0, "ball");
		mirrorBall.anchor.set(0.5);

		//	This is the sprite that is drawn to the display. We"ve given it the renderTexture as its texture.
		game.add.sprite(0, 0, texture);
	}, 

	update: () => {
		if (!game.input.activePointer.position.isZero()) {
			//	This time we"ll draw the ball sprite twice, in a mirror effect
			texture.renderXY(mirrorBall, game.input.activePointer.x, game.input.activePointer.y, true);
			texture.renderXY(mirrorBall, game.input.activePointer.x, 600 - game.input.activePointer.y, false);
		}
	} 
});
