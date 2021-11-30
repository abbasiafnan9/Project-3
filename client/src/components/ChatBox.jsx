
import { Dialog, withStyles, Box, makeStyles } from '@material-ui/core';

// componentimport
import Menu from './menu/Menu';

const useStyles = makeStyles({
    component: {
      display: 'flex'
    },
    leftComponent: {
       minWidth: 380
    },
    rightComponent: {
       borderLeft: `1px solid rgba 0 0 0 0.14`
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
    return (
        <Dialog
          open={true}
          classes={{paper: classes.dialogPaper}}
         >
           <box className={classname.component}>
               <box className={classname.leftComponent}>
                   <Menu />

               </box>
               <box className={classname.rightComponent}>

               </box>
           </box>
        </Dialog>

    )
}

export default withStyles(style)(ChatBox);