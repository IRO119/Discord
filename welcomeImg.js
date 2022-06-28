const Canvas = require("canvas");

const Discord = require("discord.js");

const Background = "./welcomeImg.webp"

const dimensions = {
    width: 626,
    height: 417,
    margin: 50
}

const avatar = {
    size: 100,
    x: 313,
    y: 209
}

const generateImage = async (member) => {
    let username = member.user.username;
    let discrm = member.user.discriminator;
    let avatarURL = member.user.displayAvaterURL({format: "png", dynamic: false, size: avatar.size});

    const canvas = Canvas.createCanvas(dimensions.width, dimensions.height);
    const ctx = canvas.getContext("2d");

    const backimg = await Canvas.loadImage(Background);
    ctx.drawImage(backimg, 0, 0)

    ctx.fillStyle = "rbga(0, 0, 0, 0, 0.8)"
    ctx.fillRect(dimensions.margin, dimensions.margin, dimensions.margin - 2 * dimensions.margin, dimensions.height - 2 * dimensions.margin)

    const avimg = await Canvas.loadImage(avatarURL);
    ctx.save();

    ctx.beginPath();
    ctx.arc(avatar.x + avatar.size / 2, avatar.y + avatar.size / 2, avatar.size / 2, 0, Math.PI * 2, true);
    ctx.closePath();

    ctx.drawImage(avatar, avatar.x, avatar.y);

    ctx.restore();

    ctx.fillStyle = "black";
    ctx.textAlign = "center";

    ctx.font = "50px Comic Sans"
    ctx.fillText("Howdy", dimensions.width / 2, dimensions.margin - 3);

    ctx.fillStyle = "white";
    ctx.font = "30px Comic Sans";
    ctx.fillText(username, dimensions.width / 2, dimensions.height - dimensions.margin + 14);

    ctx.font = "20px Comic Sans";
    ctx.fillText("to the server", dimensions.width / 2, dimensions.height - dimensions.margin + 14);
    
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")

    return attachment;
}

module.exports = generateImage