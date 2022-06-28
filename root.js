const Discord = require("discord.js");

require("dotenv").config();

const generateImage = require("./welcomeImg")

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
    if(Message.content.toLowerCase() == "help i am getting eaten by an aligator"){
        Message.reply(`Oh man that sucks, too bad ${Message.author}`)
    }
})

const welcomeIdChannel = "990774765641936916/990774765641936918"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeIdChannel).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})
client.login(process.env.TOKEN)