function skeleton(input) {
    let minutesKontrol = Number(input.shift());
    let secundeKontrol = Number(input.shift());
    let lengthPipe = Number(input.shift());
    let secundFotHundredMeters = Number(input.shift());

    let timeInSecKontrol = (minutesKontrol * 60) + secundeKontrol;
    let reduceTime = (lengthPipe / 120) * 2.5;

    let timeMarin = (lengthPipe / 100) * secundFotHundredMeters - reduceTime;

    if (timeMarin <= timeInSecKontrol) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${timeMarin.toFixed(3)}.`);
    } else if (timeMarin > timeInSecKontrol) {
        let neededTime = Math.abs(timeInSecKontrol - timeMarin);
        console.log(`No, Marin failed! He was ${neededTime.toFixed(3)} second slower.`);
    }
}
skeleton([ '1', '20', '1546', '12', '' ]);