function password(input) {
    let username = input.shift();
    let password = input.shift();
    let data = input.shift();
    while (data != password) {

        data = input.shift();

    }
    console.log(`Welcome ${username}!`);
}
//password(['Nakov','1234','pass','1324','opa','niki','546432','98076','1234']);   

function passwordTwo(input) {
    let name = input.shift();
    let passow = input.shift();
    let nexPassow = input.shift();

    while (nexPassow != passow) {
        nexPassow = input.shift();
    }
    console.log(`Welcome ${name}!`);
}
passwordTwo(['Gosho',
    'secret',
    'secret']);