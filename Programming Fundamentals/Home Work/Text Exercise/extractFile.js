function extractFile(str){

    let lastIndex = 0;

    for (const ch of str) {

        if(ch.charCodeAt() == 92){

            lastIndex = str.lastIndexOf(ch);
            break;
            
        }
        
    }
    
    
    let substr = str.substring(lastIndex + 1);

    let lastIndexPoint = substr.lastIndexOf('.');

    let fileName = substr.substring(0, lastIndexPoint);
    let extention = substr.substring(lastIndexPoint + 1);

    console.log(`File name: ${fileName}\nFile extension: ${extention}`);

}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');