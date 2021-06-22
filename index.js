const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log('yeet')
})

client.on('message', async(msg) => {
  const pbchannel = await client.channels.cache.find(channel => channel.id === 856992133888868392)
  pbchannel.send(new Discord.MessageEmbed().setColor("#FFFFFF").setAuthor("BSX").setDescription('bruh'))
  .catch(err => console.log(err))
})

client.login(process.env.BOT_TOKEN)
