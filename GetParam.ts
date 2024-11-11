import * as express from "express";

let getvalue: any = express();

let auth = (req: any, res: any, next: any) => {
  let allHeader = req.headers;
  if (allHeader.token === "devanshu") {
    next();
  } else {
    res.status(400).json({ auth: "failed" });
  }
};
// defualt service
getvalue.get("",(req:any,res:any):any=>{
  res.sendFile("D:/5.Code Source/node modulesGetParametersindex.html");
})



getvalue.get("/login",[auth], (req: any, res: any): any => {
  if (req.query.uname === "dev" && req.query.pwd === "dev2") {
    res.status(200).json({ login: "sucessfull" });
  } else {
    res.status(201).json({ login: "failed" });
  }
});

getvalue.listen(8080, () => {
  console.log("server is started at port number is 8080");
});
