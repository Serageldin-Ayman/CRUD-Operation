import express from "express";
import bootstrap from "./src/app.controller.js";
const app = express();
const PORT = process.env.PORT;

await bootstrap(app, express);

app.listen(PORT, () => console.log(`app is listining on ${PORT}!`));
