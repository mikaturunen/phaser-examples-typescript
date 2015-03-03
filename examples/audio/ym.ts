
// Throwing a type on the fly to make typing easier
interface MusicMeta {
    name: string;
    author: string;
    file: string;
}

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { 
    preload: () => {
        // load our YM plugin
        game.load.script('YM', '_plugins/YM.js');

        game.load.image('logo', 'assets/demoscene/atari.png');
        game.load.image('bg', 'assets/skies/sky2.png');

        // load all songs
        musics.forEach(music => game.load.binary(music.name, music.file));
    }, 

    // Defining create in a separate function as it's quite big to keep everything fairly readable
    create: create, 

    // Defining update in a separate function as it's quite big to keep everything fairly readable
    update: update, 

    render: () => {
        // some info can be get from the ym instance
        game.debug.text('Title  : ' + ym.info.title, 16, 24);
        game.debug.text('Author : ' + ym.info.author, 16, 40);
        game.debug.text('Comment: ' + ym.info.comment, 16, 56);

        game.debug.text('vu1: ' + ym.vu[0], 16, 72);
        game.debug.text('vu2: ' + ym.vu[1], 16, 88);
        game.debug.text('vu3: ' + ym.vu[2], 16, 104);
    } 
});

// If I'm not feeling too lazy, I could type most of these
var musicIndex: any = null;
var ym: any;
var oldValues: any;
var values: any;
var vu1: any;
var vu2: any;
var vu3: any;
var moveData: any;
var vuGroup: any;
var musicListGroup: any;
var selector: any;
var currentPlayingSelector: any;
var cursors: any;
var time: any;
var spacebar: any;
// define a list of songs
var musics: MusicMeta[] = [];

musics = [
    {
        name: 'A prehistoric tale 7',
        author: 'Madmax',
        file: 'assets/audio/ym/A_Prehistoric_Tale_7.ym'
    },

    {
        name: 'Copperkaahbaahnaah',
        author: 'Big Alec',
        file: 'assets/audio/ym/big_alec-copperkaahbaahnaah.ym'
    },

    {
        name: 'Thundercats',
        author: 'David Whittaker',
        file: 'assets/audio/ym/david_whittaker-thundercats.ym'
    },

    {
        name: 'Giga Dist',
        author: 'Count0',
        file: 'assets/audio/ym/count0-giga_dist.ym'
    },

    {
        name: 'Comic Bakery',
        author: 'Madmax',
        file: 'assets/audio/ym/mad_max-comic_bakery.ym'
    },

    {
        name: 'Do you speak russian',
        author: 'Jess',
        file: 'assets/audio/ym/jess-do_you_speak_russian.ym'
    },

    {
        name: 'Turrican1 1',
        author: 'Madmax',
        file: 'assets/audio/ym/mad_max-turrican1-1.ym'
    },

    {
        name: 'Wings of death 1',
        author: 'Madmax',
        file: 'assets/audio/ym/mad_max-wings_of_death1.ym'
    }
];

function moveSelector (index) {
    selector.y = index * 26;
}

function changeSong (index) {

    // load song data from game cache
    var data =  game.cache.getBinary(musics[index].name);

    // console.log(data);

    if (!ym) {
        // create our YM instance
        ym = new YM(data);
    } else {
        // stop the song, prepare with new data
        ym.stop();
        ym.clearsong();
        ym.parse(data);
    }

    // used for display of the vu meter
    oldValues = [ 0, 0, 0 ];
    values = [ 0, 0, 0 ];
    // ATARI rulez ;)
    ym.play();
    // move "current playing" selector
    // currentPlayingSelector.y = (index * 25);
    currentPlayingSelector.y = selector.y;
}

// draw one vu meter
// + I'm extremely lazy, typing to any. Sorry.
function buildVu (vu: any, colorbg: any, color: any, width: any) {

    var height = 75,
        offsetY = (game.world.width - width) / 2;

    vu.clear();
    vu.beginFill(colorbg, 1);
    vu.drawRect(0, 0, game.world.width, height);

    vu.beginFill(color, 1);
    vu.drawRect(offsetY, 0, width, height);
    vu.drawRect(offsetY - 10, 0, 5, height);
    vu.drawRect(offsetY - 20, 0, 3, height);

    vu.drawRect(width + offsetY + 5, 0, 5, height);
    vu.drawRect(width + offsetY + 18, 0, 3, height);

    vu.beginFill(0, 0.3);
    vu.drawRect(0, height - 25, game.world.width, 25);
}

function update() {

    // max vu meter width
    var max = game.world.width / 1.5;

    // smooth the vu meter real values
    for (var i = 0; i <= 2; i++)
    {
        if (ym.vu[i] > 1) {
            values[i] = ym.vu[i] * (max / 40);
        } else {
            values[i] -= 4;

            if (values[i] < 1) {
                values[i] = 0;
            }
        }
    }

    // draw the vu meter for each channel
    buildVu(vu3, 0xab124f, 0xe9128d, values[0]);
    buildVu(vu2, 0x8d126e, 0xca12ab, values[1]);
    buildVu(vu1, 0x6e128d, 0xab12ca, values[2]);

    // vu meter moves
    [vu1, vu2, vu3].forEach((vu: any, n: any) => {
        var p: any;

        if (vu.movePosIndex >= moveData.length) {
            vu.movePosIndex = 0;
        }

        p =  moveData[vu.movePosIndex];

        vu.y = p.y;

        vu.movePosIndex++;

    });

    // keep track of old vu meter values for next iteration
    for (var i = 0; i <= 2; i++) {
        oldValues[i] = ym.vu[i];
    }

    // handle cursors for song selection
    if (game.time.time - time > 200) {
        if (cursors.up.isDown && musicIndex > 0) {
            musicIndex -= 1;
            moveSelector(musicIndex);
            time = game.time.time;

        } else if (cursors.down.isDown && musicIndex < musics.length - 1) {
            musicIndex += 1;
            moveSelector(musicIndex);
            time = game.time.time;
        } else if (spacebar.isDown) {
            changeSong(musicIndex);
            time = game.time.time;
        }
    }
}
