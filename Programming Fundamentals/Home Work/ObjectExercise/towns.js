function towns(input){

    let townsArr = [];

    class Towns{

        constructor(name, latitude, longitude){

            this.town = name;
            this.latitude = latitude;
            this.longitude = longitude;

        }
    }

    for(let i = 0; i < input.length; i++){

        let items = input[i].split(' | ');

        let name = items[0];
        let latitude = Number(items[1]).toFixed(2);
        let longitude = Number(items[2]).toFixed(2);

        townsArr.push(new Towns(name, latitude, longitude));

    }

    let str = JSON.stringify(townsArr);
    let parse = JSON.parse(str);

    for (let i = 0; i < parse.length; i++) {
        
        console.log(parse[i]);

    }

}

towns([ 'Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625' ]);