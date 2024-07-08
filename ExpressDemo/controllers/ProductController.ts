import express from "express";
import { getProducts } from "../services/ProductService";

export const getAllProducts = async (req:express.Request, res:express.Response) => {
    res.render('productList.html', { products:await getProducts() })
}