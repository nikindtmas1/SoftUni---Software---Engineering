function dictionary(input) {

    let objArr = [];

    input.forEach(element => {


        let tokens = JSON.parse(element);
        let term = Object.keys(tokens).join('');
        let definition = Object.values(tokens).join(' ');

        for (let key in objArr) {

            if (key == term) {

                objArr[key] = definition;

            }
        }

        objArr[term] = definition;

    });

    console.log(objArr);

    Object.keys(objArr).sort().forEach(function (key) {

        ordered[key] = objArr[key];

    });

    for (let key in ordered) {

        console.log(`Term: ${key} => Definition: ${ordered[key]}`);

    }


}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
  ]);