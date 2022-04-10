import * as koa from "koa";
import "./createConnection.ts";
import hotels_csv from "./hotels_csv";


const app = new koa();

app.use(async ctx => {
    ctx.response.body = await hotels_csv.find();
})

app.listen(process.env.PORT || 3005, () => console.log("orm is running fine"));