function numberOfSeats([arg1,arg2]) {
    let h = Number(arg1) * 100;
    let w = Number(arg2) * 100;   

    let tablesPerRow = Math.floor((w - 100) / 70);
    let tablesPerColumn = Math.floor(h / 120);

    let allTables = tablesPerRow * tablesPerColumn - 3;

    console.log(allTables);
}
numberOfSeats(["15", "8.9"]);
numberOfSeats(["8.4", "5.2"]); 
//
function solveStudyHall([arg1,arg2]){
let length = parseFloat(arg1)*100;
let width = parseFloat(arg2)*100;

let rows = Math.floor(length / 120);
let rowPlace = Math.floor((width - 100) / 70);
let realWorkPlaces = (rows * rowPlace) - 3;
console.log(realWorkPlaces);

}
solveStudyHall(['15', '8.9']);
solveStudyHall(['8.4', '5.2']);
//More exercises

function trainingLab(arg1, arg2) {
    let h = Number(arg1) * 100;
    let w = Number(arg2) * 100;

    let tableColum = Math.floor(h / 120);
    let tableRow = Math.floor((w - 100) / 70);

    let allTable = (tableColum * tableRow) - 3;

    console.log(allTable);
}
trainingLab("15", "8.9");
trainingLab("8.4", "5.2");
