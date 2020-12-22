function fuelTankPt2(arg1, arg2, arg3) {
    let tipeFuel = arg1.toLowerCase();                        //Бензин – 2.22 лева за един литър
    let litersFuel = Number(arg2);                          //Дизел – 2.33 лева за един литър 
    let clubCart = arg3.toLowerCase();                        //Газ – 0.93 лева за литър
                                                            //18 ст. за литър бензин, 12 ст. за литър дизел и 
    let priceGasoline = 2.22;                               //8 ст. за литър газ
    let priceDiesel = 2.33;
    let priceGas = 0.93;


    if (tipeFuel == 'gasoline' && clubCart == 'yes') {
        if (litersFuel >= 20 && litersFuel <= 25) {
            priceGasoline = priceGasoline - 0.18;
            fueling = (priceGasoline * litersFuel) - ((priceGasoline * litersFuel) * 0.08);
        } else if (litersFuel > 25) {
            priceGasoline = priceGasoline - 0.18;
            fueling = (priceGasoline * litersFuel) - ((priceGasoline * litersFuel) * 0.10);
        } else if (litersFuel < 20) {
            priceGasoline = priceGasoline - 0.18;
            fueling = (priceGasoline * litersFuel);
        }
    } else if (tipeFuel == 'gasoline' && clubCart == 'no') {
        if (litersFuel >= 20 && litersFuel <= 25) {
            fueling = (priceGasoline * litersFuel) - ((priceGasoline * litersFuel) * 0.08);
        } else if (litersFuel > 25) {
            fueling = (priceGasoline * litersFuel) - ((priceGasoline * litersFuel) * 0.10);
        } else if (litersFuel < 20) {
            fueling = (priceGasoline * litersFuel);
        }
    } else if (tipeFuel == 'gas' && clubCart == 'yes') {
        if (litersFuel >= 20 && litersFuel <= 25) {
            priceGas = priceGas - 0.08;
            fueling = (priceGas * litersFuel) - ((priceGas * litersFuel) * 0.08);
        } else if (litersFuel > 25) {
            priceGas = priceGas - 0.08;
            fueling = (priceGas * litersFuel) - ((priceGas * litersFuel) * 0.10);
        } else if (litersFuel < 20) {
            priceGas = priceGas - 0.08;
            fueling = (priceGas * litersFuel);
        }
    } else if (tipeFuel == 'gas' && clubCart == 'no') {
        if (litersFuel >= 20 && litersFuel <= 25) {
            fueling = (priceGas * litersFuel) - ((priceGas * litersFuel) * 0.08);
        } else if (litersFuel > 25) {
            fueling = (priceGas * litersFuel) - ((priceGas * litersFuel) * 0.10);
        } else if (litersFuel < 20) {
            fueling = (priceGas * litersFuel);
        }
    } else if (tipeFuel == 'diesel' && clubCart == 'yes') {
        if (litersFuel >= 20 && litersFuel <= 25) {
            priceDiesel = priceDiesel - 0.12;
            fueling = (priceDiesel * litersFuel) - ((priceDiesel * litersFuel) * 0.08);
        } else if (litersFuel > 25) {
            priceDiesel = priceDiesel - 0.12;
            fueling = (priceDiesel * litersFuel) - ((priceDiesel * litersFuel) * 0.10);
        } else if (litersFuel < 20) {
            priceDiesel = priceDiesel - 0.12;
            fueling = (priceDiesel * litersFuel);
        }
    } else if (tipeFuel == 'diesel' && clubCart == 'no') {
        if (litersFuel >= 20 && litersFuel <= 25) {
            fueling = (priceDiesel * litersFuel) - ((priceDiesel * litersFuel) * 0.08);
        } else if (litersFuel > 25) {
            fueling = (priceDiesel * litersFuel) - ((priceDiesel * litersFuel) * 0.10);
        } else if (litersFuel < 20) {
            fueling = (priceDiesel * litersFuel);
        }

    }

    console.log(`${(fueling).toFixed(2)} lv.`);
}
fuelTankPt2('Diesel','19','No');