function loop(){
for (let i = 1; i <= 100; i++){
    console.log(i);
}
}
loop();
//
function endOf7(){
    for (let i=1; i<=1000; i++){
        if (i % 10 == 7){
            console.log(i);
        }
    }
}
endOf7();

//
function simbols(){
for (let i = 97; i<123; i++){
    let currentLetter = String.fromCharCode(i);
        console.log(currentLetter);
}
}
simbols();
//
function loop(){
    for(let i=1; i<=100; i++){
        console.log(i);
    }
}
//
function endOf7(){
    for(let i=1; i<=1000; i++){
        if(i %10 == 7){
            console.log(i);
        }
    }
}
//
function fromAToZ(){
    for( let i=97; i<123; i++){
        let currentNum = String.fromCharCode(i);
        console.log(currentNum);
    }
}