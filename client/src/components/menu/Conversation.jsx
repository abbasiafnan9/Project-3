
import { Box, Typography, makeStyles} from '@material-ui/core';
import { useContext,useEffect, useState } from 'react';
import { AccountContext} from '../../context/AccountProvider';
import { UserContext } from '../../context/UserProvider';
import { setConversation, getConversation } from '../../service/api'

const useStyles = makeStyles ({
    component:{
        display: 'flex',
        height: 40,
        padding: '14px 0',
        cursor: 'pointer'
    },

    displayPicture: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        padding: '0 14px'
    },
    timestamp: {
        fontSize: 10,
        marginLeft: 'auto',
        marginRight: 20

    },
    text: {
        color: 'rgba(0,0,0,0.6)',
        fontSize: 14
    }
})

const Conversation = ({ user }) => {
    const url = user.imageUrl;
    const classes = useStyles();

    const { account, newMessageFlag } = useContext(AccountContext);
    const { setPerson } = useContext(UserContext);

    const [message, setMessage] = useState({});

    useEffect(() =>{
        const getConversationMessage = async () => {
            const data = await getConversation({ sender: account.googleId, receiver: user.googleId});
            setMessage({ text: data.message, timestamp: data.updatedAt});
        }
        getConversationMessage();

    },[newMessageFlag])

    const setUser = async () => {
        setPerson(user);
       await setConversation({ senderId: account.googleId, receiverId: user.googleId });
       
    }

    return (
        <Box className={classes.component} onClick={()=> setUser()}>
            <Box>
                <img src={url} alt="display" className={classes.displayPicture} />
            </Box>
            <Box style={{width: '100%'}}>
                <Box style={{display: 'flex'}}>
                    <Typography>{user.name}</Typography>
                    {
                        message.text &&
                        <Typography className={classes.timestamp}>
                            {new Date(message.timestamp).getHours()}:{new Date(message.timestamp).getMinutes()}
                        </Typography>
                    }
                </Box>
                <Box>
                    <Typography className={classes.text}>{message.text}</Typography>
                </Box>
            </Box>
        </Box>

    )
}

export default Conversation;