import { Profile } from "../../models/profile/profile.interface";

const profileList: Profile[] = [
    { firstName: 'Carlos', lastName: 'Machel', email: 'carlos@teste.com', avatar: 'assets/img/avatar.png', dateOfBirth: new Date() },
    { firstName: 'Zé', lastName: 'Ninguém', email: 'ze@teste.com', avatar: 'assets/img/avatar.png', dateOfBirth: new Date() },
    { firstName: 'Fulano', lastName: 'Silva', email: 'fulano@teste.com', avatar: 'assets/img/avatar.png', dateOfBirth: new Date() },
    { firstName: 'Fulana', lastName: 'Antonio', email: 'fulana@teste.com', avatar: 'assets/img/avatar.png', dateOfBirth: new Date() }
];

export const PROFILE_LIST = profileList;