import { useContext} from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Chat } from '@material-ui/icons';

import AccountProvider, {AccountContext} from '../../context/AccountProvider';
import { mergeClasses } from '@material-ui/styles';

// componentimport
import HeaderMenu from './HeaderMenu';

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
              padding: 8
          }
    }
})

const Header = ()=> {
    const classes = useStyles();
    const {account} = useContext(AccountContext);
    return(
        <Box className={classes.header}>
            <img src={account.imageUrl} alt="display-picture" className={classes.avatar} />
            <Box className={classes.icons}>
              <Chat/>
              <HeaderMenu/>
            </Box>
        </Box>
    )
}

export default Header;