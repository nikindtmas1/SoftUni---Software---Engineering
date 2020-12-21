function loadingBar(inputNumber){

    let num = inputNumber;
    let startLoading = 0;
    let endLoading = 10;

    let loadBar = [];

        let currentLoad = num / 10;

        for(let j = startLoading; j < currentLoad; j++){

            loadBar.push('%');
        }

        for(let i = currentLoad; i < endLoading; i++){
        
            loadBar.push('.');
        }
        if(num > 0 && num < 100){
        console.log(`${num}% [${loadBar.join('')}]`);
        console.log('Still loading...');
        }else{
            console.log('100% Complete!');
            console.log(`${num}% [${loadBar.join('')}]`);
            
        }
    
}