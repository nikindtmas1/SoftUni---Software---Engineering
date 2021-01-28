const obj = {
    name: 'Peter',
    outer(){
        console.log(this);
        const inner = () => { console.log(this); }
        inner()
    }

}

//obj.outer()

function greed(){
    console.log(this.name);
}

const person = { name: 'Alex' }
greed.call(person)