import express from "express"
import dotenv from "dotenv"
import { dbConnectioncheck } from "./src/utils/dbHealthCheck.js";
import { courseRoute } from "./src/routes/courses.route.js";
import { logger } from "./src/middlewares/logger.middleware.js";
import { enrollRoute } from "./src/routes/enrollment.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(logger);

app.use("/courses", courseRoute);
app.use("/enroll", enrollRoute);


const PORT = process.env.PORT || 5656;

app.listen(PORT , async() =>{

    await dbConnectioncheck();

    console.log(`Server listening to port ${PORT}`);

})