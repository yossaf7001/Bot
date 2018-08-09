const Discord = require("discord.js");
var bot = new Discord.Client({ fetchAllMembers: true, disableEveryone: true, autoReconnect: true });
bot.config = require("./config.js");





const log = (msg) => {
    console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${msg}`);
  };
  


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir("./cmd/", (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./cmd/${f}`);
    log(`Loading Command: ${props.help.name}.`);
    bot.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    });
  });
});


bot.on("message", async message => {


    if (!message.content.startsWith(bot.config.prefix)) return;
    let command = message.content.split(" ")[0].slice(bot.config.prefix.length);
    let args = message.content.split(" ").slice(1);
    let perms = bot.elevation(message);
    let cmd;
    if (bot.commands.has(command)) {
      cmd = bot.commands.get(command);
    } else if (bot.aliases.has(command)) {
      cmd = bot.commands.get(bot.aliases.get(command));
    }
    if (cmd) {
      var commandoffembedguild = new Discord.RichEmbed()
      .setTitle('Command Disabled')
      .setDescription("<:error:454318141938597899> The command is disabled by bot owner")  
      .setColor('36393e')
    var guildOnlyembed = new Discord.RichEmbed()
    .setTitle("Guild only")
    .setDescription("<:error:454318141938597899> Sorry but you can use this command in gulid only")
    .setColor('36393e')
    let ops = {
      ownerID: ownerID,
      active: active,
    }
 
        cmd.run(bot, message, args, botownerid, ops);
 
    }
  });
  bot.on("ready", async () => {
  

  
   
    log(`${bot.user.username}: Ready to serve ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
  });
  




bot.on("error", console.error);
bot.on("warn", console.warn);

bot.login(bot.config.token);