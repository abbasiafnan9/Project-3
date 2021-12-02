import axios from 'axios';


const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try{
      return await  axios.post(`${URL}/add`, data)

    } catch (error) {
        console.log('Error calling api',error);
    }

}

export const getUsers = async () => {
    try{
     let response =  await  axios.post(`${URL}/users`);
     console.log(response);
     return response;

    } catch (error) {
        console.log('Error calling Usersapi',error);
    }

}