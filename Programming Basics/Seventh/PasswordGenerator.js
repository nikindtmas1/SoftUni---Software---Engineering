function passwordGenerator(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    //n & l (1...9) => a,b,c,d,e,f,g,h,i
    // let asciiCoud = 'b'.charcodeAt(0);
    // let symbol = String.fromCharCode(asciiCode);
    let output = '';
    for (let i1 = 1; i1 <= n; i1++) {
        for (let i2 = 1; i2 <= n; i2++) {
            for (let i3 = 97; i3 < 97 + l; i3++) {
                for (let i4 = 97; i4 < 97 + l; i4++) {
                    for (let i5 = 1; i5 <= n; i5++) {
                        if (i5 > i1 && i5 > i2) {
                            let thirdSimbol = String.fromCharCode(i3);
                            let fourthSimbol = String.fromCharCode(i4);
                            output += (`${i1}${i2}${thirdSimbol}${fourthSimbol}${i5} `);
                        }
                    }
                }
            }
        }
    }
    console.log(output);
}
passwordGenerator([ '2', '4' ]);