
import { Profile } from "../profile/profile.interface";

export interface Message {
    profile: Profile;
    date: Date;
    lastMessage: string;
}