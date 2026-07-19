const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection Success");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

Chat.insertMany([
  {
    from: "Luffy",
    to: "Zoro",
    message: "Send me the map",
    created_at: new Date(),
  },
  {
    from: "Sanji",
    to: "Nami",
    message: "Dinner is ready",
    created_at: new Date(),
  },
  {
    from: "Zoro",
    to: "Tony",
    message: "Get ready",
    created_at: new Date(),
  },
  {
    from: "Tony",
    to: "Robin",
    message: "Buy me a candy",
    created_at: new Date(),
  },
]).then((res) => {
  console.log(res);
});
