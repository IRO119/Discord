const Canvas = require("canvas");

const Discord = require("discord.js");

let background = "./day1.jpg";

const dim = {
  width: 1920,
  height: 1440,
  margin: 50,
};

const generateImage = async (day) => {
  if (day == 0) {
    background = "./motivationalQuotes/DrawingCourse#1.jpg";
  } else if (day == 1) {
    background = "./motivationalQuotes/DrawingCourse#2.jpg";
  } else if (day == 2) {
    background = "./motivationalQuotes/DrawingCourse#3.jpg";
  } else if (day == 3) {
    background = "./motivationalQuotes/DrawingCourse#4.jpg";
  } else if (day == 4) {
    background = "./motivationalQuotes/DrawingCourse#5.jpg";
  } else if (day == 5) {
    background = "./motivationalQuotes/DrawingCourse#6.jpg";
  } else if (day == 6) {
    background = "./motivationalQuotes/DrawingCourse#7.jpg";
  } else if (day == 7) {
    background = "./motivationalQuotes/DrawingCourse#8.jpg";
  }
  const canvas = Canvas.createCanvas(dim.width, dim.height);
  const ctx = canvas.getContext("2d");

  const backimg = await Canvas.loadImage(background);
  ctx.drawImage(backimg, 0, 0);

  ctx.fillStyle = "rgba(0, 0, 0, 0, 0.8)";
  ctx.fillRect(
    dim.margin,
    dim.margin,
    dim.width - 2 * dim.margin,
    dim.height - 2 * dim.margin
  );

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "welcome.png"
  );

  return attachment;
};

module.exports = generateImage;
