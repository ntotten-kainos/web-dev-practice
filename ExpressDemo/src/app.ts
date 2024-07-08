import express from "express";
import nunjucks from "nunjucks";

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

app.get('/', async (req: express.Request, res: express.Response) => {
    const names: string[] = ['Gerard', 'Nathan', 'Dan', 'John'];
    res.render('index.html', { names });
});