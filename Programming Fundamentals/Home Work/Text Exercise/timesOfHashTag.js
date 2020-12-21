function timesOfHashTag(input){

    let string = input;

    let paus = ' ';

    let output = '';

    for (const char of string) {

        if(char != paus){

            output += char;

        }else{

            if(output[0] == '#' ){

                output = output.slice(1);

                if(output.charCodeAt() >= 65 && output.charCodeAt() <= 90
                    || output.charCodeAt() >= 97 && output.charCodeAt() <= 122){

                        console.log(output);
        
                        output = '';

                    }

            }else{

                output = '';

            }
        }
    }

    let lastIndex = string.lastIndexOf(' ');
    let lastWodr = string.slice(lastIndex + 1);

    if(lastWodr[0] == '#'){

        console.log(lastWodr.slice(1));
    }

}

timesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');