import { getAllCustomers } from '../services/CustomerService';
import express from "express";

export const getCustomers = async (req:express.Request, res:express.Response): Promise<void> => {
    res.render('customerList.html', {customers:await getAllCustomers()})
}