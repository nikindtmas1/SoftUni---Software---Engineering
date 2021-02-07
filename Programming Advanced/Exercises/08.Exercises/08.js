function juiceFlavors(input) {

    let result = input.map((x) => x.split(' => '));
    let storage = {};
    let bottleStore = {};
    result.forEach(line => {
        let [nameJus, quantity] = line;

        if (!storage[nameJus]) {
            storage[nameJus] = Number(quantity);

            if (storage[nameJus] >= 1000) {
                if (!bottleStore[nameJus]) {
                    bottleStore[nameJus] = Math.floor(storage[nameJus] / 1000);
                    storage[nameJus] -= bottleStore[nameJus] * 1000;
                } else {
                    bottleStore[nameJus] += Math.floor(storage[nameJus] / 1000);
                    storage[nameJus] -= bottleStore[nameJus] * 1000;
                }
            }
        } else {
          
            storage[nameJus] += Number(quantity);

            if (storage[nameJus] >= 1000) {
                if (!bottleStore[nameJus]) {
                    bottleStore[nameJus] = Math.floor(storage[nameJus] / 1000);
                    storage[nameJus] -= bottleStore[nameJus] * 1000;
                } else {
                    bottleStore[nameJus] += Math.floor(storage[nameJus] / 1000);
                    storage[nameJus] -= bottleStore[nameJus] * 1000;
                }
            }
        }
    });

    for (const key in bottleStore) {

        console.log(`${key} => ${bottleStore[key]}`);
    }



}

juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
  ]
  );