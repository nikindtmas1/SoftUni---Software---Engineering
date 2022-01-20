// const person: {
//     name: string;
//     age: number;
//      hobbies: String[];
//      role: [number, String];
// } = 
const person = {
    name: 'Nikolay',
    age: 47,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'Author'],
};

// person.role.push('Admin');
// person.role[1] = 10;

// person.role = [3, 'Admin', 'User']

let favoriteActivites: string[];
let favoriteActivites1: any[];
favoriteActivites = ["Sport", ''];
favoriteActivites1 = ["Sports", 1];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}