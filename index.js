const Discord = require('discord.js')
const client = new Discord.Client()
const monthNames = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"]
const weekNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
var d = new Date();

 function dateOrdinal(d) {
     return d+(31==d||21==d||1==d?"st":22==d||2==d?"nd":23==d||3==d?"rd":"th")
 };

 const reminder = ("It\'s " + weekNames[d.getDay()-1] + " " + monthNames[d.getMonth()+1] + " " + dateOrdinal(d.getDate()) +
"! You know what that means? \nToday\'s chambers are \`fuck and \`portal enjoy! #dailychamber" )

client.on('ready', async(msg) => {
  console.log('yeet')
  const pbchannel = await client.channels.cache.find(channel => channel.id === '856992133888868392')
  pbchannel.send(new Discord.MessageEmbed().setColor("#FFFFFF")
  .setAuthor("Hello there, #pb-posting")
  .setDescription(reminder))
  .catch(err => console.log(err))
})

client.on('message', async(msg) => {

})

client.login(process.env.BOT_TOKEN)
