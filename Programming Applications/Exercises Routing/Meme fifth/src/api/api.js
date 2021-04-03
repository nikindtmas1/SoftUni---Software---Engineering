export const settings = {
    host:''
};

export async function request(url,options){
    try{
    const response = await fetch(url,options);

    if(response.ok == false){
        const error = await response.json();
        throw new Error(error.message);
    }

    try{
    const data = await response.json();

    return data;
    }catch(error){
        return response;
    }

    }catch(error){
        alert(error.message);
        throw error
    }
}

function getOption(method = 'get',body){

    const options = {
        method,
        headers:{}
    }

    const token = sessionStorage.getItem('authToken');

    if (token != null) {

        options.headers['X-Authorization'] = token;
    }

    if (body) {

        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;

}

//univers requests
export async function get(url){
  return  await request(url,getOption());
}

export async function post(url,data){
    return await request(url,getOption('post',data));
}

export async function put(url,data){
    return await request(url,getOption('put',data));
}

export async function del(url){
    return await request(url,getOption('delete'));
}


//change url endPoints and email,password, username, gender!!!
//username,email,password, gender - options
export async function login(email,password){
    const result = await post(settings.host + '/users/login', {email,password});

    sessionStorage.setItem('email',result.email);
    sessionStorage.setItem('username',result.username);
    sessionStorage.setItem('gender',result.gender);
    sessionStorage.setItem('authToken',result.accessToken);
    sessionStorage.setItem('userId',result._id);

    return result;
}

//change url endPoints and email,password, username, gender!!!
//username,email,password, gender - options
export async function register(username,email,password,gender){
    const result = await post(settings.host + '/users/register', {username,email,password,gender});//username,email,password, gender - options

    sessionStorage.setItem('email',result.email);
    sessionStorage.setItem('username',result.username);
    sessionStorage.setItem('gender',result.gender);
    sessionStorage.setItem('authToken',result.accessToken);
    sessionStorage.setItem('userId',result._id);
   
    
    return result;
}

//change url endPoints and remove item that set in register and login!!!
export async function logout(){
    const result = await get(settings.host + '/users/logout');

    sessionStorage.removeItem('email');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('gender');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
    
    return result;
}
