import { OrderRequest } from './../models/OrderRequest';
import { Order } from './../models/Order';
import axios, {AxiosResponse} from "axios";
import { OrderResponse } from "../models/OrderResponse";

export const getOrders = async (): Promise<OrderResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/order-api/orders");
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get orders');
    }
}

export const getOrderByID = async (id:String): Promise<Order> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/order-api/" + id);
        return response.data;    
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get order');
    }
}

export const createOrder = async (order:OrderRequest): Promise<Number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/order-api", order)
        return response.data;
   } catch(e) {
       console.log(e);
       throw new Error('Failed to create order');
   }
}
