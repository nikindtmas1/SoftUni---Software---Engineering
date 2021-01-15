function pieceOfPie(arg1, arg2, arg3) {

    const pieFlavors = arg1;
    const startSection = arg2;
    const endSection = arg3;


    const startIndex = pieFlavors.indexOf(startSection);
    const endIndex = pieFlavors.indexOf(endSection);

    const output = pieFlavors.slice(startIndex, endIndex + 1);

    return output;

}
console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));
