const Discord = require("discord.js");

exports.run = (client, message, params) => {
  message.channel.send("Toplu Rol Verildi")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["toplurol"],
  permLevel: 0
};

exports.help = {
  name: "test",
  description: "Sunucuda bulunan tüm üyelere belirtilen rol verilir.",
  usage: "test"
};