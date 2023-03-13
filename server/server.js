import express from "express";
import cors from "cors";
import fs from "fs";
import nodemailer from "nodemailer";

// https://portfolio-om.herokuapp.com/
//App config
const app = express();
const port = process.env.PORT || 8001;

//Middlewares
app.use(express.json());
app.use(cors());

//API endpoints
app.get("/", (req, res) => res.status(200).send("hello"));
app.post("/contact", (req, res) => {
  const userData = req.body;
  const username = userData.name;
  const email = userData.email;
  const message = userData.message;
  const mail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "satamom254@gmail.com",
      pass: "ydcpkkzqtdwndcqs",
    },
  });
  const mailOptions = {
    from: "satamom254@gmail.com",
    to: "omsatam1005@gmail.com",
    subject: `Recieved message from ${username}`,
    text: `You got a message from ${username} having email id ${email}. and they say ${message}`,
  };
  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(503).send("some error occured");
    } else {
      console.log("email sent: " + info.response);
      res.status(201).send("email sent: " + info.response);
    }
  });
});

app.get("/projects", (req, res) => {
  let projectsJson = fs.readFileSync("./projects.json");
  res.status(200).send(JSON.parse(projectsJson));
});
app.get("/react", (req, res) => {
  let projectsJson = fs.readFileSync("./react.json");
  res.status(200).send(JSON.parse(projectsJson));
});
app.get("/javascript", (req, res) => {
  let projectsJson = fs.readFileSync("./javascript.json");
  res.status(200).send(JSON.parse(projectsJson));
});
app.get("/native", (req, res) => {
  let projectsJson = fs.readFileSync("./native.json");
  res.status(200).send(JSON.parse(projectsJson));
});
app.get("/mern", (req, res) => {
  let projectsJson = fs.readFileSync("./mern.json");
  res.status(200).send(JSON.parse(projectsJson));
});
app.get("/ml", (req, res) => {
  let projectsJson = fs.readFileSync("./ml.json");
  res.status(200).send(JSON.parse(projectsJson));
});
app.get("/html", (req, res) => {
  let projectsJson = fs.readFileSync("./html.json");
  res.status(200).send(JSON.parse(projectsJson));
});
app.get("/django", (req, res) => {
  let projectsJson = fs.readFileSync("./django.json");
  res.status(200).send(JSON.parse(projectsJson));
});

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
