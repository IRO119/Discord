const Discord = require("discord.js");

require("dotenv").config();

welcomeIdChannel = "990774765641936916/990774765641936922"


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
});


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});


client.on("messageCreate", (Message) => {
    if(Message.content == "Howdy"){
        Message.reply(`Howdy ${Message.author}`)
    }
})

client.login(process.env.TOKEN)