import { AxiosResponse } from 'axios';
import { createCustomer, getAllCustomers, getCustomer } from '../services/CustomerService';
import express from "express";

export const getCustomers = async (req:express.Request, res:express.Response): Promise<void> => {
    res.render('customerList.html', {customers:await getAllCustomers()})
}

export const getCustomerForm = async (req:express.Request, res:express.Response): Promise<void> => {
    res.render('customerForm.html');
}

export const postCustomerForm = async (req:express.Request, res:express.Response): Promise<void> => {
    try {
        const id = await createCustomer(req.body);
        res.redirect('/customers');
    } catch(e) {
        res.locals.errormessage = e.message;
        res.render('customerForm.html', req.body);
    }
}

export const getCustomerByID = async (req:express.Request, res:express.Response): Promise<void> => {
    res.render('customerDetails.html', { customer: await getCustomer(req.params.id) });
}