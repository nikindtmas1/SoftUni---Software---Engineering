function solve(){

    let firstElem;
    let secondElem;
    let resultElem;
return {

    init: () => {
        firstElem = document.queriselector(selector1);
        secondElem = document.queriselector(selector2);
        resultElem = document.queriselector(resultSelector);
    },

    add: () => {
        resultElem.value = Number(firstElem.value) + Number(secondElem.value);

    },

    substract: () => {

        resultElem.value = Number(firstElem.value) - Number(secondElem.value);

    }
}

}

let obj = solve()
    obj.init('#num1','#num2', '#result',)

    let add = obj.add
    let substract = obj.substract
