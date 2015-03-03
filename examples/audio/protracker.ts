
// HUH? Global?
declare var Protracker: any;

var mods: any = [];
var current: Phaser.Sound = <Phaser.Sound>(<any> -1);

var vumeter: any = [];
var channels: any = [];

var currentModule: any;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.load.script("protracker", "_plugins/ProTracker.js");
        game.load.image("vu", "assets/sprites/vu.png");
        game.load.image("logo", "assets/sprites/soundtracker.png");
        game.load.image("bg", "assets/skies/sky2.png");
        game.load.image("vulkaiser", "assets/pics/vulkaiser_red.png");
        game.load.binary("shampoo", "assets/audio/protracker/shampoo.mod", modLoaded, this);
        game.load.binary("macrocosm", "assets/audio/protracker/macrocosm.mod", modLoaded, this);
        game.load.binary("impulse", "assets/audio/protracker/act_of_impulse.mod", modLoaded, this);
        game.load.binary("enigma", "assets/audio/protracker/enigma.mod", modLoaded, this);
        game.load.binary("elysium", "assets/audio/protracker/elysium.mod", modLoaded, this);
        game.load.binary("stardust", "assets/audio/protracker/sd-ingame1.mod", modLoaded, this);
        game.load.binary("globaltrash", "assets/audio/protracker/global_trash_3_v2.mod", modLoaded, this);
    }, 

    create: () => {
        game.add.sprite(0, 0, "bg");
        game.add.sprite(500, 32, "logo");
        game.add.sprite(580, 371, "vulkaiser");
        var i: number;
        var y: number = 200;
        for (i = 0; i < 4; i++) {
            vumeter[i] = game.add.sprite(400, y, "vu");
             y += 50;
        }

        currentModule = new Protracker();
        currentModule.onReady = () => currentModule.play();
        game.input.onDown.add(load_next_currentModule, this);
    }, 

    update: () => {
        //  currentModule.sample = array of Objects containing informations about a played sample
        for (var i: number = 0; i < vumeter.length; i++) {
            if (currentModule.channel[i]) {
                var smp_index = currentModule.channel[i].sample;
                channels[i] = { 
                    sample_index:smp_index,
                    sample_name:currentModule.sample[smp_index].name 
                };
                var w: number = Math.round(currentModule.vu[i] * 1200);
                //you have to check that width is > 0 !
                vumeter[i].width = w > 0 ? w : 1;
            }
        }
    }, 

    render: () => {
        for (var i: number = 0, y: number = 32; i < vumeter.length; i++, y += 32) {
            if (channels[i]) {
                game.debug.text("Channel #" + i + " : sample " + channels[i].sample_index + "  " + channels[i].sample_name, 16,y);
                game.debug.text("vu" + i + ":" + currentModule.vu[i], 16, 350+y);
            }
        }

        game.debug.text("Position: " + currentModule.position, 16, 160);
        game.debug.text("Pattern: " + currentModule.row, 16, 192);
        game.debug.text("BPM: " + currentModule.bpm, 16, 224);
        game.debug.text("Speed: " + currentModule.speed, 16, 256);
        game.debug.text("Name: " + currentModule.title, 16, 288);
        game.debug.text("Signature: " + currentModule.signature, 16, 320);
    }
});


function modLoaded(key: number, data: any) {
    mods.push(key);
    var buffer = new Uint8Array(data);
    return buffer;
}

function load_next_currentModule() {
    (<any> current) == (<any> mods.length - 1) ? current = <Phaser.Sound>(<any>0) : current = (<any>current) + 1;

    currentModule.stop();
    currentModule.clearsong();

    currentModule.buffer = game.cache.getBinary((<any> mods)[(<any>current)]);
    currentModule.parse();

    // BUG if width==0
    for (var i:number=0; i<vumeter.length; i++) { 
        vumeter[i].width=1; 
    }
}
