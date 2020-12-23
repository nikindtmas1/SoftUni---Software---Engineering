function treangleOfStars([arg1]){
    let str = "";
    let n = Number(arg1);
    for(let i=1; i<=n; i++){
        str = str + "*";
        console.log(str);
    }
    
    }
    treangleOfStars(["10"])
    //
    function treangleOfStars([arg1]){
        let n = Number(arg1);
        let star = "";
        for(let i=1; i<=n; i++){
            star += "*";
            console.log(star);
        }
    }
    treangleOfStars(["10"]);
    //
    function drowTriangle() {
        for (let i = 1; i <= 10; i++) {
            let stars = "*";
            for (let j = 1; j < i; j++) {
                stars += "*";
            }
            console.log(stars);
        }
    }
    drowTriangle();
    //
    function Expression(num){
        let n = parseInt(num);  
        console.log(('*').repeat(n));
        for(let i = 0; i < n-2; i++){
            console.log('*' + ' '.repeat(n-2) + '*');
        }
        console.log(('*').repeat(n));
    }
    Expression();