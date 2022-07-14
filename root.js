const Discord = require("discord.js");

const cron = require("cron");

const newImg = require("./reWrite");

require("dotenv").config();

const generateImage = require("./welcomeImg");

const rules = require("./rules");

const ruleChannelId = "990774765641936920";

const quoteChannel = "996960057960968212";

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

client.on("ready", async (client) => {
  let days = 0;
  console.log(`Logged in as ${client.user.tag}`);
  //client.channels.cache.get(ruleChannelId).send(rules);

  let scheduledMessage = new cron.CronJob("00 30 11 * * *", async () => {
    if (days < 14) {
      const img = await newImg(days);

      client.channels.cache.get(quoteChannel).send({
        content: `Daily Quote`,
        files: [img],
      });
    }
    if (days >= 14) {
      scheduledMessage.stop();
    }
    days += 1;
  });

  scheduledMessage.start();
});

client.on("messageCreate", (Message) => {
  if (
    Message.content.toLowerCase() == "help i am getting eaten by an aligator"
  ) {
    Message.reply(`Oh man that sucks, too bad ${Message.author}`);
  }
});

const welcomeIdChannel = "990774765641936918";

client.on("guildMemberAdd", async (member) => {
  const img = await generateImage(member);
  member.guild.channels.cache.get(welcomeIdChannel).send({
    content: `<@${member.id}> Welcome to the server!`,
    files: [img],
  });
});

client.login(process.env.TOKEN);
