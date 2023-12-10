import "dotenv/config";
import session from "express-session";
import express from 'express';
import mongoose from "mongoose";
import LikesRoutes from "./likes/routes.js";
import FollowsRoutes from "./follows/routes.js";
import UserRoutes from "./users/routes.js";
import Hello from "./hello.js"
import cors from "cors";

const CONNECTION_STRING =
  process.env.REACT_APP_DB_CONNECTION_STRING ||
  "mongodb://127.0.0.1:27017/kanbas";

  mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors({
    credentials: true,
    //origin: "http://localhost:3000",
    origin: process.env.FRONTEND_URL,
  }

));

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  
  app.use(session(sessionOptions));

app.use(express.json());

FollowsRoutes(app);
LikesRoutes(app);
UserRoutes(app);
Hello(app)

//app.listen(4000)
app.listen(process.env.PORT || 4000);