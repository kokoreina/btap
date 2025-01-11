import express from "express";

// import { handleError } from "./src/common/helpers/error.helper.js";
import rootRouter from "./routers/root.router.js";
// import cors from 'cors'
const app = express();

//middleware giúp phân dãi dử liệu từ json sang đối tượng javascript
app.use(express.json());



app.use(rootRouter)
// app.use(handleError)



app.listen(3069, () => {
  console.log("Sever online at port 3069");
});