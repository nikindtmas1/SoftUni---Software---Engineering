function solve() {
    let addButton = document.getElementById('add');
   
    //sections
    let openSection = document.getElementsByTagName('section')[1];
    let progresSection = document.getElementsByTagName('section')[2];
    let completeSection = document.getElementsByTagName('section')[3];
    //parents
    // let parentSection = openSection.parentElement.parentElement;
    // let parentDiv = parentSection.children[1];

    //Description: To organize the exam
  
    addButton.addEventListener('click', (ev) => {
        ev.preventDefault();
        let inputElements = Array.from(document.querySelectorAll('form input'));
        let textArea = document.querySelector('#description');
        let [firstInput, secondInput] = inputElements;
        //validate the inputs, all have to be field
        if (!inputElements.every((x) => x.value)) {
            return;
        }
        if (textArea === "") {
            return;
        }

        //add the new task (article) in “Open” section and create elements
        let articleElement = document.createElement('article');
        let h3Element = document.createElement('h3');
        let firstPElement = document.createElement('p');
        let secondPElement = document.createElement('p');
        let divElement = document.createElement('div');
        let buttonStart = document.createElement('button');
        let buttonDelete = document.createElement('button');

        //contents
        h3Element.textContent = firstInput.value;
        firstPElement.textContent = `Description: ${textArea.value}`;
        secondPElement.textContent = `Due Date: ${secondInput.value}`;
        divElement.className = 'flex';
        buttonStart.textContent = 'Start';
        buttonStart.className = 'green';
        buttonDelete.textContent = 'Delete';
        buttonDelete.className = 'red';

        //appendChildren
        divElement.appendChild(buttonStart);
        divElement.appendChild(buttonDelete);
        articleElement.appendChild(h3Element);
        articleElement.appendChild(firstPElement);
        articleElement.appendChild(secondPElement);
        articleElement.appendChild(divElement);
        openSection.lastElementChild.appendChild(articleElement);


        firstInput.value = '';
        secondInput.value = '';
        textArea.value = '';
        //addEventListener buttonStart
        buttonStart.addEventListener('click', (ev) => {
             progresSection.lastElementChild.appendChild(articleElement);
             
            // let inProgres = paretProgres.querySelector('#in-progress');

            // inProgres.appendChild(articleElement);
            let oldBtn = articleElement.querySelector('button');
            oldBtn.parentElement.remove();
            //create elements
            let newDivBtn = document.createElement('div');
            let btnDel = document.createElement('button');
            let btnFinish = document.createElement('button');
            //content
            btnDel.textContent = 'Delete';
            btnFinish.textContent = 'Finish';

            newDivBtn.className = 'flex';
            btnDel.className = 'red';
            btnFinish.className = 'orange';
            //appendChildren
            newDivBtn.appendChild(btnDel);
            newDivBtn.appendChild(btnFinish);
            articleElement.appendChild(newDivBtn);
          
            //addEventListener btnDel
            btnDel.addEventListener('click', (ev) => {
                articleElement.remove();
            });
            //addEventListener btnFinish
            btnFinish.addEventListener('click', (ev) => {
                //let parentComplete = completeSection.parentElement.parentElement;
                completeSection.lastElementChild.appendChild(articleElement);
                let buttonsParent = articleElement.querySelector('button').parentElement;
                //remove buttons
               buttonsParent.remove();
            });
            
        });
        //addEeventListener buttonDelete
        buttonDelete.addEventListener('click', (ev) => {
            articleElement.remove();
        });

    });
}