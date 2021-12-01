
import {Drawer, Box, Typography, makeStyles} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

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
               <ArrowBack />
               <Typography>Profile</Typography>

           </Box>
        </Drawer>
    )
}

export default InfoDrawer;