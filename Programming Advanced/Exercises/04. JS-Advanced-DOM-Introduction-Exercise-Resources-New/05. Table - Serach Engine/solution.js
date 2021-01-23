function solve() {

   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const rowsArr = document.querySelectorAll('tbody tr');

   function onClick() {

      let input = document.getElementById('searchField').value.toLowerCase();

      for (let i = 0; i < rowsArr.length; i++) {
         let currItem = rowsArr[i];

         if (currItem.textContent.toLocaleLowerCase().includes(input)) {

            currItem.setAttribute('class', 'select');

         } else {

            currItem.removeAttribute('class');
         }
      }
   }

}

   // const rows = document.querySelectorAll('tbody tr');

   // function onClick() {
   //    const input = document.querySelector('#searchField').value.toLowerCase();
      
   //    for(let row of rows){

   //       if(row.textContent.toLowerCase().includes(input)){
   //          row.setAttribute('class','select')
   //       }else{
   //          row.removeAttribute('class')
   //       }
   //    }
   // }
