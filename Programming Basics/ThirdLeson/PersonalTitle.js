function personalTitle(arg1, arg2) {
    let age = Number(arg1);
    let gender = arg2;

    let result = '';

    if (gender == 'f') {
        if (age < 16) {
            result = 'Miss';
        } else {
            result = 'Ms.';
        }
    } else {
        if (age < 16) {
            result = 'Master';
        } else {
            result = 'Mr.';
        }
    }

    console.log(result);

}
personalTitle('12', 'f');