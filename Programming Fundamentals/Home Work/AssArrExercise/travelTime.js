function travelTime(inputArr){

    let oferList = {};

    for (const line of inputArr) {

        [country, town, price] = line.split(' > ');

        if(!oferList.hasOwnProperty(country)){

            oferList[country] = {};

            oferList[country][town] = price;

        }else{

            if(!oferList[country].hasOwnProperty(town)){

                oferList[country][town] = price;

            }else{

                let oldPrice = Number(oferList[country][town]);

                if(oldPrice > Number(price)){

                    oferList[country][town] = price;
                }
            }
        }
        
    }
   
    let sorted = Object.entries(oferList)
    .sort((a, b) => a[0].localeCompare(b[0]));

    for (const line of sorted) {

        let country = line;

        let sorted = Object.entries(country[1])
        .sort((a, b) => a[1] - b[1]);

        let output = [];

        for (const iterator of sorted) {

            output.push(iterator.join(' -> '))
            
        }
        console.log(`${country[0]} -> ${output.join(' ')}`);
        
    }
}

travelTime([
    'Bulgaria > Sofia > 25000',
    'aaa > Sofia > 1',
    'aa > Orgrimar > 0',
    'Albania > Tirana > 25000',
    'zz > Aarna > 25010',
    'Bulgaria > Lukovit > 10'
  ]);