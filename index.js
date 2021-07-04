const cron = require('cron')
const Discord = require('discord.js')
const client = new Discord.Client()
const monthNames = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"]
const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const spMaps = ["Portal Carousel", "Portal Gun", "Smooth Jazz", "Cube Momentum", "Future Starter",
 "Secret Panel", "Wakeup", "Incinerator", "Laser Intro", "Laser Stairs", "Dual Lasers", "Laser Over Goo",
 "Catapult Intro", "Trust Fling", "Pit Flings", "Fizzler Intro", "Ceiling Catapult", "Ricochet", "Bridge Intro",
 "Bridge The Gap", "Turret Intro", "Laser Relays", "Turret Blocker", "Laser VS Turret", "Pull The Rug",
 "Column Blocker", "Laser Chaining", "Triple Laser", "Jailbreak", "Escape", "Turret Factory", "Turret Sabotage",
 "Neurotoxin Sabotage", "Core", "Underground", "Cave Johnson", "Repulsion Intro", "Bomb Flings", "Crazy Box",
 "PotatOS", "Propulsion Intro", "Propulsion Flings", "Conversion Intro", "Three Gels", "Test", "Funnel Intro",
 "Ceiling Button", "Wall Button", "Polarity", "Funnel Catch", "Stop The Box", "Laser Catapult", "Laser Platform",
 "Propulsion Catch", "Repulsion Polarity", "Finale 1", "Finale 2", "Finale 3", "Finale 4"]
const mpMaps = ["Doors", "Buttons", "Lasers", "Rat Maze", "Laser Crusher", "Behind The Scenes", "Flings",
 "Infinifling", "Team Retrival", "Vertical Flings", "Catapults", "Multifling", "Fling Crushers", "Industrial Fan",
 "Cooperative Bridges", "Bridge Swap", "Fling Block", "Catapult Block", "Bridge Fling", "Turret Walls",
 "Turret Assasin", "Bridge Testing", "Cooperative Funnels", "Funnel Drill", "Funnel Catch", "Funnel Laser",
 "Cooperative Polarity", "Funnel Hop", "Advanced Polarity", "Funnel Maze", "Turret Warehouse", "Repulsion Jumps",
 "Double Bounce", "Bridge Repulsion", "Wall Repulsion", "Propulsion Crushers", "Turret Ninja", "Propulsion Retrival",
 "Vault Entrance", "Separation", "Triple Axis", "Catapult Catch", "Bridge Gels", "Maintenance", "Bridge Catch",
 "Double Lift", "Gel Maze", "Crazier Box"]

 function dateOrdinal(d) {
     return d+(31==d||21==d||1==d?"st":22==d||2==d?"nd":23==d||3==d?"rd":"th")
 }

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on('ready', () => {
  const guild = client.guilds.cache.get('146404426746167296')
  //guild.members.fetch()
  const roleamount = guild.roles.cache.get(role => role.id === "858387110973538324").members
  console.log('yeet')
  console.log(roleamount.size)
})

const daily = new cron.CronJob('00 00 15 * * *', async(msg) => {
  console.log('sending reminder')
  var d = new Date();
  const pbchannel = await client.channels.cache.find(channel => channel.id === '586983011740942337')
  const reminder = ("It\'s " + weekNames[d.getDay()] + " " + monthNames[d.getMonth()] + " " + dateOrdinal(d.getDate()) +
 "! You know what that means? \nToday\'s chambers are \`" + spMaps[randomNumber(0, 58)] + "\` and \`" + mpMaps[randomNumber(0, 47)] + "\`. \nEnjoy! #dailychamber" )
  pbchannel.send(new Discord.MessageEmbed().setColor("#FFFFFF")
  .setAuthor("Hello there, #pb-posting")
  .setDescription(reminder)
  .setFooter("For notifications, go to #bot-spam and type \'?L role Daily Chambers\'."))
  .catch(err => console.log(err))
  console.log('sent reminder')
  pbchannel.send("> <@&858387110973538324>")
})

daily.start()

client.login(process.env.BOT_TOKEN)
