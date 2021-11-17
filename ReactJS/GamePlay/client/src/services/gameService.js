const API_URL = 'http://localhost:5000';


export function getAll(){
   return fetch(`${API_URL}/games`)
    .then(res => res.json())
}

export function getOne(id){
    return fetch(`${API_URL}/details/${id}`)
    .then(res => res.json())
}

export function create(requestOptions){

  return fetch(`${API_URL}/games`, requestOptions)
    //   .then(response => response.json())
}