import "dotenv/config";
import cors from "cors";
import express from "express";
import picturesRouter from "./routes/pictureRoute";

const app = express();
const port = process.env.PORT!;
app.use(cors());

app.use("/api/pictures", picturesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;