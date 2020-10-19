var createError = require("http-errors");
const express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
require("dotenv").config();

const api = require("./routes/index");
const userRoute = require("./routes/user");
const memberRoute = require("./routes/member");
const attendanceRoute = require("./routes/attendance");

const { sequelize } = require("./models/index");
const attendance = require("./models/attendance");

const app = express();
sequelize
  .sync()
  .then(() => console.log("DB Connection success."))
  .catch((err) => {
    console.log(" DB Connection Error");
    process.exit();
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("everydayssecret")); //세션 secret과 일치하게적어줘야 한다.
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "everydayssecret",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use("/api", api);
app.use("/user", userRoute);
app.use("/member", memberRoute);
app.use("/attendance", attendanceRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

const port = 3002;
app.listen(port, () => console.log(`Express is listening on port ${port}`));
