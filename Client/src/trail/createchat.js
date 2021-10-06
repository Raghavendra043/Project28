import axios from 'axios'
import { addData } from '../firebasefunctions/firestore';

export const CreateUser = async (username,name)=>{
    try {
            var data = {
                "username": username,    
                "first_name": name,    
                "last_name": "Project28",    
                "secret": `${username}Project28`    
                };

            var config = {
            method: 'post',
            url: 'https://api.chatengine.io/users/',
            headers: { 
                'PRIVATE-KEY': '7fdd0bae-0192-4afa-bffb-27c8af2d43b8'
            },
            data : data
            };

            const user = await axios(config);
            console.log('User Data: ', JSON.stringify(user.data));
            console.log('done with creation');            
            
    } catch(err){
        console.log(err);
    }
}

export const CreateChat = async (Designer, Client)=>{
        const ProjectName = 'Final Testing';
        var data = {
            "title": ProjectName, 
            "is_direct_chat": false
        };

        var config = {
        method: 'post',
        url: 'https://api.chatengine.io/chats/',
        headers: { 
            'Project-ID': '68a08b56-b99d-4754-85e8-375c862bef48', 
            'User-Name': 'Darthvader', 
            'User-Secret': '123456'
        },
        data : data
        };

        const chat = await axios(config);
        const ChatData = JSON.stringify(chat.data);
        console.log(JSON.stringify(chat.data));
        const ChatID = chat.data.id;
        const accessKey = chat.data.access_key;
        addData('Chat-engine',Designer, {"chatID":ChatID, "client":Client, "accessKey":accessKey } );
        console.log(accessKey, ChatID);
        await AddMembers(ChatID, Designer);
        await AddMembers(ChatID, Client);

}

const AddMembers =  async(ChatID, Username)=>{
    try {
            var data = {
                "username": Username};

            var config = {
                method: 'post',
                url: `https://api.chatengine.io/chats/${ChatID}/people/`,
                headers: { 
                    'Project-ID': '68a08b56-b99d-4754-85e8-375c862bef48', 
                    'User-Name': 'Darthvader', 
                    'User-Secret': '123456'
                },
                data : data
                };

                await axios(config);
    } catch (err){
        console.log(err);
    }
}