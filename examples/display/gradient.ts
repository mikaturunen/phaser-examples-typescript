
var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.stage.backgroundColor = "#0c9fc7";

        /**
        * Interpolates the two given colours based on the supplied step and currentStep properties.
        *
        * @method Phaser.Color.interpolateColor
        * @static
        * @param {number} color1 - The first color value.
        * @param {number} color2 - The second color value.
        * @param {number} steps - The number of steps to run the interpolation over.
        * @param {number} currentStep - The currentStep value. If the interpolation will take 100 steps, a currentStep value of 50 would be half-way between the two.
        * @param {number} alpha - The alpha of the returned color.
        * @returns {number} The interpolated color value.
        */
        // interpolateColor: function (color1, color2, steps, currentStep, alpha) {

        var out: any[] = [];

        var bmd: Phaser.BitmapData = game.add.bitmapData(800, 600);
        bmd.addToWorld();

        var y = 0;

        for (var i = 0; i < 30; i++) {
            var c: any = (<any> Phaser.Color).interpolateColor(0x66d973, 0x40b54d, 30, i);
            bmd.rect(0, y, 800, y+2, Phaser.Color.getWebRGB(c));
            out.push(Phaser.Color.getWebRGB(c));
            y += 2;
        }

        for (var i = 0; i < 60; i++) {
            var c: any = (<any> Phaser.Color).interpolateColor(0x40b54d, 0x1d962b, 60, i);
            bmd.rect(0, y, 800, y+2, Phaser.Color.getWebRGB(c));
            out.push(Phaser.Color.getWebRGB(c));
            y += 2;
        }

        console.log(JSON.stringify(out));
    }
});
