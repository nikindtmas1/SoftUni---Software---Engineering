function convertToJson(firstName, lastName, hairColor){

    let person = {

        name:firstName,
        lastName:lastName,
        hairColor:hairColor

    };

    person.secondName = 'Petrov';
    console.log(person);


    let str = JSON.stringify(person);

    console.log(str);


    

}

convertToJson('George', 'Jones', 'Brown');