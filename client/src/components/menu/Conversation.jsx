
import { Box, Typography, makeStyles} from '@material-ui/core';
import { useContext } from 'react';
import { AccountContext} from '../../context/AccountProvider';
import { UserContext } from '../../context/UserProvider';
import {setConversation } from '../../service/api'

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
    }
})

const Conversation = ({ user }) => {
    const url = user.imageUrl;
    const classes = useStyles();

    const { account } = useContext(AccountContext);
    const { setPerson } = useContext(UserContext);

    const setUser = async () => {
       await setConversation({ senderId: account.googleId, receiverId: user.googleId });
    }

    return (
        <Box className={classes.component} onClick={()=> setUser()}>
            <Box>
                <img src={url} alt="display" className={classes.displayPicture} />
            </Box>
            <Box>
                <Box>
                    <Typography>{user.name}</Typography>
                </Box>
            </Box>
        </Box>

    )
}

export default Conversation;