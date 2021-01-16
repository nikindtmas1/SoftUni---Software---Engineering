function addAndRemove(input) {

    let currantNum = 0;

    let result = [];

    for (let i = 0; i < input.length; i++) {

        if (input[i] == 'add') {

            currantNum += 1;

            result.push(currantNum);

        } else if ('remove') {

            currantNum += 1;

            result.splice(result.length - 1, 1);

        }
    }

    if (result.length > 0) {

        console.log(result.join('\n'));

    } else {

        console.log('Empty');
    }

}
addAndRemove(['remove',
'remove',
    'remove',
   ]);