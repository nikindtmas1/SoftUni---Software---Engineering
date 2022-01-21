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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Nikolay',
    age: 47,
    hobbies: ['Sports', 'Cooking'],
    // role: [2, 'Author'],
    //role: "READ ONLY USER",
    role: Role.ADMIN
};
// person.role.push('Admin');
// person.role[1] = 10;
// person.role = [3, 'Admin', 'User']
var favoriteActivites;
var favoriteActivites1;
favoriteActivites = ["Sport", ''];
favoriteActivites1 = ["Sports", 1];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === Role.AUTHOR) {
    console.log("IS READ ONLY");
}
