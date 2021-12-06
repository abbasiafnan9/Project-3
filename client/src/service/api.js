import axios from 'axios';


const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try{
      return await  axios.post(`${URL}/add`, data)

    } catch (error) {
        console.log('Error calling api', error);
    }

}

export const getUsers = async () => {
    try{
     let response =  await  axios.get(`${URL}/users`);
     console.log(response);
     return response.data;

    } catch (error) {
        console.log('Error calling Usersapi',error);
    }

}

export const setConversation = async (data) => {
    try {
        await axios.post(`${URL}/conversation/add`, data);

    } catch (error) {
        console.log('Error while calling setConversation api', error);
    }
}
 export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${URL}/conversation/get`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}

// export const getMessages = async (id) => {
//     try {
//         let response = await axios.get(`${URL}/message/get/${id}`);
//         return response.data
//     } catch (error) {
//         console.log('Error while calling getMessages API ', error);
//     }
// }

// export const newMessages = async (data) => {
//     try {
//         return await axios.post(`${URL}/message/add`, data);
//     } catch (error) {
//         console.log('Error while calling newConversations API ', error);
//     }
// }