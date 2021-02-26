function loadRepos() {
   const url = 'URL: https://api.github.com/users/testnakov/repos';
   fetch(url)
   .then(res => res.json())
   .then(data => {
      console.log(data);
   })
}