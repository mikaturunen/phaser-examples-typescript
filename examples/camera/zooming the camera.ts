
var cameraCursors: Phaser.CursorKeys;
var zooming = false;
var zoomAmount = 0;
var size: Phaser.Rectangle = new Phaser.Rectangle(0, 0, 0, 0);

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.load.image("backdrop", "assets/pics/remember-me.jpg");
        game.load.image("card", "assets/sprites/mana_card.png");
    }, 

    create: () => {
        //  1920 x 1200 (960 x 600)
        game.world.setBounds(-960, -600, 1920, 1200);

        size.setTo(-960, -600, 1920, 1200);

        game.add.sprite(-960, -600, "backdrop");
        cameraCursors = game.input.keyboard.createCursorKeys();

        //  world center is 0x0, top-left is -960x-600
        game.camera.focusOnXY(-960, -600);

        game.input.onDown.add(startZoom, this);
        game.input.onUp.add(() => (zooming = false), this);
    }, 

    update: () => {
        if (zooming) {
            game.camera.scale.x += zoomAmount;
            game.camera.scale.y += zoomAmount;

            game.camera.bounds.x = size.x * game.camera.scale.x;
            game.camera.bounds.y = size.y * game.camera.scale.y;
            game.camera.bounds.width = size.width * game.camera.scale.x;
            game.camera.bounds.height = size.height * game.camera.scale.y;

            console.log(game.camera.view);
        }

        if (cameraCursors.up.isDown) {
            game.camera.y -= 4;
        } else if (cameraCursors.down.isDown) {
            game.camera.y += 4;
        }

        if (cameraCursors.left.isDown) {
            game.camera.x -= 4;
        } else if (cameraCursors.right.isDown) {
            game.camera.x += 4;
        }
    }
});

function startZoom(pointer: Phaser.Pointer) {

    zooming = true;

    if (pointer.button === Phaser.Mouse.LEFT_BUTTON) {
        zoomAmount = 0.005;
    } else {
        zoomAmount = -0.005;
    }

}
