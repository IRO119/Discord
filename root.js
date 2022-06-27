const Discord = require("discord.js");

require("dotenv").config();

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});


client.on("messageCreate", (Message) => {
    if(Message.content.toLowerCase() == "howdy"){
        Message.reply(`Suck my peen ${Message.author}`)
    }
})

welcomeIdChannel = "990774765641936916/990774765641936922"

client.login(process.env.TOKEN)