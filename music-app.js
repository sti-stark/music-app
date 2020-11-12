const {
    crearCancion,
    reedsong,
    editartist,
    removSong,
    orderSongsByTitle,
    writesongs,
    leersong
} = require('./functions');

const yargs = require('yargs');

//orderSongsByTitle(leersong); //?¿
//console.log(leersong('./songs.json')); //OK
//removSong('Cliffs Of Dover'); //OK
//editartist('Little Charmer','Elvis Presley'); //OK
//reedsong('Cliffs Of Dover'); //OK
//crearCancion('ACDC','Shot in the dark'); //OK

yargs.command({
    command: 'add',
    describe: 'añadir canción',
    builder: {
        option: {
            alias: 't',
            describe: 'title',
            demandOption: true,
            type: 'string'
        },
        option: {
            alias: 'a',
            describe: 'artist',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        crearCancion(argv.title, argv.artist)
    }
})

yargs.command({
    command: 'r',
    describe: 'read song',
    builder: {
        option: {
            describe: 'title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        reedsong(argv.title);
    }
})

yargs.parse()