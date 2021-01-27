function attachEventsListeners() {

    const btns = document.querySelector('main');

    btns.addEventListener('click', function (ev) {
        const clickName = ev.target.type;
        // console.log(clickName);
        // const idName = ev.target.id;
        // console.log(idName);

        if (clickName === 'button') {

            let colection = document.querySelectorAll('input[type=text]')
            let colecArr = Array.from(colection);

            let dayNum = 0;
            let hourNum = 0;
            let minuteNum = 0;
            let secondNum = 0;

            let idName = '';
            let numTime = 0;

            for (let i = 0; i < colecArr.length; i++) {

                const currText = colecArr[i].value;

                if (currText !== '') {

                    idName = colection[i].id;
                    numTime = Number(currText);

                    break;
                }
            }

            switch (idName) {

                case 'days': convertDays(numTime)

                    let elementH = document.getElementById('hours');
                    elementH.value = hourNum;
                    let elementM = document.getElementById('minutes');
                    elementM.value = minuteNum;
                    let elementSec = document.getElementById('seconds');
                    elementSec.value = secondNum;

                    break;

                case 'hours': convertHours(numTime)

                    let elementD = document.getElementById('days');
                    elementD.value = dayNum;
                    let elemenM = document.getElementById('minutes');
                    elemenM.value = minuteNum;
                    let elemenS = document.getElementById('seconds');
                    elemenS.value = secondNum;

                    break;

                case 'minutes': convertMinutes(numTime)

                    let elemenD = document.getElementById('days');
                    elemenD.value = dayNum;
                    let elemenH = document.getElementById('hours');
                    elemenH.value = hourNum;
                    let elemS = document.getElementById('seconds');
                    elemS.value = secondNum;

                    break;

                case 'seconds': convertSeconds(numTime)
                    let elemD = document.getElementById('days');
                    elemD.value = dayNum;
                    let elemH = document.getElementById('hours');
                    elemH.value = hourNum;
                    let elemM = document.getElementById('minutes');
                    elemM.value = minuteNum;

                    break;
            }

            function convertDays(arg) {

                hourNum = arg * 24;
                minuteNum = arg * 1440;
                secondNum = arg * 86400;

            }

            function convertHours(arg) {

                dayNum = arg / 24;
                minuteNum = arg * 60;
                secondNum = arg * 3600;
            }

            function convertMinutes(arg) {

                dayNum = arg / 60 / 24;
                hourNum = arg / 60;
                secondNum = arg * 60;
            }

            function convertSeconds(arg) {

                dayNum = arg / 60 / 60 / 24;
                hourNum = arg / 60 / 60;
                minuteNum = arg / 60;
            }

        }

    });



}