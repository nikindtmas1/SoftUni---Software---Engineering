const API_URL = 'http://localhost:5000/games';


export function getAll(){
   return fetch(`${API_URL}`)
    .then(res => res.json())
}

export function getOne(id){
    return fetch(`${API_URL}/${id}`)
    .then(res => res.json())
}