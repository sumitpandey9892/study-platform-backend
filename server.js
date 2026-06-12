require("dotenv").config();

const express =
require("express");

const cors =
require("cors");

const connectDB =
require("./config/db");

connectDB();

const app =
express();

app.use(cors());

app.use(express.json());

app.use(
"/api/auth",
require("./routes/authRoutes")
);

app.get(
"/",
(req,res)=>{
 res.send(
    "Study Platform API"
        );
            }
                );

                    app.listen(
                        process.env.PORT,
                            ()=>{
                                 console.log(
                                        "Server Running"
                                                );
                                                        }
                                                                );const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Study Platform API Running");
});

app.get("/courses", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Biology"
    },
    {
      id: 2,
      name: "Physics"
    },
    {
      id: 3,
      name: "Chemistry"
    }
  ]);
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});