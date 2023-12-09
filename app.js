import "dotenv/config";
import session from "express-session";
import express from 'express';
import cors from "cors";
import Hello from "./hello.js"
const app = express()
app.use(cors());
app.use(express.json());
Hello(app)
app.listen(4000)