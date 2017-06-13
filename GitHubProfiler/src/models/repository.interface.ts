import { User } from './user.interface';

export interface Repository {
    name: string;
    description: string;
    owner: User;
}