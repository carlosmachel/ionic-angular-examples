import { Message } from '../../models/messages/message.interface';
import { PROFILE_LIST } from '../profiles/profiles';

const profileList = PROFILE_LIST;
const messageList: Message[] = [];

profileList.forEach(profile => {
    messageList.push({profile: profile, date: new Date(), lastMessage: "Hello"});
});

export const MESSAGE_LIST = messageList;
