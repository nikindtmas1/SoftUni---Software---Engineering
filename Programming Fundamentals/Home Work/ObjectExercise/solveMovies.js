function solveMovies(inputArr) {

let movies = [];

inputArr.forEach(movie => {

    let items = movie.split(' ');
    let indexAddMovie = items.indexOf('addMovie');
    let indexDirector = items.indexOf('directedBy');
    let indexOnDate = items.indexOf('onDate');

    if(indexAddMovie > -1){

        let name = items.slice(indexAddMovie + 1).join(' ');

        movies.push({name: name});

    }

    if(indexDirector > -1){

        let name = items.slice(0, indexDirector).join(' ');
        let director = items.slice(indexDirector + 1).join(' ');

        movies.forEach(movie => {

            if(movie.name == name){

                movie.director = director;
            }

        });
    }

    if(indexOnDate > -1){

        let name = items.slice(0, indexOnDate).join(' ');
        let date = items.slice(indexOnDate + 1).join(' ');

        movies.forEach(movie => {

            if(movie.name == name){

                movie.date = date;

            }
        });

    }
    
});

movies.forEach(movie => {

    if(movie.name != undefined
        && movie.director != undefined
        && movie.date != undefined){

            console.log(JSON.stringify(movie));
            
        }
});

}

solveMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
  ]);