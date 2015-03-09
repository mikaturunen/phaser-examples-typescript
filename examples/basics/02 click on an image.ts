
var text: Phaser.Text;
var counter = 0;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", { 
    //  You can fill the preloader with as many assets as your game requires
    //  Here we are loading an image. The first parameter is the unique
    //  string by which we"ll identify the image later in our code.
    //  The second parameter is the URL of the image (relative)
    //  NOTE that I'm using the one liner for the fuction here, you need to expand it to () => { <code> }
    //  just like the update function
    preload: game.load.image("einstein", "assets/pics/ra_einstein.png"), 

    create: () => {
        //  This creates a simple sprite that is using our loaded image and
        //  displays it on-screen and assign it to a variable
        var image = game.add.sprite(game.world.centerX, game.world.centerY, "einstein");

        //  Moves the image anchor to the middle, so it centers inside the game properly
        image.anchor.set(0.5);

        //  Enables all kind of input actions on this image (click, etc)
        image.inputEnabled = true;
        text = game.add.text(250, 16, "", { fill: "#ffffff" });
        image.events.onInputDown.add(listener, this);
    } 
});

function listener () {
    counter++;
    text.text = "You clicked " + counter + " times!";
}
