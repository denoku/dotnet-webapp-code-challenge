import axios from "axios";


const getUser =(username) =>{
   
    const config = {
        method: 'GET',
        url: `https://api.github.com/users/${username}`,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const getAllUsers = () =>{

  const config = {
    method: 'GET',
    url: "https://api.github.com/users",
    crossdomain: true,
    headers: {'Content-Type' : 'application/json'},
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

const usersService = {getUser, getAllUsers}

export default usersService;
