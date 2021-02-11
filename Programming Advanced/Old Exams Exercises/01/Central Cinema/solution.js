function solve() {

    let btnOnSkreen = document.querySelector('#container button');
    let ulSecMovies = document.querySelector('#movies ul');
    let ulSecArchive = document.querySelector('#archive ul');

    btnOnSkreen.addEventListener('click', (ev) => {
        ev.preventDefault();
        let inputs = Array.from(document.querySelectorAll('#container input'));
        let [name, hall, price] = inputs;

        if (name.value === '' || hall.value === '' || price.value === '') {
            return;
        }

        if (isNaN(Number(price.value))) {
            return;
        }

        let liElement = document.createElement('li');
        let spanElement = document.createElement('span');
        let strongElement = document.createElement('strong');
        let divElement = document.createElement('div');

        let divStrong = document.createElement('strong');
        let divInput = document.createElement('input');
        let divBtn = document.createElement('button');


        spanElement.textContent = name.value;
        strongElement.textContent = `Hall: ${hall.value}`;

        divStrong.textContent = Number(price.value).toFixed(2);
        divInput.setAttribute('placeholder', 'Tickets Sold');
        divBtn.textContent = 'Archive';


        divElement.appendChild(divStrong);
        divElement.appendChild(divInput);
        divElement.appendChild(divBtn);

        liElement.appendChild(spanElement);
        liElement.appendChild(strongElement);
        liElement.appendChild(divElement);
        ulSecMovies.appendChild(liElement);

        divBtn.addEventListener('click', (ev) => {
            let parentLi = ev.currentTarget.parentElement.parentElement;
            let countTickets = parentLi.querySelector('input');

            if (countTickets.value === '') {
                return;
            }
            if (isNaN(Number(countTickets.value))) {
                return;
            }

            ulSecArchive.appendChild(parentLi);

            let currPrice = parentLi.querySelector('div strong').textContent;
            let totalSum = (Number(currPrice) * Number(countTickets.value)).toFixed(2);

            let currDiv = parentLi.querySelector('div');
            currDiv.remove();

            let currStrong = parentLi.querySelector('strong');
            currStrong.textContent = `Total amount: ${totalSum}`;

            let btnDelete = document.createElement('button');
            btnDelete.textContent = 'Delete';

            parentLi.appendChild(btnDelete);

            btnDelete.addEventListener('click', (ev) => {
                let deleteLi = ev.currentTarget.parentElement;
                deleteLi.remove();
            });

            let secArchive = document.querySelector('#archive');
            let btnClear = secArchive.lastElementChild;

            btnClear.addEventListener('click', () => {
                let storLi = Array.from(ulSecArchive.children);
                storLi.forEach(element => {
                    element.remove();
                });
            });

        });

        name.value = '';
        hall.value = '';
        price.value = '';

    });
}