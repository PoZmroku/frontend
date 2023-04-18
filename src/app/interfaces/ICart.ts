import { ICartItem } from "./ICartItem";

export interface ICart {
    cartId: string;
    userId: string;
    items: ICartItem[];
    totalPrice: number;
    locked: boolean;
}