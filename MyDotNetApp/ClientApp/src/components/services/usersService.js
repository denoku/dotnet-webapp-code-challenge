import axios from "axios";


const getUser =() =>{
   
    const config = {
        method: 'GET',
        url: "https://api.github.com/users/Denoku",
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const onGlobalSuccess = response => {
    /// Should not use if you need access to anything other than the data
    return response.data;
  };
  
  const onGlobalError = err => {
    return Promise.reject(err);
  };

export default getUser;
