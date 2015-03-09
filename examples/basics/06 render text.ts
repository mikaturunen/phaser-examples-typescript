
var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    create: () => {
        var text: string = "- phaser -\n with a sprinkle of \n pixi dust.";
        
        var style: any = { 
            font: "65px Arial", 
            fill: "#ff0044", 
            align: "center" 
        };
        
        var t: Phaser.Text = game.add.text(game.world.centerX-300, 0, text, style);
    } 
});
