const API_URL = 'http://localhost:5000';


export function getAll(){
   return fetch(`${API_URL}/games`)
    .then(res => res.json())
}

export function getOne(id){
    return fetch(`${API_URL}/details/${id}`)
    .then(res => res.json())
}

export function create(title, category, maxLevel, imageUrl, summary) {



  //console.log(JSON.stringify(game));

  return fetch(`${API_URL}/games`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      category,
      maxLevel,
      imageUrl,
      summary
    })
  })
    //.then(response => response.json())
}