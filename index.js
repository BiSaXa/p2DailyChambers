const Discord = require('discord.js')
const client = new Discord.Client()
const monthNames = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"]

 function dateOrdinal(d) {
     return d+(31==d||21==d||1==d?"st":22==d||2==d?"nd":23==d||3==d?"rd":"th")
 };

client.on('ready', async(msg) => {
  console.log('yeet')
  var d = new Date();
  const pbchannel = await client.channels.cache.find(channel => channel.id === '856992133888868392')
  pbchannel.send(new Discord.MessageEmbed().setColor("#FFFFFF")
  .setAuthor("Good morning #pb-posting")
  .setDescription('It\'s ' + monthNames[d.getMonth()+1]) + ' ' + dateOrdinal(d.getDate()))
  .catch(err => console.log(err))
})

client.on('message', async(msg) => {

})

client.login(process.env.BOT_TOKEN)
