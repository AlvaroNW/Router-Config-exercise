import Express, { Router } from "express";
import pkg from "./DB/client.js";
import userRoutes from "./Routes/userRoutes.js";

const app = Express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//middleware
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
