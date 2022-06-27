const Discord = require("discord.js");

require("dotenv").config();

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "MESSAGE_CREATE"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});


client.on("messageCreate", (Message) => {
    if(Message.content.toLowerCase() == "howdy"){
        Message.reply(`Howdy ${Message.author}`)
    }
})

welcomeIdChannel = "990774765641936916/990774765641936922"

client.login(process.env.TOKEN)