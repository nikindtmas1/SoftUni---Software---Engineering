function stringLength(arg1, arg2, arg3){

    let allLength = arg1.length + arg2.length + arg3.length;
    let averageLength = Math.floor(allLength / 3);

    console.log(allLength);
    console.log(averageLength);

}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');