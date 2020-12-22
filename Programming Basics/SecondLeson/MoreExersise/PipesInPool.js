

function pipesInPool(arg1, arg2, arg3, arg4) {
    let volumePool = Number(arg1);
    let waterFlowP1 = Number(arg2);
    let waterFlowP2 = Number(arg3);
    let hoursFilling = Number(arg4);

    let waterInPool = ((waterFlowP1) * hoursFilling) + (waterFlowP2 * hoursFilling);
    let waterInPro = (waterInPool / volumePool) * 100;

    let howP1FillingProc = ((waterFlowP1 * hoursFilling) / waterInPool) * 100;
    let howP2FillingProc = ((waterFlowP2 * hoursFilling) / waterInPool) * 100;

    if (waterInPool > volumePool) {
        let overflow = waterInPool - volumePool;
        console.log(`For ${hoursFilling} hours the pool overflows with ${overflow.toFixed(2)} liters.`);

    } else {
        console.log(`The pool is ${(waterInPro).toFixed(2)}% full. Pipe 1: ${howP1FillingProc.toFixed(2)}%. Pipe 2: ${howP2FillingProc.toFixed(2)}%.`)

    }
}
//pipesInPool('1000','100', '120', '3');
pipesInPool('100', '100', '100', '2.5');