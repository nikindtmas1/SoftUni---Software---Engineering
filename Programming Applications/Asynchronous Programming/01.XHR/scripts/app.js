function loadRepos() {
   const url = 'https://api.github.com/users/testnakov/repos';

   const divText = document.getElementById('res');
 

   fetch(url)
   .then(res => res.json())
   .then(data => {
     
      divText.textContent = JSON.stringify(data);
      
   });
}