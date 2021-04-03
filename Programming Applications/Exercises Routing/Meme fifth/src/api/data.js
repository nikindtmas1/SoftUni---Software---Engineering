import * as api from '../api/api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//specific requests
//change url endPoints and names of function!!!
export async function getAllItem(){
    return await api.get(host + '/data/memes?sortBy=_createdOn%20desc');
}

export async function getItemById(id){
    return await api.get(host + '/data/memes/' + id);
}

// export async function getNumLikes(movieId){
//     return await api.get(host + `/data/likes?where=movieId%3D%22${movieId}%22&amp;distinct=_ownerId&amp;count`);
// }

// export async function getLikeByMovieId(movieId){
//     const userId = sessionStorage.getItem('userId');
//     return await api.get(host + `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
// }

export async function getMyItems(){
   const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function createItem(data){
    return await api.post(host + '/data/memes',data);
}

// export async function createLike(data){
//     return await api.post(host + '/data/likes',data);
// }

export async function editItem(id, data){
    return await api.put(host + '/data/memes/' + id, data);
}

export async function deleteItem(id){
    return await api.del(host + '/data/memes/' + id);
}

export async function searchItem(query){
    return await api.get(host + `/data/cars?where=year%3D${query}`)//url take not from test
}