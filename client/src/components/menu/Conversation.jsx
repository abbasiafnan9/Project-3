
import { Box } from '@material-ui/core';


const Conversation = ({ user }) => {
    return (
        <Box>
            <Box>
                <img src={user.imageUrl} />
            </Box>
        </Box>

    )
}

export default Conversation;