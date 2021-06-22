const Discord = require('discord.js')
const client = new Discord.client()

client.on('ready', () => {
  console.log('yeet')
})

client.login(process.env.BOT_TOKEN)
