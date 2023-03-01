import {Role} from'./role'

export interface User{
    id: string;
    firstName: string;
    lastName: string;
    role:Role;
    token:string
}