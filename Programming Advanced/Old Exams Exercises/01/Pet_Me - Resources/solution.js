function solve() {

    let addButton = document.querySelector('#container button');
    let ulElement = document.querySelector('#adoption ul');
    let ulAdopted = document.querySelector('#adopted ul');
    let inputItems = Array.from(document.querySelectorAll('#container input'));
    let [inputName, inputAge, inputKind, inputOwner] = inputItems;
    //addEventListener
    addButton.addEventListener('click', (ev) => {
        ev.preventDefault();
        //check empty inputs and age is number
        if (!inputItems.every((x) => x.value)) {
            return;
        }

        if (isNaN(Number(inputAge.value))) {
            return;
        }
        //create elements
        let liElement = document.createElement('li');
        let pElement = document.createElement('p');
        let spanElement = document.createElement('span');
        let btnContact = document.createElement('button');
        //textContent
        pElement.innerHTML = `<strong>${inputName.value}</strong> is a <strong>${inputAge.value}</strong> year old <strong>${inputKind.value}</strong>`;
        spanElement.textContent = `Owner: ${inputOwner.value}`;
        btnContact.textContent = 'Contact with owner'
        //appendChildren
        liElement.appendChild(pElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(btnContact);

        ulElement.appendChild(liElement);
        //clear inputs
        inputName.value = '';
        inputAge.value = '';
        inputKind.value = '';
        inputOwner.value = '';

        //addEventListener on btnContact
        btnContact.addEventListener('click', (e) => {
            e.currentTarget.remove();
            //create divElement, input(pleaceHolder), button
            let divElement = document.createElement('div');
            let inputElement = document.createElement('input');
            let btnTakeIt = document.createElement('button');
            //textContent
            inputElement.setAttribute('placeholder', 'Enter your names');
            btnTakeIt.textContent = 'Yes! I take it!';
            //appendChildren
            divElement.appendChild(inputElement);
            divElement.appendChild(btnTakeIt);
            liElement.appendChild(divElement);

            btnTakeIt.addEventListener('click', newHome)
        });

        function newHome(e) {
            let currantButton = e.currentTarget.parentElement;
            let currantInput = currantButton.querySelector('input');
            //move currant item to new home - adopted section
            if (currantInput.value !== '') {
                let newLiElement = currantButton.parentElement;
                let oldOwner = newLiElement.querySelector('span');
                let newOwner = currantInput.value;

                oldOwner.textContent = `New Owner: ${newOwner}`;

                ulAdopted.appendChild(newLiElement);
                currantButton.remove();
                //create new button
                let checkedButton = document.createElement('button');

                checkedButton.textContent = 'Checked';

                newLiElement.appendChild(checkedButton);

                checkedButton.addEventListener('click', (e) => {
                    newLiElement.remove();
                });
            }
        }
    });


}



