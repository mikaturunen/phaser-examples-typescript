var _this = this;
var mods = [];
var current = (-1);
var vumeter = [];
var channels = [];
var currentModule;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    preload: function () {
        game.load.script("protracker", "_plugins/ProTracker.js");
        game.load.image("vu", "assets/sprites/vu.png");
        game.load.image("logo", "assets/sprites/soundtracker.png");
        game.load.image("bg", "assets/skies/sky2.png");
        game.load.image("vulkaiser", "assets/pics/vulkaiser_red.png");
        game.load.binary("shampoo", "assets/audio/protracker/shampoo.mod", modLoaded, _this);
        game.load.binary("macrocosm", "assets/audio/protracker/macrocosm.mod", modLoaded, _this);
        game.load.binary("impulse", "assets/audio/protracker/act_of_impulse.mod", modLoaded, _this);
        game.load.binary("enigma", "assets/audio/protracker/enigma.mod", modLoaded, _this);
        game.load.binary("elysium", "assets/audio/protracker/elysium.mod", modLoaded, _this);
        game.load.binary("stardust", "assets/audio/protracker/sd-ingame1.mod", modLoaded, _this);
        game.load.binary("globaltrash", "assets/audio/protracker/global_trash_3_v2.mod", modLoaded, _this);
    },
    create: function () {
        game.add.sprite(0, 0, "bg");
        game.add.sprite(500, 32, "logo");
        game.add.sprite(580, 371, "vulkaiser");
        var i;
        var y = 200;
        for (i = 0; i < 4; i++) {
            vumeter[i] = game.add.sprite(400, y, "vu");
            y += 50;
        }
        currentModule = new Protracker();
        currentModule.onReady = function () { return currentModule.play(); };
        game.input.onDown.add(load_next_currentModule, _this);
    },
    update: function () {
        for (var i = 0; i < vumeter.length; i++) {
            if (currentModule.channel[i]) {
                var smp_index = currentModule.channel[i].sample;
                channels[i] = {
                    sample_index: smp_index,
                    sample_name: currentModule.sample[smp_index].name
                };
                var w = Math.round(currentModule.vu[i] * 1200);
                vumeter[i].width = w > 0 ? w : 1;
            }
        }
    },
    render: function () {
        for (var i = 0, y = 32; i < vumeter.length; i++, y += 32) {
            if (channels[i]) {
                game.debug.text("Channel #" + i + " : sample " + channels[i].sample_index + "  " + channels[i].sample_name, 16, y);
                game.debug.text("vu" + i + ":" + currentModule.vu[i], 16, 350 + y);
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
function modLoaded(key, data) {
    mods.push(key);
    var buffer = new Uint8Array(data);
    return buffer;
}
function load_next_currentModule() {
    current == (mods.length - 1) ? current = 0 : current = current + 1;
    currentModule.stop();
    currentModule.clearsong();
    currentModule.buffer = game.cache.getBinary(mods[current]);
    currentModule.parse();
    for (var i = 0; i < vumeter.length; i++) {
        vumeter[i].width = 1;
    }
}
