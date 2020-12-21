function minerTask(inputArr) {

    let resourceList = {};

    for (let i = 0; i < inputArr.length; i += 2) {

        let resource = inputArr[i]
        let quantity = Number(inputArr[i + 1]);

        if (!resourceList.hasOwnProperty(resource)) {

            resourceList[resource] = [];

            let oldQuanty = Number(resourceList[resource]);

            let currantQuanty = oldQuanty + Number(quantity);

            resourceList[resource] = currantQuanty;

        } else {

            let oldQuanty = Number(resourceList[resource]);

            let currantQuanty = oldQuanty + Number(quantity);

            resourceList[resource] = currantQuanty;

        }

    }

    for (const key in resourceList) {

        console.log(`${key} -> ${resourceList[key]}`);

    }
}

minerTask([
    'gold',   '155',
    'silver', '10',
    'copper', '17',
    'gold',   '15'
  ]);