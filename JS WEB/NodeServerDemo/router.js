const handlers = {}

function match(url){
    const handler = handlers[url];

    if(handler == undefined){

    }
}

function registerHandler(url, handler){
    handlers[url] = handler
}

function defaultHandler(req,res){
    res.status = 404;
    res.write('Not Found');
    res.end();
}