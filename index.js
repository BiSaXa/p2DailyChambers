const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', async(msg) => {
  console.log('yeet')
  var d = new Date();
  const pbchannel = await client.channels.cache.find(channel => channel.id === '856992133888868392')
  pbchannel.send(new Discord.MessageEmbed().setColor("#FFFFFF")
  .setAuthor("Good morning #pb-posting")
  .setDescription('It\'s ' + d.toLocaleDateString()))
  .catch(err => console.log(err))
})

client.on('message', async(msg) => {

})

client.login(process.env.BOT_TOKEN)
