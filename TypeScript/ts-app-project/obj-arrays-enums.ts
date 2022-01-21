// const person: {
//     name: string;
//     age: number;
//      hobbies: String[];
//      role: [number, String];
// } = 
// const person = {
//     name: 'Nikolay',
//     age: 47,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'Author'],
// };
enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Nikolay',
    age: 47,
    hobbies: ['Sports', 'Cooking'],
    // role: [2, 'Author'],
    //role: "READ ONLY USER",
    role: Role.ADMIN,
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

if(person.role === Role.AUTHOR){
    console.log("IS READ ONLY");
}