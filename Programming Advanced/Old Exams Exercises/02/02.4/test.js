function solve(){


    let arr = [
        {
            firstName:'Peter',
            lastName:'Djonsan',
        }
    ];

    if(arr.find((x) => x.firstName === 'Peter')){
        console.log('Yes');
    }else{
        console.log('No');
    }

}
solve()