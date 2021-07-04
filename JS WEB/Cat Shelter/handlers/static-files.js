function getContentType(url){
    if(url.endsWith('css')){
        return 'text/css';

    }else if('htm'){
        return 'text/html';

    }else if('png'){
        return 'text/png';

    }else if('json'){
        return 'text/json';

    }else if('js'){
        return 'text/js';
    }
}

