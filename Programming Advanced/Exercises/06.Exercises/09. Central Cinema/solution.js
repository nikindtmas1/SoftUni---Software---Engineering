function solve() {
  let inputs = Array.from(document.querySelectorAll('input'));
    let button = document.querySelector('#container>button');
    
 
    button.addEventListener('click', createMovei);

   

    function createMovei(ev){
        ev.preventDefault();
       let name = inputs[0].value;
       let hall = inputs[1].value;
       let price = inputs[2].value;
       
       if(name !== '' && hall !== '' && price !== '' && isNaN(Number(price)) !== true){
           
            let screenUl = document.querySelector('#movies>ul');
            let elementLi = document.createElement('li');
            let elementSpan = document.createElement('span');
            elementSpan.textContent = name;
            let strongHoll = document.createElement('strong');
            strongHoll.textContent = `Hall: ${ hall }`;
            //div
            let elementDiv = document.createElement('div');
            let elStrongDIv = document.createElement('strong');
            elStrongDIv.textContent = price;
            let elinputDIv = document.createElement('input');
            elinputDIv.setAttribute('placeHolder', 'Ticket Sold');
            let elButtonDiv = document.createElement('button');
            elButtonDiv.textContent = 'Archive';
            elButtonDiv.addEventListener('click', archive);
            
            elementDiv.appendChild(elStrongDIv);
            elementDiv.appendChild(elinputDIv);
            elementDiv.appendChild(elButtonDiv);


            elementLi.appendChild(elementSpan);
            elementLi.appendChild(strongHoll);
            elementLi.appendChild(elementDiv);
            screenUl.appendChild(elementLi);
           
            inputs[0].value = '';
            inputs[1].value = '';
            inputs[2].value = '';
       }
    }

    function archive(ev){

        let btnSec = ev.target.parentNode;
        let liSec = ev.target.parentNode.parentNode;
        let btnClear = document.querySelector('#archive>button');
        btnClear.addEventListener('click', (ev)=>{
            let section = ev.target.parentNode.children[1];
            section.remove();
        });
        //console.log(btnClear);
        let targetPrice = btnSec.children[0].textContent;
        let count = btnSec.children[1].value;

        //console.log(isNaN(Number(count)));
        if(count !== '' && isNaN(Number(count)) !== true){
        let total = Number(targetPrice) * count;
        
        let sectionUl = document.querySelector('#archive>ul');

        let elemenLi = document.createElement('li');
        let elemenSpan = document.createElement('span');
        elemenSpan.textContent = liSec.children[0].textContent;
        let elemenStrong = document.createElement('strong');
        elemenStrong.textContent = `Total amount: ${total.toFixed(2)}`;
        let btnDel = document.createElement('button');
        btnDel.textContent = 'Delete';
        btnDel.addEventListener('click', (ev)=>{
            let el = ev.target.parentNode;

            el.remove();
        });

        elemenLi.appendChild(elemenSpan);
        elemenLi.appendChild(elemenStrong);
        elemenLi.appendChild(btnDel);

        sectionUl.appendChild(elemenLi);

        liSec.remove()
        }
    }
 
}