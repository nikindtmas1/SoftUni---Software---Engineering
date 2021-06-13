function parse(req){
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', data => body += data);
        req.on('end', () => {
            const params = body
            .split('&')
            .map(p => p.split('='))
            .reduce((a,c) => Object.assign(a, {[c[0]]: c[1]}), {})
        });
    });

}