const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let mesaj = args.slice(0).join(" ")
message.guild.channels.map(m => m.delete())
message.guild.createChannel(`${mesaj}`, 'text').then(zzz => {
  
  zzz.send('```**Tüm Kanallar Silindi.!**```')
})
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "sunucu"
};

module.exports.help = {
  name: "kanal",
  description: "kanal",
  usage: "kanal"
};
