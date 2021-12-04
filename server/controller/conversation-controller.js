import Conversation from "../model/conversation.js";


export const newConversation = async (request, response ) => {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;
    try {

        const exist = await Conversation.finOne({ members: {$all: [receiverId, senderId]}});

        if(exist) {
            response.status(200).json('conversation already exist');
            return;
        }
       const newConversation = new Conversation({
            members: [senderId, receiverId]
        })
        await newConversation.save();
        response.status(200).json('successfull convo');

    } catch (error) {
        response.status(500).json(error);
    }
}