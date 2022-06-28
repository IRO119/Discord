const Canvas = require("canvas");

const Discord = require("discord.js");

const background = "./welcomeImg.png"

const dim = {
    width: 626,
    height: 417,
    margin: 50
}

const av = {
    size: 256,
    x: 313,
    y: 209
}

const generateImage = async (member) => {

    let username = member.user.username;
    let discrm = member.user.discriminator;
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: false, size: av.size});

    const canvas = Canvas.createCanvas(dim.width, dim.height);
    const ctx = canvas.getContext("2d");

    const backimg = await Canvas.loadImage(background);
    ctx.drawImage(backimg, 0, 0)

    ctx.fillStyle = "rgba(0, 0, 0, 0, 0.8)"
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin)

    const avimg = await Canvas.loadImage(avatarURL);
    ctx.save();

    ctx.beginPath();
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(avimg, av.x, av.y);

    ctx.restore();

    ctx.fillStyle = "black";
    ctx.textAlign = "center";

    ctx.font = "50px Times New Roman"
    ctx.fillText("Howdy", dim.width / 2, dim.margin - 3);

    ctx.fillStyle = "white";
    ctx.font = "30px Times New Roman";
    ctx.fillText(username, dim.width / 2, dim.height - dim.margin + 14);

    ctx.font = "20px Times New Roman";
    ctx.fillText("to the server", dim.width / 2, dim.height - dim.margin + 14);
    
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")

    return attachment;
}

module.exports = generateImage