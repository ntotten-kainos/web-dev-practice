import express from "express";
import nunjucks from "nunjucks";

import { getAllOrders, getSingleOrder } from "../controllers/OrderController"
import { dateFilter } from "../filters/DateFilters"
import { getAllProducts, getSingleProduct } from "../controllers/ProductController"

const app = express();

const env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});

env.addFilter('date', dateFilter);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

app.get('/', async (req: express.Request, res: express.Response) => {
    const names: string[] = ['Gerard', 'Nathan', 'Dan', 'John'];
    res.render('index.html', { names });
});

app.get('/orders', getAllOrders)

app.get('/orders/:id', getSingleOrder)

app.get('/products', getAllProducts)

app.get('/products/:id', getSingleProduct)