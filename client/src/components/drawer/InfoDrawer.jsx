
import {Drawer, Box, Typography, makeStyles} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

// componentImport
import Profile from './Profile';

const useStyles = makeStyles({
    header: {
        background: '#FF6464',
        height: 97,
        color: '#fff',
        display: 'flex',
        '& > *': {
            marginTop: 'auto',
            padding: 12,
            fontWeight: 560
        }

    },
    component: {
        background: '#ededed',
        height: '85%'
    }
})

const InfoDrawer = ({open, setOpen}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Drawer open={open} onClose={handleClose}>
           <Box className={classes.header}>
               <ArrowBack onClick={() => handleClose()} />
               <Typography>Profile</Typography>
           </Box>
           <Box className={classes.component}>
               <Profile/>
           </Box>
        </Drawer>
    )
}

export default InfoDrawer;