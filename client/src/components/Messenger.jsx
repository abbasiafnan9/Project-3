
import {AppBar, Toolbar, makeStyles, Box} from '@material-ui/core'
import React, {useContext} from 'react';
import { AccountContext } from '../context/AccountProvider';

import Login from './account/Login';


const useStyles = makeStyles({
    component: {
      backgroung: '#DCDCDC',
      height: '100vh'
    },

    loginHeader:{
      height: 200,
      background:  '#FF6464'
    }
})

const Messenger = ()  => {
    const classes = useStyles();
    const{ account } = useContext(AccountContext)
 return (
     <Box className= {classes.component}>
    <AppBar className={classes.loginHeader}>
        <Toolbar></Toolbar>
    </AppBar>
    <Login />
    </Box>
 )
}

export default Messenger;