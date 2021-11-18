import * as service from '../services/gameService';

//const host = 'https://parseapi.back4app.com/';
const host = 'http://localhost:5000';
service.settings.host = host;

export async function getAll(){
    return await service.get(host + `/games`);
 }
 
 export async function getOne(id){
     return await service.get(host + `/details/${id}`)
     //.then(res => res.json())
 }
 
 export async function create(data){
 
    return await service.post(host + '/games',data);
}

//  export function create(title, category, maxLevel, imageUrl, summary) {
 
//    let game = {
//      title,
//      category,
//      maxLevel,
//      imageUrl,
//      summary
//    }
 
//    let jsonGame = JSON.stringify(game)
//    console.log(jsonGame);
 
//    return fetch(host + `/games`, {
//      method: "POST",
//      headers: { "Content-Type": "application/json" },
//      body: JSON.stringify(game)
//    })
//      //.then(response => response.json())
//  }