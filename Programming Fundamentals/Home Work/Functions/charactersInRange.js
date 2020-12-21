function charactersInRange(charOne, charTwo) {

    let result = '';

    let simbolFirst = charOne;

    let simbolSecond = charTwo;

    numSimbolFirst = simbolFirst.charCodeAt();

    numSimbolSecond = simbolSecond.charCodeAt();

    if(numSimbolFirst < numSimbolSecond){

    for (let i = numSimbolFirst + 1; i < numSimbolSecond; i++) {

        result += `${String.fromCharCode(i)} `;
    }

    return result;

}else{

    for(let i = numSimbolSecond + 1; i < numSimbolFirst; i++){

        result += `${String.fromCharCode(i)} `;
    }

    return result;
}

}