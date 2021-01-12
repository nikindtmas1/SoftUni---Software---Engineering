function largestNumber(x, y, z){

let result;

    if(x > y && x > z){
        result = x;
    }else if(y > x && y > z){
        result = y;
    }else{
        result = z;
    }


    console.log(`The largest number is ${result}.`);

}

largestNumber(3, 4, 5);
largestNumber(7, 11, 2);