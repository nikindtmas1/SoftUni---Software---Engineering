function gimnastics(input) {
    let country = input.shift();
    let device = input.shift();

    let bulgariaPointsRibbon1 = 9.600;
    let bulgariaPointsRibbon2 = 9.400;
    let bulgariaPointsHoop1 = 9.550;
    let bulgariaPointsHoop2 = 9.750;
    let bulgariaPointsRope1 = 9.500;
    let bulgariaPointsRope2 = 9.400;

    let russiaPointsRibbon1 = 9.100;
    let russiaPointsRibbon2 = 9.400;
    let russiaPointsHoop1 = 9.300;
    let russiaPointsHoop2 = 9.800;
    let russiaPointsRope1 = 9.600;
    let russiaPointsRope2 = 9.000;

    let italyPointsRibbon1 = 9.200;
    let italyPointsRibbon2 = 9.500;
    let italyPointsHoop1 = 9.450;
    let italyPointsHoop2 = 9.350;
    let italyPointsRope1 = 9.700;
    let italyPointsRope2 = 9.150;

    let totalPoint = 0;
    let maxPoints = 20;

    if (country == 'Bulgaria') {
        switch (device) {
            case 'ribbon': totalPoint = bulgariaPointsRibbon1 + bulgariaPointsRibbon2; break;
            case 'hoop': totalPoint = bulgariaPointsHoop1 + bulgariaPointsHoop2; break;
            case 'rope': totalPoint = bulgariaPointsRope1 + bulgariaPointsRope2; break;
        }
    } else if (country == 'Russia') {
        switch (device) {
            case 'ribbon': totalPoint = russiaPointsRibbon1 + russiaPointsRibbon2; break;
            case 'hoop': totalPoint = russiaPointsHoop1 + russiaPointsHoop2; break;
            case 'rope': totalPoint = russiaPointsRope1 + russiaPointsRope2; break;
        }
    } else if (country == 'Italy') {
        switch (device) {
            case 'ribbon': totalPoint = italyPointsRibbon1 + italyPointsRibbon2; break;
            case 'hoop': totalPoint = italyPointsHoop1 + italyPointsHoop2; break;
            case 'rope': totalPoint = italyPointsRope1 + italyPointsRope2; break;
        }
    }

    console.log(`The team of ${country} get ${totalPoint.toFixed(3)} on ${device}.`);
    if (maxPoints > totalPoint) {
        let PointPro = (totalPoint / maxPoints) * 100;
        let neededPointPro = 100 - PointPro;
        console.log(`${neededPointPro.toFixed(2)}%`);
    }
}
gimnastics([ 'Italy', 'hoop', '' ]);