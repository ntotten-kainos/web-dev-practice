import axios, {AxiosResponse} from "axios";
import { Customer } from "../models/Customer";

export const getAllCustomers = async (): Promise<Customer[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/customer-api/customers");
        return response.data;
    } catch(e) {
        console.log(e);
        throw new Error('Failed to get customers');
    }
}