
var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    //  You can fill the preloader with as many assets as your game requires
    //  Here we are loading an image. The first parameter is the unique
    //  string by which we"ll identify the image later in our code.
    //  The second parameter is the URL of the image (relative)
    //  NOTE that I'm using the one liner for the fuction here, you need to expand it to () => { <code> }
    preload: () => game.load.image("einstein", "assets/pics/ra_einstein.png"), 

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    create: () => game.add.sprite(0, 0, "einstein") 
});
