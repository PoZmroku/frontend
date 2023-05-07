import { ICartItem } from "./ICartItem";

export interface ICart {
    _id: string;
    userId: string;
    items: ICartItem[];
    totalPrice: number;
    locked: boolean;
}
