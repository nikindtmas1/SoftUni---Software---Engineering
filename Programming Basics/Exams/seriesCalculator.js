function seriesCalculator(input) {
    let nameSerial = input.shift();
    let countSeason = Number(input.shift());
    let countEpisod = Number(input.shift());
    let lastingNormalEpisod = Number(input.shift());
    let lastingReclam = lastingNormalEpisod * 0.20;
    let lastEPisode = 10;

    let episod = lastingNormalEpisod + lastingReclam;

    let totalTime = Math.ceil((episod * countEpisod * countSeason) + (lastEPisode * countSeason));
    //console.log(`${lastingReclam}`);
    console.log(`Total time needed to watch the ${nameSerial} series is ${totalTime} minutes.`);
}
seriesCalculator([ 'Teen wolf', '5', '20', '55' ]);