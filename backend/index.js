import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from './routes/routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express()

const CONNECTION = process.env.ATLAS_URL;
const port = process.env.PORT || 5000;

mongoose.connect( CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log("DB connected!");
      } else {
        console.error(err.message);
      }
    }
  );

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
//usages go here
app.use('/posts', router);


app.listen(port , () => {
  console.log('Server running on port 5000');
});