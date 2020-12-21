function replaceRepeatingChars(string){

    let output = '';

    let index = 0;

    let char = string[index];
    output += char;
    index++;

    while(index < string.length){

        let nexChar = string[index];

        if(nexChar != char){

            output += nexChar;

            char = nexChar;
           
        }

        index++;
       
    }

    console.log(output);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');