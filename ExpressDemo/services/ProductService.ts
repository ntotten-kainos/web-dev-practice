import axios, {AxiosResponse} from "axios";
import { Product } from "../models/Product";

export const getProducts = async (): Promise<Product[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/product-api/products");
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get products');
    }
}