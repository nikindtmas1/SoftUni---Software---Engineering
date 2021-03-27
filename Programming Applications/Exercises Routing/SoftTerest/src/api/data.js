import * as api from '../api/api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//specific requests
export async function getIdeas(){
    return await api.get(host + '/data/ideas?select=_id%2Ctitle%2Cimg&amp;sortBy=_createdOn%20desc');
}

export async function getIdeasById(id){//furniture details
    return await api.get(host + '/data/ideas/' + id);
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

export async function createIdea(data){
    return await api.post(host + '/data/ideas',data);
}

// export async function createLike(data){
//     return await api.post(host + '/data/likes',data);
// }

export async function editIdea(id, data){
    return await api.put(host + '/data/ideas/' + id, data);
}

export async function deleteIdea(id){
    return await api.del(host + '/data/ideas/' + id);
}