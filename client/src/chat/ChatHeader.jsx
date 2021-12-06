import { useContext } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { Search, MoreVert } from '@material-ui/icons';

import { UserContext } from '../context/UserProvider';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        height: 35 ,
        background: '#ededed',
        padding: '10px 16px',
        alignItems: 'center'   
    },
    dp: {
        width: 37,
        height: 37,
        borderRadius: '50%',
        padding: '0 2px'
    },
    name: {
        marginLeft: 10
    },
    status: {
        fontSize: 12,
        marginLeft: 10,
        color: 'rgb(0,0,0,0.6)'
    },
    rightContainer: {
        marginLeft: 'auto',
        '& >*': {
            padding: 8,
            fontSize: 22

        }
    }

})

const ChatHeader = () => {
    const classes = useStyles();
    const { person } = useContext(UserContext);

    return (
       <Box className={classes.header}>
           <img src={person.imageUrl} alt="dp" className={classes.dp} />
           <Box>
               <Typography className={classes.name}>{person.name}</Typography>
               <Typography className={classes.status}>Online</Typography>
           </Box>
           <Box className={classes.rightContainer}>
               <Search />
               <MoreVert />

           </Box>

       </Box>
    )
}

export default ChatHeader;