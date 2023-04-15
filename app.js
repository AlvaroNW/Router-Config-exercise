import Express, { Router } from "express";
import pkg from "./DB/client.js";
import userRoutes from "./Routes/userRoutes.js";
import bodyParser from "body-parser";

const app = Express();
app.use(bodyParser.json());
const port = 3000;


app.get("/", (req, res) => {
    res.send("Hello World!");
});

//middleware

app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
