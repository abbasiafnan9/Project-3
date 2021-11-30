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
        padding: '10px 16px'
    },
    avatar:{
        height: 38,
        width: 38,
        borderRadius: '50%'
    }
})

const Header = ()=> {
    const classes = useStyles();
    const {account} = useContext(AccountContext);
    return(
        <Box className={classes.header}>
            <img src={account.imageUrl} alt="display-picture" className={classes.avatar} />
            <Box>
              <Chat/>
              <HeaderMenu/>
            </Box>
        </Box>
    )
}

export default Header;