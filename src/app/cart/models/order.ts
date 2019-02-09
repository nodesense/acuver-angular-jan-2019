// order.ts
import { CartItem } from './cart-item';

export class Order {
    name: string;
    email: string;
    country: string;
    items: CartItem[];
}
