const obj = {
    name: 'Peter',
    outer(){
        console.log(this);
        const inner = () => { console.log(this); }
        inner()
    }

}

//obj.outer()


function greet(){
    console.log(this.name);
}

const person = { name: 'Alex' }
//greet.call(person)

const sharePersonalInfo = function(...activities){

    let info = `Hello, my name is ${this.name}.\n`+`I'm a ${this.profession}.\n`;

   let reducer = activities.reduce((acc, curr) => {
        let el = `---${curr}\n`;
        return acc + el;
    }, "My hobbies are:\n").trim();

    return info + reducer;
}

// const firstPerson = { name: "Peter", profession: "Fisherman" };
// console.log(sharePersonalInfo.call(firstPerson, 'biking', 'swimming','football'));