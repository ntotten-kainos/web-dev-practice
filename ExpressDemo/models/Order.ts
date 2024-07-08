import { Customer } from "./Customer";

export type Order = {
    orderID: Number,
    orderDate: Date,
    customer: Customer
}