function solve() {

    const sectitions = document.getElementsByTagName('section');
    const divSec = sectitions[0].querySelector('div');
    const formElements = sectitions[1].querySelector('form');

    const buttonAdd = formElements.lastElementChild;

    buttonAdd.addEventListener('click', (ev)=> {
        ev.preventDefault();

        const inputs = formElements.querySelectorAll('input');
        const moduleEl = formElements.querySelector('select');
        
        
        if(inputs[0].value === '' || inputs[1].value === ''){
            return;
        }
        
        if(moduleEl.value === 'Select module'){
            return;
        }
        
        
        const h3El = document.createElement('h3');
        h3El.textContent = moduleEl.value.toUpperCase() + "-MODULE";
        
        const divElement = document.createElement('div');
        divElement.className = 'module';
        divElement.appendChild(h3El);

        const ulElement = document.createElement('ul');
        const liElement = document.createElement('li');
        liElement.className = 'flex';

        const h4El = document.createElement('h4');
        h4El.textContent = `${inputs[0].value} - ${inputs[1].value.split('-').join('/').split('T').join(' - ')}`;

        const btnDel = document.createElement('button');
        btnDel.textContent = 'Del';
        btnDel.className = 'red';

        liElement.appendChild(h4El);
        liElement.appendChild(btnDel);

        let isFind = false;
        const arrH3 = Array.from(divSec.querySelectorAll('h3'));
        for(let i = 0; i < arrH3.length; i++){
            if(arrH3[i].textContent === divElement.querySelector('h3').textContent){
               let parent = arrH3[i].parentElement;
               let getUl = parent.querySelector('ul');
               
               getUl.appendChild(liElement);
               Array.from(getUl.querySelectorAll('li')).sort((a,b) => a.textContent.localeCompare(b.textContent))
               .forEach((line) => {
                   getUl.appendChild(line);
               })
               
               isFind = true;
            }
        }

        if(isFind === false){

            ulElement.appendChild(liElement);
            divElement.appendChild(ulElement);
            divSec.appendChild(divElement);
        }
   
      btnDel.addEventListener('click', (ev)=> {
          let target = ev.currentTarget;
          let parent = target.parentElement;
          let ul = parent.parentElement;
          let div = ul.parentElement;
          parent.remove();
          if(ul.querySelector('li') === null){
            div.remove();
          }
        
      });

    });
}
   

