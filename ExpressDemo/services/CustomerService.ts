import { CustomerRequest } from './../models/CustomerRequest';
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

export const createCustomer = async (customer: CustomerRequest) : Promise<Number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/customer-api", customer)
        return response.data;
    } catch(e) {
        console.log(e);
        throw new Error('Unable to create Customer');
    }
}