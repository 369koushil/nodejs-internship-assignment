import schoolRouter from "./routes/school";
import { Hono } from 'hono';

const app=new Hono();

app.route("api/v1/schools",schoolRouter);


export default app;