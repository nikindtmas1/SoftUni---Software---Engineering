function solve() {
  const ulProd = document.querySelector('#products ul');
  const filtertext = document.querySelector('#filter')
  const buttonFilter = document.querySelector('.filter button')
  //console.log(filtertext);
  const addProd = document.querySelectorAll('#add-new input');
  const buttonAddProd = document.querySelector('#add-new button');

  buttonAddProd.addEventListener('click', addSkiItem )
  
  function addSkiItem(ev){
      ev.preventDefault();
   let name = addProd[0].value;
   let quantity = addProd[1].value;
   let price = addProd[2].value;
   //console.log(name, quantity, price);

   const liElement = document.createElement('li');
   const spanElement = document.createElement('span');
   spanElement.textContent = name;
   const strong = document.createElement('strong');
   strong.textContent = `Available: ${quantity}`
   const divElement = document.createElement('div');
   const divStrong = document.createElement('strong');
   divStrong.textContent = price
   const divButton = document.createElement('button');
   divButton.textContent = "Add to client's list";

 //   spanElement.textContent = 'Dinastar Slalom carver'
   divElement.appendChild(divStrong);
   divElement.appendChild(divButton);
    liElement.appendChild(spanElement);
    liElement.appendChild(strong);
    liElement.appendChild(divElement);
   ulProd.appendChild(liElement);

   // buttonFilter.addEventListener('click', () => {

   // }
   
  };


}