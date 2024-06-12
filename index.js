const express = require("express");
const path = require("path");
const fs = require("fs");
const Database = require("./config/database");
const { router } = require("./routers/blog.router");
const cookies = require("cookie-parser");
const { P_Auth } = require("./middleware/blog.auth");
const passport = require('passport');
const session = require('express-session');
const app = express();

app.use(cookies());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads/img", express.static(path.join(__dirname, "/uploads/img")));
app.use(express.static("public"));
P_Auth(passport);
app.use(session({secret:"key"}));
app.use(passport.initialize());
app.use(passport.session());

app.use(router);
app.listen(8081, (err) => {
  Database();
  err
    ? console.log("Some thing went wrong")
    : console.log("sever started on http://localhost:8081 ");
});