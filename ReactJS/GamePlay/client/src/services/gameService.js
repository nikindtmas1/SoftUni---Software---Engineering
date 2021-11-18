const API_URL = 'http://localhost:5000';
//const API_URL = 'https://parseapi.back4app.com/';


export function getAll(){
   return fetch(`${API_URL}/games`)
    .then(res => res.json())
}

export function getOne(id){
    return fetch(`${API_URL}/details/${id}`)
    .then(res => res.json())
}

export function create(title, category, maxLevel, imageUrl, summary) {

  let game = {
    title,
    category,
    maxLevel,
    imageUrl,
    summary
  }

  let jsonGame = JSON.stringify(game)
  console.log(jsonGame);

  return fetch(`${API_URL}/games`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(game)
  })
    //.then(response => response.json())
}