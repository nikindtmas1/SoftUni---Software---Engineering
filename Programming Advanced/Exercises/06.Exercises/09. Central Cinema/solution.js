function solve() {
  let inputs = Array.from(document.querySelectorAll('input'));
    let button = document.querySelector('button');
    
 
    button.addEventListener('click', createMovei);

    function createMovei(ev){
        ev.preventDefault();
       let name = inputs[0].value;
       let hall = inputs[1].value;
       let price = Number(inputs[2].value);

       if(name !== '' && hall != '' && price != ''){
           if(price != NaN){
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
            elButtonDiv.addEventListener('click', () =>{});
            elementDiv.appendChild(elStrongDIv);
            elementDiv.appendChild(elinputDIv);
            elementDiv.appendChild(elButtonDiv);


            elementLi.appendChild(elementSpan);
            elementLi.appendChild(strongHoll);
            elementLi.appendChild(elementDiv);
            screenUl.appendChild(elementLi);
           }
       }
    }
  
 
}