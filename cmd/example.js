var Discord = require("discord.js");
  exports.run = async (bot, message, args = []) => {

      //here put bot code 


      //here put bot code 


      //here put bot code 




};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""], => here is aliases you can set other command names like inv, sinfo but must be in this way `"NAME1", "NAME2"`
  permLevel: 0
};

exports.help = {
  name: "name", <= command name that will main file see and run it as that name
  description: "description", <= bot des used in help command 
    category: "music", <= category used in help
  usage: "usage" <= how command will work 
};
