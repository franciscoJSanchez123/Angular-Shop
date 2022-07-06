import {CartItem} from './cart-item';
import {User} from './user';

export interface Order{

    _id?:string,
    user:User,
    items:CartItem[],
    total:number,
    status:string
}

