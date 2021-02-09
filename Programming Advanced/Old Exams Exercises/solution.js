function solve() {
  const ulProd = document.querySelector('#products ul');

  const buttonFilter = document.querySelector('.filter button');
  
  const addProd = document.querySelectorAll('#add-new input');
  const buttonAddProd = document.querySelector('#add-new button');

  const h1 = document.querySelectorAll('body h1');

  buttonAddProd.addEventListener('click', addSkiItem );
  
  function addSkiItem(ev){
      ev.preventDefault();
      let arrNames = [];
   let name = addProd[0].value;
   arrNames.push(name);
   let quantity = addProd[1].value;
   let price = addProd[2].value;
   

   const liElement = document.createElement('li');
   const spanElement = document.createElement('span');
   spanElement.textContent = name;
   const strong = document.createElement('strong');
   strong.textContent = `Available: ${quantity}`;
   const divElement = document.createElement('div');
   const divStrong = document.createElement('strong');
   divStrong.textContent = price
   const divButton = document.createElement('button');
   divButton.textContent = "Add to client's list";

 
   divElement.appendChild(divStrong);
   divElement.appendChild(divButton);
    liElement.appendChild(spanElement);
    liElement.appendChild(strong);
    liElement.appendChild(divElement);
   ulProd.appendChild(liElement);

   buttonFilter.addEventListener('click', (e) => {
     let arrLi = Array.from(document.querySelectorAll('#products li span'));
     let filterInput = document.querySelector('.filter input');
     let filterText = filterInput.value.toLowerCase();

    for(let i = 0; i < arrLi.length; i++){

       if(arrLi[i].textContent.toLowerCase().includes(filterText)){
         
      }else{
         arrLi[i].parentNode.style.display = 'none';
         
       }
      }
   })
   
   divButton.addEventListener('click', (ev) => {
    let targetLi = divButton.parentNode.parentNode;
    let targetLiArr = Array.from(targetLi.children);
    //
   
    let newQuantity = Number(targetLiArr[1].textContent.slice(11)) - 1;
    targetLiArr[1].textContent = `Available: ${newQuantity}`;
    //console.log(targetLiArr[1].textContent);
    if(Number(targetLiArr[1].textContent.slice(11)) == 0){
      targetLi.remove()
    }

    const myItems = document.querySelector('#myProducts ul');
    const myLiEl = document.createElement('li');
    const mySpan = document.createElement('span');
    mySpan.textContent = targetLiArr[0].textContent;
    const myStrong = document.createElement('strong');
    myStrong.textContent = targetLiArr[2].children[0].textContent;
    let total = 0;
    total += Number(targetLiArr[2].children[0].textContent) 
    + Number(h1[1].textContent.slice(13));


    mySpan.appendChild(myStrong);
    myLiEl.appendChild(mySpan);
    myItems.appendChild(myLiEl);
    
    
    h1[1].textContent = `Total Price: ${total.toFixed(2)}`;

    const buyButton = document.querySelector('#myProducts button');
    buyButton.addEventListener('click', (ev) => {
     let myProd = document.querySelector('#myProducts ul li');
     myProd.remove()
     //console.log(myProd.children);
      h1[1].textContent = `Total Price: 0.00`;
    });

  });
  };

  

}