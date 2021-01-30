function solve() {

    let firstElem;
    let secondElem;
    let resultElem;
    
    return {

        init: (selector1, selector2, resultSelector) => {
            firstElem = document.querySelector(selector1);
            secondElem = document.querySelector(selector2);
            resultElem = document.querySelector(resultSelector);
        },

        add: () => {
            resultElem.value = Number(firstElem.value) + Number(secondElem.value);

        },

        subtract: () => {

            resultElem.value = Number(firstElem.value) - Number(secondElem.value);

        }
    }

}

let obj = solve()
    obj.init('#num1','#num2','#result',)

    let add = obj.add
    let subtract = obj.subtract
