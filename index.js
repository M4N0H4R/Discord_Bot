//  I added a comment
// find ,me

/* eslint-disable no-unused-vars */

const Discord = require("discord.js");

const dotenv = require("dotenv");

dotenv.config();

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents });

client.on("ready", () => {
  console.log("ready!");
});

client.on("messageCreate", (msg) => {
  // console.log(msg.content);
  if (msg.content == "hello") {
    msg.reply("hola");
  } else if (msg.content.includes("kingu")) {
    msg.reply("bonguuu");
  }
});

client.login(process.env.TOKEN);
