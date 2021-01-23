function search() {

   let townList = document.querySelectorAll('ul#towns li');

   //let input = document.querySelector('input').value.toLowerCase();

   let input = document.getElementById('searchText').value.toLowerCase();

   let result = document.getElementById('result');

   let sum = 0;

   for (let i = 0; i < townList.length; i++) {

      let currTown = townList[i].textContent.toLowerCase();

      if (currTown.includes(input) && input !== '') {

         townList[i].style.fontWeight = 'bold';
         townList[i].style.textDecoration = 'underline';
         sum++

      } else {

         townList[i].style.fontWeight = '';
         townList[i].style.textDecoration = '';

      }

   }

   result.textContent = `${sum} matches found`;

}
//    let lisItems = document.querySelectorAll('ul#towns li');

//    let input = document.querySelector('input').value;

//    let result = document.getElementById('result');

//    let sum = 0;

//    for (const li of lisItems) {
//       if(li.textContent.toLowerCase().includes(input.toLowerCase())){
//          li.style.fontWeight = 'bold';
//          li.style.textDecoration = 'underline'
//          sum++;
//       }else{
//          li.style.fontWeight = '';
//          li.style.textDecoration = '';
//       }
      
//    }

// result.textContent = `${sum} matches found`;

