function oddOccurrences(inputString){

    let inputArr = inputString.split(' ');

    let map = new Map();

    for (const line of inputArr) {
        
        let word = line.toLowerCase();

        if(!map.has(word)){

            map.set(word, 1);

        }else{

            map.set(word, map.get(word) + 1);

        }


    }

    let mapKeys = Array.from(map.keys()).filter((x) => map.get(x) % 2 !== 0).join(' ');

    console.log(mapKeys)

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');