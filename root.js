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
    if(Message.content.toLowerCase() == "Help I am getting eaten by an aligator"){
        Message.reply(`Oh man that sucks, too bad ${Message.author}`)
    }
})

welcomeIdChannel = "990774765641936916/990774765641936922"

client.login(process.env.TOKEN)