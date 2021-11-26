
import { Dialog, withStyles, Box, Typography, makeStyles, ListItem, List } from "@material-ui/core";
import { GoogleLogin } from 'react-google-login'

const useStyles = makeStyles({
    component:{
        display: 'flex'

    },
    leftComponent: {
        padding: '56px 0 56px 56px'

    },
    qrCode: {
       height: 260,
       width: 260,
       padding: '50px 0 0 50px'
    },
    title: {
        fontSize: 26,
        marginBottom: 25,
        color: '#525252',
        fontWeight: 300
    }
})

const style = {
    dialogPaper:{
        height: '90%',
        width: '60%',
        marginTop: '12%',
        boxShadow: 'none',
        maxHeight: '100%',
        maxWidth: '100%'
        
    }
}


const Login = ({classes}) => {
    const classname = useStyles();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const clientId = '372606844993-muv8r0js8lh46kv2bksdks1cqsdomh5a.apps.googleusercontent.com';

    const onLoginSuccess = () => {
        console.log('Login Successfull');
    }

    const onLoginFailure = () => {
        console.log('Login Failed');
    }

    return (
       <Dialog
          open={true}
          classes={{paper: classes.dialogPaper}}
          BackdropProps={{style: {backgroundColor: 'unset'}}}
       >
           {/* leftcomponent */}
         <Box className={classname.component}>
             <Box className= {classname.leftComponent}>
                <Typography className={classname.title}>To use GApp on your computer : </Typography>
                <List>
                    <ListItem>1. Open GApp on your phone</ListItem>
                    <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                    <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                </List>
             </Box>
             {/* rightcomponent */}
             <Box>
                  <img src={qrurl} alt='qr' className= {classname.qrCode} />
                  <GoogleLogin 
                  clientId={clientId}
                     buttonText=""
                     isSignedIn={true}
                     onSuccess={onLoginSuccess}
                     onFailure={onLoginFailure}

                     cookiePolicy={'single-host-origin'}
                  />
             </Box>
         </Box>
       </Dialog>
    )
}

export default withStyles(style)(Login);