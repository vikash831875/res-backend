import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbconnection} from  "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({path:"./config/config.env"});


// middleware
const allowedOrigins = [
  "http://localhost:5173", // local frontend
  "https://res-frontend-beta.vercel.app", // deployed frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/reservation",reservationRouter)

dbconnection();

app.use(errorMiddleware);

export default app;