async function solution() {

    const respons = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const data = await respons.json();

    let mainSec = document.getElementById('main');

    for (let i = 0; i < data.length; i++) {
        const divAccordeon = document.createElement('div');
        divAccordeon.className = 'accordion';

        const divHead = document.createElement('div');
        divHead.className = 'head';
        const spanEl = document.createElement('span');
        spanEl.textContent = data[i].title;
        const btn = document.createElement('button');
        btn.className = 'button';
        btn.setAttribute('id', 'ee9823ab-c3e8-4a14-b998-8c22ec246bd3');
        btn.textContent = 'More';

        divHead.appendChild(spanEl);
        divHead.appendChild(btn);

        divAccordeon.appendChild(divHead);
        mainSec.appendChild(divAccordeon);

        btn.addEventListener('click', (e) => {

            //if (e.target.className == 'button') 

            btn.textContent = 'Less';
            let currDivHead = e.target.parentElement;
            let currDivAccordeon = e.target.parentElement.parentElement;
            const divExtra = document.createElement('div');
            divExtra.className = 'extra';

            const pEl = document.createElement('p');

            divExtra.appendChild(pEl);
            currDivAccordeon.appendChild(divExtra);
            //console.log(currDivHead.querySelector('span').textContent);

        
            async function textData() {
                const urlData = 'http://localhost:3030/jsonstore/advanced/articles/details';

                const currRes = await fetch(urlData);
                const currData = await currRes.json();

                let arrCurrData = Object.values(currData);

                for (let i = 0; i < arrCurrData.length; i++) {
                    if (arrCurrData[i].title === currDivHead.querySelector('span').textContent) {
                        let currPEl = divExtra.querySelector('p');
                        //console.log(currPEl);
                        currPEl.textContent = arrCurrData[i].content;
                        divExtra.style.display = 'block';
                    }
                }
                //                 const buttParent = butt.parentElement;
                // const buttChild = buttParent.querySelector('button');
                //btn.removeEventListener()
                btn.addEventListener('click', (ev) => {
                    //if(e.target.className === 'button'){
                    btn.textContent = 'More';
                    let currAcordeon = btn.parentElement.parentElement
                    currAccordeon.querySelectorAll('.extra').style.display = 'none';
                    console.log(currAcordeon);
        
                })

            }
            textData()
        })
        
    
    }

   
}
solution()