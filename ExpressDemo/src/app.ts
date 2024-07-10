import { getLoginForm, getRegistrationForm, postLoginForm, postRegistrationForm } from './../controllers/AuthController';
import { getCustomerByID, getCustomerForm, getCustomers, postCustomerForm } from './../controllers/CustomerController';
import express from "express";
import nunjucks from "nunjucks";
import session from 'express-session';

import { getAllOrders, getSingleOrder, getOrderForm, postOrderForm } from "../controllers/OrderController"
import { dateFilter } from "../filters/DateFilters"
import { getAllProducts, getProductForm, getSingleProduct, postProductForm } from "../controllers/ProductController"

const bodyParser = require('body-parser');

// Express
const app = express();

app.use(session({ secret: 'SUPER_SECRET', cookie: { maxAge: 28800000 } }));
declare module "express-session" {
    interface SessionData {
        token: String;
    }
}

// Nunjucks config
const env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// Add date filter to environment
env.addFilter('date', dateFilter);

// body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

// Port config
app.listen(3000, () => {
    console.log("Server started on port 3000");
});

// Base/test API
app.get('/', async (req: express.Request, res: express.Response) => {
    const names: string[] = ['Gerard', 'Nathan', 'Dan', 'John'];
    res.render('index.html', { names });
});

// Order Endpoints
app.get('/orders', getAllOrders)
app.get('/orderForm', getOrderForm)
app.post('/orderForm', postOrderForm)
app.get('/orders/:id', getSingleOrder)

// Product Endpoints
app.get('/products', getAllProducts)
app.get('/products/:id', getSingleProduct)
app.get('/productForm', getProductForm)
app.post('/productForm', postProductForm)


// Customer Endpoints
app.get('/customers', getCustomers)
app.get('/customers/:id', getCustomerByID)
app.get('/customerForm', getCustomerForm)
app.post('/customerForm', postCustomerForm)

// Authentication
app.get('/loginForm', getLoginForm)
app.post('/loginForm', postLoginForm)
app.get('/registerForm', getRegistrationForm)
app.post('/registerForm', postRegistrationForm)
