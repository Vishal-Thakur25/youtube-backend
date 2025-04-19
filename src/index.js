import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
// require("dotenv").config({ path: "./env" });
import connectDb from "./db/index.js";
import { app } from "./app.js";

import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is Running on PORT: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MONGODB Connection Failed ${error}`);
  });

// 1St approach that is not clean coding
// import express from "express";

// const app = express()(async () => {
//   try {
//     mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     app.on("error", (err) => {
//       console.log(err);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is listening on PORT ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// })();
