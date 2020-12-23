function favoriteMovie(input) {
    let nameMovie = input.shift();

    let pointsMovie = 0;
    let maxPointsMovie = Number.MIN_SAFE_INTEGER;
    let nameMaxPoint = '';
    let limitMovie = 7;
    let countarMovie = 0;

    while (nameMovie != 'STOP' && countarMovie < limitMovie) {
        let lengthName = nameMovie.length;
        countarMovie++;
        for (let index = 0; index < lengthName; index++) {
            let numIndex = nameMovie.charCodeAt(index);
            pointsMovie += numIndex;
            if (numIndex >= 97 && numIndex <= 122) {
                pointsMovie -= 2 * lengthName;
            } else if (numIndex >= 65 && numIndex <= 90) {
                pointsMovie -= lengthName;
            }


        }
        if (maxPointsMovie < pointsMovie) {
            maxPointsMovie = pointsMovie;
            nameMaxPoint = nameMovie;
        }
        //let index = nameMovie[1];
        pointsMovie = 0;

        nameMovie = input.shift();

    }
    if (nameMovie == 'STOP') {
        console.log(`The best movie for you is ${nameMaxPoint} with ${maxPointsMovie} ASCII sum.`);
    } else if (countarMovie >= limitMovie) {
        console.log(`The limit is reached.`);
        console.log(`The best movie for you is ${nameMaxPoint} with ${maxPointsMovie} ASCII sum.`);
    }
}
favoriteMovie([ 'Rage', 'Fury', 'Cold', 'Ice', 'Fire', 'Furrry', 'ROAD RAGE' ]);