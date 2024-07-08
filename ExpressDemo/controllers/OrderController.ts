import express from "express";
import { getOrders } from "../services/OrderService";
import { Axios } from "axios";

export const getAllOrders = async (req:express.Request, res:express.Response) : Promise<void> => {
    res.render('orderList.html', { orders:await getOrders() })
}