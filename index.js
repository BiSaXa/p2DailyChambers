const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  pbchannel = client.channels.cache.find(channel => channel.id === 856992133888868392)
  console.log('yeet')
  pbchannel.send('Todays chamber is death.')
})

client.login(process.env.BOT_TOKEN)
