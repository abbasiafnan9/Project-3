import { Box, makeStyles, Typography } from "@material-ui/core";
import { useContext } from 'react';

import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
    imageContainer: {
        display : 'flex',
        justifyContent: 'center'
    },
    displayPicture: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        padding: '18px 0'
    },
    nameContainer: {
        background: '#fff',
        padding: '12px 30px 2px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
        '& :first-child': {
            fontSize: 14,
            color: '#FF6464'
        },
        '& :last-child': {
            color: '#4A4A4A',
            margin: '14px 0'
        }
    }
       
})

const Profile =() => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    return(
        <>
        <Box className={classes.imageContainer}>
            <img src={account.imageUrl} alt="dp" className={classes.displayPicture} />

        </Box>
        <Box className={classes.nameContainer}>
            <Typography>Your Name</Typography>
            <Typography>{account.name}</Typography>
        </Box>
        <Box className={classes.nameContainer}>
            <Typography>About</Typography>
            <Typography>Eat, Sleep, Code  And  Repeat!</Typography>
        </Box>
        </>
    )
}

export default Profile;