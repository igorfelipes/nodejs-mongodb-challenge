import mongoose from "mongoose";

declare global {
  var mongo: any;
}

export const mongoClient = async () => {
  mongoose.connect(
    'mongodb://root:pass123@localhost:27017/nodejs-mongodb-challenge?authSource=admin',
  ).then((data) => {
    // console.log(data)
    console.log('MongoDB connected');
  }).catch((err) => {
    console.log(err);
  });
}



// if (process.env.NODE_ENV !== "production") global.prisma = prisma;
if (process.env.NODE_ENV !== "production") global.mongo = mongoClient;
