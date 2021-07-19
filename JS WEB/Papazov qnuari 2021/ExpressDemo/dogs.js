const dogs = [];

function add(name){
    dogs.push(name);
}

function getAll(){
    return dogs.slice();
}

module.exports = {
    add,
    getAll
}