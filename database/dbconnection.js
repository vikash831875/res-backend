import mongoose from "mongoose";

export const dbconnection = () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("❌ MONGO_URI is undefined. Check your config.env");
    return;
  }

  mongoose.connect(uri, {
    dbName: "Restaurant",
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err);
  });
};
