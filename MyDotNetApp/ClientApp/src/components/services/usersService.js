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

const getAllUsers = (since, per_page) =>{

  const config = {
    method: 'GET',
    url: `https://api.github.com/users?since=${since}&per_page=${per_page}`,
    crossdomain: true,
    headers: {'Content-Type' : 'application/json'},
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const getUsersRepos = (username) =>{
  const config = {
    method: 'GET',
    url: `https://api.github.com/users/${username}/repos`,
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

const usersService = {getUser, getAllUsers, getUsersRepos}

export default usersService;
