import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from './routes/routes.js';

const app = express()

mongoose.connect(
    `mongodb+srv://Giabao_2502:giabaobadao@cluster0.dr9t0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
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


app.listen(5000, () => {
	console.log(`Server running hella fine on port 5000`);
});