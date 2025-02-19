import express from "express";
import cors from "cors";
import mongoose from "mongoose"
import bodyParser from "body-parser";
import listEndpoints from "express-list-endpoints"

import RouteUrls from "./routes/RouteUrls"

import dotenv from 'dotenv'
dotenv.config()

const mongoUrl = process.env.MONGO_URL || "https://libertas-auth.herokuapp.com/";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
// const allowedDomains = ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002", "https://localhost:3001", "https://www.netlify.app", 'https://web.postman.co']
// app.use(cors({
//   origin: (origin, callback) => {
//     if (allowedDomains.includes(origin)) {
//       return callback(null, true)
//     } else {
//       return callback(new Error("domain not allowed"), false)
//     }
//   }
// }));
app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
app.use('/', RouteUrls)

// Start defining your routes here
app.get("/", (req, res) => {
  res.send(listEndpoints(app));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
