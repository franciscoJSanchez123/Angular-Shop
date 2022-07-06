
import {CartItem} from './cart-item';
import { Item2 } from './item2';
import {User} from './user';

export interface Order2{

    _id?:string,
    user:User,
    items:Item2[],
    total:number,
    status:string
}