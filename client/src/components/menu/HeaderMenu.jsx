import { useState, useContext } from 'react';
import { Menu, MenuItem, makeStyles } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { GoogleLogout } from 'react-google-login';
import { clientId } from '../../constants/data';

import { AccountContext } from '../../context/AccountProvider';

const useStyles = makeStyles({
    menuItem: {
        fontSize: 14,
        padding: '15px 60px 5px 24px',
        color: '#4A4A4A'
    },
    border: 'none!important',
    boxShadow: 'none!important'

})

const HeaderMenu = () => {
    const [open, setOpen] = useState(false)
    const { setAccount} = useContext(AccountContext);
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    }
    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const onLogoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setAccount('');
    }


    return (
        <>
            <MoreVert onClick={handleClick}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal:'center'
                }}

            >
                <MenuItem className={classes.menuItem} onClick={handleClose}>Profile</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                    <GoogleLogout
                     clientId={clientId}
                     buttonText="Logout"
                     onLogoutSuccess={onLogoutSuccess}
                     className={classes.logout}
                     >

                    </GoogleLogout >

                </MenuItem>
            </Menu>
        </>
    )
}

export default HeaderMenu;