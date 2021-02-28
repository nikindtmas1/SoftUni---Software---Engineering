async function lockedProfile() {

    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    const respons = await fetch(url);
    const data = await respons.json();

    let test = document.getElementById('main');
    const mainDivEl = document.querySelector('.profile');

    let arrData = Object.values(data);

    for (let i = 1; i < arrData.length; i++) {
        const clone = mainDivEl.cloneNode(true);
        test.appendChild(clone);
    }

    let arrDiv = Array.from(document.querySelectorAll('.profile'));

    for (let j = 0; j < arrDiv.length; j++) {
        let inputName = arrDiv[j].querySelector('input[type=text]');
        inputName.value = arrData[j].username;
        let inputsEmail = arrDiv[j].querySelectorAll('input[type=email]');
        inputsEmail[0].value = arrData[j].email;
        inputsEmail[1].value = arrData[j].age;

    }

    test.addEventListener('click', function (event) {
    
        const clickName = event.target.tagName

        if (clickName === 'BUTTON') {
            let locked = event.target.parentNode.querySelector('input[type=radio]:checked').value === 'lock';

            if (locked === true) {

            } else {

                let div = event.target.parentNode.querySelector('div');

                let isVisible = div.style.display === 'block';

                div.style.display = isVisible ? 'none' : 'block';
                event.target.textContent = !isVisible ? 'Hide it' : 'Show more';

            }

        }
    });
}