import express from "express";
import { getProducts, getProductByID, createProduct } from "../services/ProductService";


export const getAllProducts = async (req:express.Request, res:express.Response) : Promise<void> => {
    res.render('productList.html', { products:await getProducts() })
}

export const getSingleProduct = async (req:express.Request, res:express.Response) : Promise<void> => {
    res.render('productPage.html', {product:await getProductByID(req.params.id)});
}

export const getProductForm = async (req:express.Request, res:express.Response) : Promise<void> => {
    res.render('productForm.html')
}

export const postProductForm = async (req:express.Request, res:express.Response) : Promise<void> => {
    try {
        const id = await createProduct(req.body);
        res.redirect('/products/' + id);
    } catch(e) {
        res.locals.errormessage = e.message;
        res.render('productForm.html', req.body);
    }
}