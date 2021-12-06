
import { Dialog, withStyles, Box, makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

// componentimport
import Menu from './menu/Menu';
import Chat from '../chat/Chat';
import EmptyChat from '../chat/EmptyChat';

const useStyles = makeStyles({
    component: {
      display: 'flex'
    },
    leftComponent: {
       minWidth: 380
    },
    rightComponent: {
       borderLeft: `1px solid rgba 0 0 0 0.14`,
       width: '70%',
       minWidth: 300,
       height: '100%',
       
    }
    

})

const style = {
    dialogPaper:{
        height: '90%',
        width: '90%',
      
        boxShadow: 'none',
        maxHeight: '100%',
        maxWidth: '100%',

        // so that we dont get the scroll bar
        overFlow: 'hidden'    
        
    }
}


const ChatBox = ({ classes }) => {
    const classname = useStyles();
    const { person } = useContext(UserContext);
    return (
        <Dialog
          open={true}
          classes={{paper: classes.dialogPaper}}
         >
           <Box className={classname.component}>
               <Box className={classname.leftComponent}>
                   <Menu />

               </Box>
               <Box className={classname.rightComponent}>
                   {
                       Object.keys(person).length ? <Chat /> : <EmptyChat />
                   }
                  
               </Box>
           </Box>
        </Dialog>

    )
}

export default withStyles(style)(ChatBox);