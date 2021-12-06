import { useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';

import Footer from './Footer';

const useStyles = makeStyles({
    wrapper: {
        backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
        backgroundSize: '50%'
    },
    component: {
        height: '79vh'
    }
});

const Messages = ({ conversation }) => {
    const classes = useStyles();

    const [value, setValue] = useState();

    const sendText = (e) => {
            let code = e.keyCode || e.which
            console.log(value)
            if(!value)return;

            if(code === 13) {

            }
     }

    return ( 
        
       <Box className={classes.wrapper}>
           <Box className={classes.component}>
           Hello
           </Box>
           <Footer sendText={sendText} setValue={setValue} value={value}/>
       </Box>
      
    )
}

export default Messages;








































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































