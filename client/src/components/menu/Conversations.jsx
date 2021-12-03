import { useEffect, useState} from 'react';
import { getUsers } from "../../service/api";
import { Box} from '@material-ui/core';

// components import
import Conversation from './Conversation';

const Conversations = ()=> {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
           const data = await getUsers();
           setUsers(data);
        }
        fetchData();
    }, [])


    return(
        <Box>
            {
                users.map(user => (
                   <Conversation user={user} />
                ))
            }
        </Box>
    )
}

export default Conversations;