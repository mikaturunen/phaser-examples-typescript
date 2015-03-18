
var trailMushroom: Phaser.Sprite;
var trailTexture: Phaser.RenderTexture;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
	preload: () => game.load.image("mushroom", "assets/sprites/mushroom2.png"), 

	create: () => {
		//	Here we"ll create a renderTexture the same size as our game
		trailTexture = game.add.renderTexture(800, 600, "mousetrail");

		//	This is the sprite that will be drawn to the texture
		//	Note that we "make" it, not "add" it, as we don"t want it on the display list
		trailMushroom = game.make.sprite(0, 0, "mushroom");
		trailMushroom.anchor.set(0.5);

		//	This is the sprite that is drawn to the display. We"ve given it the renderTexture as its texture.
		game.add.sprite(0, 0, texture);
	}, 

	update: () => {
		if (!game.input.activePointer.position.isZero()) {
			//	Here we draw the mushroom sprite to the renderTexture at the pointer coordinates.
			//	The "false" parameter 2nd from the end tells it not to clear itself, causing the trail effect you see.
			//	The final "true" parameter tells it to render sprites even with visible false set.
			texture.render(trailMushroom, game.input.activePointer.position, false);
		}
	} 
});
