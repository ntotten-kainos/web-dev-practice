import axios, {AxiosResponse} from "axios";
import { OrderResponse } from "../models/OrderResponse";
import { Order } from "../models/Order"

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