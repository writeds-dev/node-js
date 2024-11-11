import * as express from "express";

import * as bodyparser from "body-parser";

let app: any = express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false }));

// auth

let auth: any = (req: any, res: any, next: any): any => {
  let allHeader = req.headers;
  let token = allHeader.token;
  if (token === "node js ") {
    next();
  } else {
    res.status(200).josn({ auth: "failed" });
  }
};

// authenticaion
app.post("/login", [auth], (req: any, res: any): any => {
  if (req.body.uname === "admin" && req.body.pwd === "123") {
    res.status(200).json({ login: "sucessfull" });
  } else {
    res.status(201).json({ login: "failed" });
  }
});

app.listen(8080, () => {
  console.log("server is started");
});
