function argInfo() {

    let result = [];

    let count = {};

    [...arguments].forEach(argument => {

        let type = typeof argument;

        result.push({type, value: argument})

        if(!count[type]){
            count[type] = 0;
        }

        count[type]++;
    })

    result.forEach(r => {console.log(`${r.type}: ${r.value}`)});

    let sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);

    sorted.forEach(element => {console.log(`${element[0]} = ${element[1]}`)})
}

argInfo('cat', 'dog', 42, function () { console.log('Hello world!'); });
