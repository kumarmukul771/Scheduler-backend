const mongoose = require("mongoose");

const URI =
  "mongodb+srv://mukul:mukul@mukul.lcc65.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected!..");
};
module.exports = connectDB;
