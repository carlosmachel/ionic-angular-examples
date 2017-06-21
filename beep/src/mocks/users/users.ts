import { User } from "../../models/user/user.interface";

const userList: User[] = [
    { firstName: 'Carlos', lastName: 'Machel', email: 'carlos@teste.com', avatar: 'assets/img/avatar.png' },
    { firstName: 'Zé', lastName: 'Ninguém', email: 'ze@teste.com', avatar: 'assets/img/avatar.png' },
    { firstName: 'Fulano', lastName: 'Silva', email: 'fulano@teste.com', avatar: 'assets/img/avatar.png' },
    { firstName: 'Fulana', lastName: 'Antonio', email: 'fulana@teste.com', avatar: 'assets/img/avatar.png' }
];

export const USER_LIST = userList;