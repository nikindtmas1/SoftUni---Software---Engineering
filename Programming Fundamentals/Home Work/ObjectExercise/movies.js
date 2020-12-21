function movies(input){

    let movieList = [];
    let coppyList = [];

    for(let i = 0; i < input.length; i++){

        let items = input[i].split(' ');

        if(items.includes('addMovie')){

            let index = items.indexOf('addMovie');

            let movieName = items.slice(index + 1).join(' ');

           movieList.push(movieName);

           coppyList.push(movieName);

        }else if(items.includes('directedBy')){

            let index = items.indexOf('directedBy');

            let movieName = items.slice(0, index).join(' ');

            let director = items.slice(index + 1).join(' ');

            if(movieList.includes(movieName)){

                let index = movieList.indexOf(movieName);

                movieList.splice(index + 1, 0, director);

            }
        }else if(items.includes('onDate')){

            let index = items.indexOf('onDate');

            let movieName = items.slice(0, index).join(' ');

            let date = items.slice(index + 1).join('');

            if(movieList.includes(movieName)){


                let index = movieList.indexOf(movieName);

                if(coppyList.includes(movieList[index + 1])){

                    movieList.splice(index + 1, 0, date);
                    
                }else{
                    
                    movieList.splice(index + 2, 0, date);

                }


            }


        }
    }

    let obj = {};

    while(movieList.length > 0){

       let currantArr =  movieList.splice(0, 3);

       let movieName = currantArr[0];
       let director = currantArr[1];
       let date = currantArr[2];

        obj[movieName] = 

       console.log(currantArr);
    }

}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
  ]);