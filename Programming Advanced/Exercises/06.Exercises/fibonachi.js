function getFinotachi(){

    let currantNum = 0;
    let nexNum = 1;

    function fibonaci(){
    let fibNum = currantNum + nexNum;
    currantNum = nexNum;
    nexNum = fibNum;

    return currantNum;
    }

    return fibonaci;
}

function solve(){
    let fib = getFinotachi();
    console.log(fib());
    console.log(fib());
    console.log(fib());
    console.log(fib());
    console.log(fib());
    console.log(fib());
}
solve()
