function solve(arr){

    let result = arr
    .map((line).split(' | '))
    .reduce((storage, cars) => {
        let [brand, model, quantity] = cars;
        if(!storage.has(brand)){
            storage.set(brand, new Map())
        }

        if(!storage.get(brand).has(model)){
            storage.get(brand).set(model,0)
        }
        let value = Number(storage.get(brand).get(model))
        storage.get(brand).set(model, value + Number(quantity))
        
    })
for([brand, model] of storage.entries()){
    let result = `${brand}`
    for(let [name, quantity] of model.entries())
    result += `###${name} -> ${quantity}\n`
    resultString.push(result.trim())
}
    return storage
}

// {
//     brand:
//     model:producerCars,
//     brand2:
//     model:producerCars
// }
console.log(solve());