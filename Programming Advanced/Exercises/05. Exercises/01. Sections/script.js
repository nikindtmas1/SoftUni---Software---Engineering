function create(words) {
   const content = document.getElementById('content');

   let inputArr = (words)

   for (const el of inputArr) {

      let div = document.createElement('div');
      let pargraf = document.createElement('p');

      pargraf.textContent = el;
      pargraf.style.display = 'none'
      div.appendChild(pargraf);

      content.appendChild(div);


      //console.log(div);
   }

   content.addEventListener('click', function (ev) {
      if (ev.target.tagName === 'DIV' || ev.target.tagName === 'P') {
         const p = ev.target.children[0] || ev.target;

         const isVisible = p.style.display === 'block';
         p.style.display = isVisible ? 'none' : 'block'
      }
   })
}