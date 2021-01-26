function lockedProfile() {
    let test = document.getElementById('main');
    test.addEventListener('click', function (event) {

        const clickName = event.target.tagName

        if (clickName === 'BUTTON') {
            let locked = event.target.parentNode.querySelector('input[type=radio]:checked').value === 'lock';

            if (locked === true) {

                //console.log(locked);

            } else {
                //console.log(event.target.parentNode.querySelector('div'));
                let div = event.target.parentNode.querySelector('div');
                //console.log(div);
                let isVisible = div.style.display === 'block';
                //console.log(isVisible);
                div.style.display = isVisible ? 'none' : 'block';
                event.target.textContent = !isVisible ? 'Hide it' : 'Show more';

            }

        }
    });

}
        /*
        if(event.target.tagName === 'BUTTON'){

            const locked = event.target.parentNode
            .querySelector('input[type-radio]:checked').value === 'lock';

            if(isLocked){

                return
            }

            let div = event.target.parentNode.querySelector('div');

           let isVisible = div.style.display === 'block';
           div.style.display = isVisible ? 'none' : 'block'

           event.target.textContent = !isVisible ? 'Hide it' : 'Show more'
        }
    })
    */
