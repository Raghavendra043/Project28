import axios from 'axios'
import { addData, Update } from '../firebasefunctions/firestore';

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
            return JSON.stringify(user.data);
            
    } catch(err){
        console.log(err);
    }
}

export const CreateChat = async (Designer, Client, title)=>{
        //const ProjectName = 'Final Testing';
        var data = {
            "title": title, 
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
        const chat1 = await axios(config);
        const chat2 = await axios(config);

        const ChatData = JSON.stringify(chat.data);
        console.log(JSON.stringify(chat.data));

        const ChatID = chat.data.id;
        const ChatID1 = chat1.data.id;
        const ChatID2 = chat2.data.id;

        const accessKey = chat.data.access_key;
        const accessKey1 = chat1.data.access_key; // only client 
        const accessKey2 = chat2.data.access_key; // only designer

        const data23 = {
            client:{"chatID":ChatID1, "accessKey":accessKey1 },
            designer:{"chatID":ChatID2,"accessKey":accessKey2 },
            admin:{"chatID":ChatID, "accessKey":accessKey }
        }

        // addData('Chat-engine',Designer, {"chatID":ChatID, "client":Client,"designer":Designer,"accessKey":accessKey } ).then(()=>{})
        // addData('Chat-engine',Designer, {"chatID":ChatID1, "client":Client,"accessKey":accessKey1 } ).then(()=>{})
        // addData('Chat-engine',Designer, {"chatID":ChatID2, "designer":Designer,"accessKey":accessKey2 } ).then(()=>{})

        Update('Projects', title, {chatData:data23}).then(()=>{})

        console.log(accessKey, ChatID);
        await AddMembers(ChatID, Designer);
        await AddMembers(ChatID, Client);

        await AddMembers(ChatID1, Client);

        await AddMembers(ChatID2, Designer);

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