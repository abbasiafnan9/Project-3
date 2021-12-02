import { useContext, useState} from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Chat } from '@material-ui/icons';

import {AccountContext} from '../../context/AccountProvider';

// componentimport
import HeaderMenu from './HeaderMenu';
import  Drawer from '../drawer/InfoDrawer';



const useStyles = makeStyles ({
    header: {
        height: 35,
        background: '#ededed',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center'
    },
    avatar:{
        height: 38,
        width: 38,
        borderRadius: '50%'
    },
    icons: {
          marginLeft: 'auto',
          '& > *': {
              marginLeft: 2,
              padding: 8,
              color: '#9191919'
          }
    }
})

const Header = ()=> {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const {account} = useContext(AccountContext);

    const toggleDrawer = () => {
        setOpen(true);
    }

    return(
        <>
        <Box className={classes.header}>
            <img src={account.imageUrl} onClick={() => toggleDrawer()} alt="dp" className={classes.avatar} />
            <Box className={classes.icons}>
              <Chat/>
              <HeaderMenu/>
            </Box>
        </Box>
        <Drawer open={open} setOpen={setOpen} />
        </>
    )
}

export default Header;