import { useContext} from 'react';
import { Dialog, withStyles, Box, Typography, makeStyles, ListItem, List } from "@material-ui/core";
import { GoogleLogin } from 'react-google-login'
import { AccountContext } from '../../context/AccountProvider';
import { clientId } from '../../constants/data'

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
        maxWidth: '100%',

        // so that we dont get the scroll bar
        overFlow: 'hidden'    
        
    }
}


const Login = ({classes}) => {
    const classname = useStyles();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
   
    const { account, setAccount} = useContext(AccountContext); 
    

    const onLoginSuccess = (res) => {
        console.log('Login Successfull', res.profileObj);
        setAccount(res.profileObj);
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
             <Box style={{position: 'relative'}}>
                  <img src={qrurl} alt='qr' className= {classname.qrCode} />
                  <Box style={{position: 'absolute', left: '50%', top:'50%'}}>
                   <GoogleLogin 
                     clientId={clientId}
                     buttonText=""
                     isSignedIn={true}
                     onSuccess={onLoginSuccess}
                     onFailure={onLoginFailure}
                     cookiePolicy={'single_host_origin'}
                  />
                  </Box>
             </Box>
         </Box>
       </Dialog>
    )
}

export default withStyles(style)(Login);