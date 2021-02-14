import axios from 'axios'

export function requestLogin(url,method,data){ 
    const instance = axios.create({
        baseURL:'http://127.0.0.1:8888/api/private/v1',
        timeout:3000
    });
    return instance({ url,method,data  })
}
