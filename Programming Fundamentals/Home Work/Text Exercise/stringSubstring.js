function stringSubstring(firstStr, secondStr) {

    firstStr = firstStr.toLowerCase();
    secondStr = secondStr.toLowerCase().split(' ');

    let countar = 0;

    for (const word of secondStr) {

        if (word == firstStr) {

            countar++;

            console.log(firstStr);

            break;
    
        } 

    }
    
    if(countar == 0){
    
        console.log(`${firstStr} not found!`);
    }

}

stringSubstring('python', 'JavaScript is the best programming language JavaScript');