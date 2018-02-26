const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "415704844221808640") message.reply("I can **shit** on you from such a height, you'll think **God** himself took a crap on you");
});

client.on("message", message => {
  if (message.author.id === "415330227451985920") message.reply("Come on, **assholes.**");
});

client.on("message", message => {
  if (message.author.id === "416418286184431636") message.reply("Don't **bullshit** me.");
});

client.on("message", message => {
  if (message.author.id === "416405151050366976") message.reply("You're a **fast nigga**");
});

client.login(process.env.BOT_TOKEN);
