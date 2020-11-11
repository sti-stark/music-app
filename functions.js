
/*const Music = [
    {
        title: 'The well',
        artist:'Marcus King'
    },

    {
        title: 'Little Charmer',
        artist:'Frank Gambale'
    },

    {
        title: 'Cliffs Of Dover',
        artist:'Eric Johnson'
    }

]*/

const fs = require('fs')

const leersong = (fichero)=>{
    try{
        const buffer = fs.readFileSync(fichero);
        const datosString = buffer.toString();
        return JSON.parse(datosString);
    } catch (error) {
        console.log(error);
        return []
    }
}

const writesongs =(fichero,song)=>{
    const textoJSON = JSON.stringify(song);
    fs.writeFileSync(fichero,textoJSON);
}

const crearCancion = (titleA,artistA)=>{
    const music = leersong('songs.json');
    const index = music.findIndex((song)=>{
        song.title === titleA
    })

    if(index === -1){
        music.push({title:titleA ,artistA});
        writesongs('songs.json',music);
        return console.log('Canción registrada');
    }else{
        console.log('Esta canción ya existe');
    }
}

const reedsong = (title)=>{
    const music = leersong('songs.json')
    const findsong = music.find((song)=>{
        return song.title.includes(title)
    })
    if(findsong){
        console.log('Canción encontrada');
        return console.log(findsong);
    }else{
        console.log(findsong);
        console.log('No se encuentra la canción');
        return {}
    }

}

const editartist = (title,newartist)=>{
    const music = leersong('songs.json');
    const findsong = music.findIndex((song)=>{
        return song.title.includes(title)
    })

    if(findsong > -1){
        music[findsong].artist = newartist;
        writesongs('songs.json',music);
        return console.log('El artista ha sido modificado');
    }else{
        console.log('No se ha encontrado la canción');
    }
}

const removSong = (title)=>{
    const music = leersong('songs.json');
    const findsong = music.findIndex((song)=>{
        return song.title.includes(title);
    })

    if(findsong > -1){
        music.splice(findsong,1);
        writesongs('songs.json',music)
     return console.log('Canción borrada');
    }else{
    return console.log('La canción no se ha podido encontrar');
    }
}


const orderSongsByTitle = (leersong)=>{
    const music = leersong('songs.json')
    return music.sort((songA,songB)=>{
        if(songA.title.toLowerCase() < songB.title.toLowerCase()){
            return -1
        }else if(songA.title.toLowerCase() > songB.title.toLowerCase()){
            return 1
        }else{
            return 0
        }
     });
}



//orderSongsByTitle(leersong); ?
//removSong('Cliffs Of Dover'); OK
//editartist('Little Charmer','Elvis Presley'); //OK
//reedsong('Cliffs Of Dove');   //OK
//crearCancion('ACDC','Shot in the dark');  //OK
//console.log(leersong('./songs.json'));    //OK



module.exports = {
    crearCancion:crearCancion,
    reedsong:reedsong,
    editartist:editartist,
    removSong:removSong,
    writesongs:writesongs,
    leersong:leersong,
    orderSongsByTitle:orderSongsByTitle
}