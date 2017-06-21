
import { User } from "../user/user.interface";

export interface Message {
    user: User;
    date: Date;
    lastMessage: string;
}