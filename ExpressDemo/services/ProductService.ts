import axios, {AxiosResponse} from "axios";
import { Product } from "../models/Product";
import { ProductRequest } from "../models/ProductRequest";

export const getProducts = async (): Promise<Product[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/product-api/products");
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get products');
    }
}

export const getProductByID = async (id: String): Promise<Product> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/product-api/" + id);
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get product');
    }
}

export const createProduct = async (product:ProductRequest) : Promise<Number> => {
    try {
         const response: AxiosResponse = await axios.post("http://localhost:8080/product-api", product)
         return response.data;
    } catch(e) {
        console.log(e);
        throw new Error('Failed to create product');
    }
}