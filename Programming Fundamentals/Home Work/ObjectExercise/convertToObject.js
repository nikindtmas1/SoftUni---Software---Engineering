function convertToObject(json){

    let obj = JSON.parse(json);

    let entries = Object.entries(obj);

    for (const [key, value] of entries) {

        console.log(`${key}: ${value}`);
        
    }


}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');