const pubSub = require('./pubSub');

const onCatsRequest = (name) => {

    if(names.includes(name)){

        console.log(`Hello ${name} again!`);
    }else{

        console.log(`We have new cat - ${name}`);
        names.push(name);
    }
}