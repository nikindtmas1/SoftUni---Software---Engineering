function songs(input){

    let numSongs = Number(input.shift());
    let typeSongs = input.pop();

    class Song{

        constructor(type, name, time){

            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songsArr = [];

    for(let i = 0; i < numSongs; i++){

        [type, name, time] = input[i].split('_');

        songsArr.push(new Song(type, name,time));

    }

    if(typeSongs == 'all'){

        songsArr.forEach((i) => console.log(i.name));

    }else{

        let filtered = songsArr.filter((i) => i.type == typeSongs);
        filtered.forEach((i) => console.log(i.name));

    }

}

songs([ '2', 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all' ]);