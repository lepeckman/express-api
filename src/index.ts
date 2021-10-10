// https://developer.okta.com/blog/2018/11/15/node-express-typescript
// https://www.sqlshack.com/setting-up-a-postgresql-database-on-mac/
// https://typeorm.io/#/
import "reflect-metadata";
import express from "express";
import {createConnection} from "typeorm";

createConnection().then(async connection => {
    const app = express();
    const port = 8080; // default port to listen

    // define a route handler for the default home page
    app.get("/", (req, res) => {
        res.send("Hello world!");
    });

    // start the Express server
    app.listen(port, () => {
        // tslint:disable-next-line:no-console
        console.log(`server started at http://localhost:${port}`);
    });
}
)