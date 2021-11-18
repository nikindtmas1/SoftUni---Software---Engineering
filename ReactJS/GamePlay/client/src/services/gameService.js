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
      headers:{ "Content-Type": "application/json" 
          //'X-Parse-Application-Id': 'GwOuRx9b2yahh6b9Ijtko0EqBnfxxTIWUWTcyBDX',
          //'X-Parse-REST-API-Key': 'WhpWvVDJz4iOciZNlUpqRsvr19DIUCEG7n5ANMvS'
      }
  }

  // const token = sessionStorage.getItem('authToken');

  // if (token != null) {

  //     options.headers['X-Parse-Session-Token'] = token;
  // }

  if (body) {

      options.headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(body);
  }

  return options;

}

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

//const API_URL = 'http://localhost:5000';
//const API_URL = 'https://parseapi.back4app.com/';


