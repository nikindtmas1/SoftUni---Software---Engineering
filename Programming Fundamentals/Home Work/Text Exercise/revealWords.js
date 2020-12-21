function revealWords(words, text) {

    words = words.split(', ');

    for (const word of words) {

        let charCount = word.length;

        let search = '*'.repeat(charCount);

        if (text.includes(search)) {

            text = text.replace(search, word);
        }
    }

    console.log(text);

}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');