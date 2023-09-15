import mongoose from "mongoose";

export const mongoClient = async () => {
  mongoose.connect(
    'mongodb://root:pass123@localhost:27017/nodejs-mongodb-challenge?authSource=admin',
  ).then((data) => {
    console.log('MongoDB connected');
  }).catch((err) => {
    console.log(err);
  });
}
