import * as express from "express";
import Transaction from "./Transaction";
import Account from "../Express/Account";

let app: any = express();
app.use("/module1", Transaction);
app.use("/module2", Account);

app.listen(8080, () => {
  console.log("server is started");
});
