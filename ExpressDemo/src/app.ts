import { getCustomerByID, getCustomerForm, getCustomers, postCustomerForm } from './../controllers/CustomerController';
import express from "express";
import nunjucks from "nunjucks";
//import bodyParser from "body-parser";

import { getAllOrders, getSingleOrder, getOrderForm, postOrderForm } from "../controllers/OrderController"
import { dateFilter } from "../filters/DateFilters"
import { getAllProducts, getProductForm, getSingleProduct, postProductForm } from "../controllers/ProductController"
const bodyParser = require('body-parser');

const app = express();

const env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});

env.addFilter('date', dateFilter);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

app.get('/', async (req: express.Request, res: express.Response) => {
    const names: string[] = ['Gerard', 'Nathan', 'Dan', 'John'];
    res.render('index.html', { names });
});

app.get('/orders', getAllOrders)
app.get('/orderForm', getOrderForm)
app.post('/orderForm', postOrderForm)
app.get('/orders/:id', getSingleOrder)

app.get('/products', getAllProducts)
app.get('/products/:id', getSingleProduct)
app.get('/productForm', getProductForm)
app.post('/productForm', postProductForm)

app.get('/customers', getCustomers)
app.get('/customers/:id', getCustomerByID)
app.get('/customerForm', getCustomerForm)
app.post('/customerForm', postCustomerForm)