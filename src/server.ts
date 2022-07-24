import "reflect-metadata" ;

import express from "express";



import AppDataSource from "./database/dataSource";
import { routes } from "./routes";

const app = express();

app.use(routes);

app.listen(3000, () => console.log("server is running"));

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    })


