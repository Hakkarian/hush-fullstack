import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
import express from "express";
import pictureRouter from "./routes/pictureRoute.js";
import basicRouter from "./routes/basicRoute.js";
import { createPicturesTable } from "./config/postgreConfig.js";

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use("/", basicRouter);
app.use("/api/pictures", pictureRouter);

(async () => {
  await createPicturesTable();
})();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
export default app;
