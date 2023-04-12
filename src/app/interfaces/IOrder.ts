export interface IOrder {
    cartId: string;
    shippingAddress: {
        street: string;
        city: string;
        state: string;
        country: string;
    }
}