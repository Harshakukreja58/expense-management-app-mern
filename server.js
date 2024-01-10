const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/connectDB");
const path = require("path");

//configer .env
dotenv.config();

//calling database
connectDB();

//rest obj create
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes(user)
app.use("/api/v1/users", require("./routes/userRoute"));

//transaction routes
app.use("/api/v1/transactions", require("./routes/transactionRoute"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port initialize
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
