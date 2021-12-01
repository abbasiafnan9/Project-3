
import {AppBar, Toolbar, makeStyles, Box} from '@material-ui/core'
import React, {useContext} from 'react';
import { AccountContext } from '../context/AccountProvider';

// Components
import Login from './account/Login';
import ChatBox from './ChatBox';


const useStyles = makeStyles({
    component: {
      background: '#DCDCDC',
      height: '100vh'
    },

    loginHeader:{
      height: 200,
      background:  '#FF6464'
    }
})

const Messenger = ()  => {
    const classes = useStyles();
    const { account } = useContext(AccountContext)
 return (
     <Box className= {classes.component}>
    <AppBar className={classes.loginHeader}>
        <Toolbar></Toolbar>
    </AppBar>
    { account ? <ChatBox/> : <Login /> }
    </Box>
 )
}

export default Messenger;