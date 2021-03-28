import * as api from '../api/api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//specific requests
export async function getMemes(){
    return await api.get(host + '/data/memes/');
}

export async function getMemesById(id){//furniture details
    return await api.get(host + '/data/memes/' + id);
}

// export async function getNumLikes(movieId){
//     return await api.get(host + `/data/likes?where=movieId%3D%22${movieId}%22&amp;distinct=_ownerId&amp;count`);
// }

// export async function getLikeByMovieId(movieId){
//     const userId = sessionStorage.getItem('userId');
//     return await api.get(host + `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
// }

// export async function getMyFurniture(){
//     const userId = sessionStorage.getItem('userId');
//     return await api.get(host + `/data/catalog?where=_ownerId%3D%22${userId}%22`);
// }

export async function createMemes(data){
    return await api.post(host + '/data/memes/',data);
}

// export async function createLike(data){
//     return await api.post(host + '/data/likes',data);
// }

export async function editMemes(id, data){
    return await api.put(host + '/data/memes/' + id, data);
}

export async function deleteMemes(id){
    return await api.del(host + '/data/memes/' + id);
}