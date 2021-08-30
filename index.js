/* eslint-disable no-unused-vars */
//new line
//old line
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
  if (msg.content) {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://zenquotes.io/api/random",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});

client.login(process.env.TOKEN);
