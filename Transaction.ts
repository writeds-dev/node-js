import * as express from "express";

let transaction: any = express.Router();

transaction.get("/", (req: any, res: any) => {
  res.status(200).json({ message: "this is trasnactin get request" });
});


export default transaction;