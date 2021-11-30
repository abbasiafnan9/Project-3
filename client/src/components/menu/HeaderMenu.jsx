import { useState, useContext } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { GoogleLogout } from 'react-google-login';
import { clientId } from '../../constants/data';

import { AccountContext } from '../../context/AccountProvider';


const HeaderMenu = () => {
    const [open, setOpen] = useState(false)
    const { setAccount} = useContext(AccountContext);
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>
                    <GoogleLogout
                     clientId={clientId}
                     buttonText="Logout"
                     onLogoutSuccess={onLogoutSuccess}
                     >

                    </GoogleLogout >

                </MenuItem>
            </Menu>
        </>
    )
}

export default HeaderMenu;