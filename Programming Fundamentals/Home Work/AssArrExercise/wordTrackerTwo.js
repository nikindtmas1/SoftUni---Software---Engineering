function wordTracker(input){

    let wordsSearch = input.shift().split(' ');

    let map = new Map();

    for (const iterator of wordsSearch) {

        map.set(iterator, 0);
        
    }
    let countar = 0;

    for(let word of input){

        if(map.has(word)){

            countar++;
            let count = map.get(word);
            count += countar;
            map.set(word, count);
            countar = 0;

        }
    }

    let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

    for(let kvp of sorted){

        console.log(`${kvp[0]} - ${kvp[1]}`);
    }


}

wordTracker([
    'this sentence', 'In',
    'this',          'sentence',
    'you',           'have',
    'to',            'count',
    'the',           'occurances',
    'of',            'the',
    'words',         'this',
    'and',           'sentence',
    'because',       'this',
    'is',            'your',
    'task'
  ]);