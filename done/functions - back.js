
const Music = [
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

]


const crearCancion = (music,titleA,artistA)=>{
    const index = music.findIndex((song)=>{
        song.title === titleA
    })

    if(index === -1){
        music.push({title:titleA ,artistA})
        return console.log('Canción registrada');
    }else{
        console.log('Esta canción ya existe');
    }
}

const reedsong = (music,title)=>{
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

const editartist = (music,title,newartist)=>{
    const findsong = music.findIndex((song)=>{
        return song.title.includes(title)
    })

    if(findsong > -1){
        music[findsong].artist = newartist;
        return console.log('El artista ha sido modificado');
    }else{
        console.log('No se ha encontrado la canción');
    }
}

const removSong = (music,title)=>{
    const findsong = music.findIndex((song)=>{
        return song.title.includes(title);
    })

    if(findsong > -1){
        console.log('Canción borrada');
     return music.splice(findsong,1);
    }else{
    return console.log('La canción no se ha podido encontrar');
    }
}

const listSongs = (music)=>{
    return music.forEach(element => {
        console.log(element);
    });
}

const orderSongsByTitle = (music)=>{
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



//orderSongsByTitle(Music);
//listSongs(Music);
//removSong(Music,'Cliffs Of Dover');
//editartist(Music,'Little Charmer','Elvis Presley');
//reedsong(Music,'Cliffs Of Dove');
//crearCancion(Music,'ACDC','Shot in the dark');



module.exports = {
    crearCancion:crearCancion,
    reedsong:reedsong,
    editartist:editartist,
    removSong:removSong,
    listSongs:listSongs,
    orderSongsByTitle:orderSongsByTitle
}