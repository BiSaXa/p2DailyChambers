const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  const pb-posting = client.channels.cache.find(channel => channel.id === 856992133888868392)
  console.log('yeet')
  pb-posting.send('Todays chamber is death.')
})

client.login(process.env.BOT_TOKEN)
