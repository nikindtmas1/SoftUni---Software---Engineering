function pascalCaseSplitter(string){

    let newStr = '';

    let index = 0;

    let char = string[index];

    newStr += char;

    index++;

    while(index < string.length){

        char = string[index];

        if(char.charCodeAt() >=  65 && char.charCodeAt() <= 90){

            newStr += ' ' + char;

            index++;

        }else if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122){

            newStr += char;

            index++;
        }
    }

    newStr = newStr.split(' ');

    console.log(newStr.join(', '));

}

pascalCaseSplitter('ThisIsSoAnnoyingToDo');