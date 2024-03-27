const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Hello! Welcome back!")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})

let Discord = require("discord.js")
let client = new Discord.Client()


client.on('ready', () => {
 client.user.setActivity(`2.0.1 CosmoS Menu🌌`, { type: 'PLAYING'})
})
token = Bot(token=os.environ.get('TOKEN'))
client.login(process.env.token);
