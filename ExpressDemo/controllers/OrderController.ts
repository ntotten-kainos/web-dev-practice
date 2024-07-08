import express from "express";
import { getOrders } from "../services/OrderService";
import { getOrderByID } from "../services/OrderService";

export const getAllOrders = async (req:express.Request, res:express.Response) : Promise<void> => {
    res.render('orderList.html', { orders:await getOrders() })
}

export const getSingleOrder = async (req:express.Request, res:express.Response) : Promise<void> => {
    res.render('orderDetail.html', { order : await getOrderByID(req.params.id) })
}