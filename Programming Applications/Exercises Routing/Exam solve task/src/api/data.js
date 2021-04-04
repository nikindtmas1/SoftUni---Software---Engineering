import * as api from '../api/api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//specific requests
//change url endPoints and names of function!!!
export async function getAllItem(){
    return await api.get(host + '/data/wiki?sortBy=_createdOn%20desc');
}

export async function getHomeItem(){
    return await api.get(host + '/data/wiki?sortBy=_createdOn%20desc&distinct=category');
}

export async function getItemById(id){
    return await api.get(host + `/data/wiki/` + id);
}

// export async function getNumLikes(movieId){
//     return await api.get(host + `/data/likes?where=movieId%3D%22${movieId}%22&amp;distinct=_ownerId&amp;count`);
// }

// export async function getLikeByMovieId(movieId){
//     const userId = sessionStorage.getItem('userId');
//     return await api.get(host + `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
// }

// export async function getMyItems(){
//    const userId = sessionStorage.getItem('userId');
//     return await api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&amp;sortBy=_createdOn%20desc`);
// }

export async function createItem(data){
    return await api.post(host + '/data/wiki',data);
}

// export async function createLike(data){
//     return await api.post(host + '/data/likes',data);
// }

export async function editItem(id, data){
    return await api.put(host + `/data/wiki/` + id, data);
}

export async function deleteItem(id){
    return await api.del(host + `/data/wiki/` + id);
}

export async function search(query){
    return await api.get(host + `/data/wiki?where=title%20LIKE%20%22${query}%22`)//url take not from test
}