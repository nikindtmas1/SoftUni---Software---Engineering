function cookingByNumbers(arg1, arg2, arg3, arg4, arg5, arg6) {

    let startNum = Number(arg1);

    let commands = [arg2, arg3, arg4, arg5, arg6];

    for (let i = 0; i < commands.length; i++) {

        let command = commands[i];

        switch (command) {

            case 'chop': startNum = startNum / 2;
                console.log(startNum);
                break;

            case 'dice': startNum = Math.sqrt(startNum);
                console.log(startNum);
                break;

            case 'spice': startNum += 1;
                console.log(startNum);
                break;

            case 'bake': startNum = startNum * 3;
                console.log(startNum);
                break;

            case 'fillet': startNum -= startNum * 0.20;
                console.log(startNum);
                break;
        }
    }

}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');