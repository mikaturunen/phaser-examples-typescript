
var bmd: Phaser.BitmapData;
var loop: Phaser.Sprite;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
	preload: () => {
		game.load.image("back", "assets/pics/swirl1.jpg");
    	game.load.image("loop", "assets/particles/glass.png");	
	}, 

	create: () => {
		//	Our background
		game.add.image(0, 0, "back");

		//	This is the sprite we"re going to be drawing onto the BitmapData
		//	We use game.make because we don"t need it displayed, we just need it to exist
		loop = game.make.sprite(0, 0, "loop");
		loop.anchor.set(0.5);

		//	Note that any properties you set here will be replicated when the Sprite is drawn
		loop.scale.set(0.05);
		loop.alpha = 0.01;

		//	This is the BitmapData we"re going to be drawing to
		bmd = game.add.bitmapData(game.width, game.height);

		//	Black and opaque
		bmd.fill(0, 0, 0, 1);

		bmd.addToWorld();

	    game.input.addMoveCallback(paint, this);

	    game.add.tween(loop.scale).to( { x: 0.75, y: 0.75 }, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
	    game.add.tween(loop).to( { alpha: 0.25 }, 1000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
	}, 

	update: () => {
		loop.rotation += 0.1;
	}
});

function paint(pointer: Phaser.Pointer, x: string, y: string) {
	if (pointer.isDown) {
		// TODO update phaser.d.ts ?
		(<any> bmd).draw(loop, x, y, null, null, "destination-out");
	}
}
