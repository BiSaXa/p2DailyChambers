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
 "Turret Assassin", "Bridge Testing", "Cooperative Funnels", "Funnel Drill", "Funnel Catch", "Funnel Laser",
 "Cooperative Polarity", "Funnel Hop", "Advanced Polarity", "Funnel Maze", "Turret Warehouse", "Repulsion Jumps",
 "Double Bounce", "Bridge Repulsion", "Wall Repulsion", "Propulsion Crushers", "Turret Ninja", "Propulsion Retrival",
 "Vault Entrance", "Separation", "Triple Axis", "Catapult Catch", "Bridge Gels", "Maintenance", "Bridge Catch",
 "Double Lift", "Gel Maze", "Crazier Box"]
let oldMaps = []
let oldMapsTesting = []

function dateOrdinal(d) {
  return d+(31==d||21==d||1==d?"st":22==d||2==d?"nd":23==d||3==d?"rd":"th")
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on('ready', () => {
  console.log('yeet')
  client.users.fetch('197648244698775552').then((user) => {
    user.send('bot online')
  })
})

const testing = new cron.CronJob('00 * * * * *', async(msg) => {
  try {
    console.log('sending reminder')
  var d = new Date();
  if (d.getMonth() == 11) {
    var sp = 30
  } else {
    var sp = randomNumber(0, 3)
  }
  var mp = randomNumber(0, 3)
  if (Object.keys(oldMapsTesting).length != 0) {
    for (var map in oldMapsTesting) {
      //map: key
      //oldMapsTesting[map]: value
      if (parseInt(d.getTime() / 60000) - oldMapsTesting[map] > 2) {
        console.log("found old map, deleting")
        delete oldMapsTesting[map]
      }
    }
    var oldsp = false, oldmp = false
    for (var map in oldMapsTesting) {
      if (map == spMaps[sp]) {
        console.log("found same sp")
        oldsp = true
      }
      if (map == mpMaps[mp]) {
        console.log("found same mp")
        oldmp = true
      }
    }
    if (oldsp == false) {
      console.log("found new sp")
      oldMapsTesting[spMaps[sp]] = parseInt(d.getTime() / 60000)
    }
    if (oldmp == false) {
      console.log("found new mp")
      oldMapsTesting[mpMaps[mp]] = parseInt(d.getTime() / 60000)
    }
    while (oldsp) {
      var found = false
      console.log("generated new sp")
      sp = randomNumber(0, 3)
      for (var map in oldMapsTesting) {
        if (map == spMaps[sp]) {
          ("found same sp")
          found = true
        }
      }
      if (!found) {
        console.log("new sp valid, adding to old")
        oldsp = false
        oldMapsTesting[spMaps[sp]] = parseInt(d.getTime() / 60000)
      }
    }
    while (oldmp) {
      var found = false
      console.log("generated new mp")
      mp = randomNumber(0, 3)
      for (var map in oldMapsTesting) {
        if (map == mpMaps[mp]) {
          ("found same mp")
          found = true
        }
      }
      if (!found) {
        console.log("new mp valid, adding to old")
        oldmp = false
        oldMapsTesting[mpMaps[mp]] = parseInt(d.getTime() / 60000)
      }
    }

    /*for (var map in oldMapsTesting) {
      if (map == spMaps[sp]) { // selected map in oldlist
        console.log("selected sp map in oldlist")
        while (map == spMaps[sp]) {
          console.log("picking new sp map")
          sp = randomNumber(0, 3)
        }
      } else {
        console.log("selected sp map valid, adding to old list")
        oldMapsTesting[spMaps[sp]] = parseInt(d.getTime() / 60000)
      }
      if (map == mpMaps[mp]) { // selected map in oldlist
        while (map == mpMaps[mp]) {
          mp = randomNumber(0, 3)
        }
      } else {
        oldMapsTesting[mpMaps[mp]] = parseInt(d.getTime() / 60000)
      }
    }*/
    /*if (oldMapsTesting.includes(spMaps[sp])) {
      while (oldMapsTesting.includes(spMaps[sp])) {
        sp = randomNumber(0, 3)
      }
    } else {
      oldMapsTesting[spMaps[sp]] = parseInt(d.getTime() / 60000)
    }
    if (oldMapsTesting.includes(mpMaps[mp])) {
      while (oldMapsTesting.includes(mpMaps[mp])) {
        mp = randomNumber(0, 3)
      }
    } else {
      oldMapsTesting[mpMaps[mp]] = parseInt(d.getTime() / 60000)
    }*/
    /*
    for (var map in oldMapsTesting) {
      if (map == spMaps[sp]) {
        console.log("map in spmaps[sp]")
        if (parseInt(d.getTime() / 60000) - oldMapsTesting[spMaps[sp]] > 3) {
          delete oldMapsTesting[spMaps[sp]]
          console.log("old map over time limit, deleting")
        } else {
          while (map == oldMapsTesting[sp]) {
            console.log("old map found, rolling new map")
            sp = randomNumber(0, 3)
          }
        }
      } else {
        console.log("map not in spmaps[sp]")
        oldMapsTesting[spMaps[sp]] = parseInt(d.getTime() / 60000)
      }
      if (map == mpMaps[mp]) {
        if (parseInt(d.getTime() / 60000) - oldMapsTesting[mpMaps[mp]] > 3) {
          delete oldMapsTesting[mpMaps[mp]]
        } else {
          while (map == mpMaps[mp]) {
            mp = randomNumber(0, 3)
          }
        }
      } else {
        oldMapsTesting[mpMaps[mp]] = parseInt(d.getTime() / 60000)
      }
    }*/
  } else {
    oldMapsTesting[spMaps[sp]] = parseInt(d.getTime() / 60000)
    oldMapsTesting[mpMaps[mp]] = parseInt(d.getTime() / 60000)
  }
  const pbchannel = await client.channels.cache.find(channel => channel.id === '858391985785012235')
  const reminder = ("It\'s " + weekNames[d.getDay()] + " " + monthNames[d.getMonth()] + " " + dateOrdinal(d.getDate()) +
 "! You know what that means? \nToday\'s chambers are \`" + spMaps[sp] + "\` and \`" + mpMaps[mp] + "\`. \nEnjoy! #dailychamber" )
  pbchannel.send(new Discord.MessageEmbed().setColor("#FFFFFF")
  .setAuthor("Hello there, #pb-posting")
  .setDescription(reminder)
  .setFooter("For notifications, go to #bot-spam and type \'?L role Daily Chambers\'."))
  .catch(err => console.log(err))
  console.log('sent reminder')
  console.log(spMaps[sp] + " and " + mpMaps[mp])
  console.log(oldMapsTesting)
  pbchannel.send("> <@&858387110973538324>")
  } catch (err) {
    console.log(err)
  }
})

const daily = new cron.CronJob('00 00 15 * * *', async(msg) => {
  try {
    console.log('sending reminder')
  var d = new Date();
  if (d.getMonth() == 11) {
    var sp = 30
  } else {
    var sp = randomNumber(0, 58)
  }
  var mp = randomNumber(0, 47)
  if ((d.getMonth() != 11) && Object.keys(oldMaps).length != 0) {
    for (var map in oldMaps) {
      if (map == spMaps[sp]) {
        if (parseInt(d.getTime() / 86400000) - oldMaps[spMaps[sp]] > 6) {
          delete oldMaps.spMaps[sp]
        } else {
          while (map == spMaps[sp]) {
            sp = randomNumber(0, 58)
          }
        }
      } else {
        oldMaps[spMaps[sp]] = parseInt(d.getTime() / 86400000)
      }
      if (map == mpMaps[mp]) {
        if (parseInt(d.getTime() / 86400000) - oldMaps[mpMaps[mp]] > 6) {
          delete oldMaps.mpMaps[mp]
        } else {
          while (map == mpMaps[mp]) {
            mp = randomNumber(0, 47)
          }
        }
      } else {
        oldMaps[mpMaps[mp]] = parseInt(d.getTime() / 86400000)
      }
    }
  } else if (Object.keys(oldMaps).length == 0) {
    oldMaps[spMaps[sp]] = parseInt(d.getTime() / 86400000)
    oldMaps[mpMaps[mp]] = parseInt(d.getTime() / 86400000)
  }
  const pbchannel = await client.channels.cache.find(channel => channel.id === '586983011740942337')
  const reminder = ("It\'s " + weekNames[d.getDay()] + " " + monthNames[d.getMonth()] + " " + dateOrdinal(d.getDate()) +
 "! You know what that means? \nToday\'s chambers are \`" + spMaps[sp] + "\` and \`" + mpMaps[mp] + "\`. \nEnjoy! #dailychamber" )
  pbchannel.send(new Discord.MessageEmbed().setColor("#FFFFFF")
  .setAuthor("Hello there, #pb-posting")
  .setDescription(reminder)
  .setFooter("For notifications, go to #bot-spam and type \'?L role Daily Chambers\'."))
  .catch(err => console.log(err))
  console.log('sent reminder')
  console.log(spMaps[sp] + " and " + mpMaps[mp])
  console.log(oldMaps)
  pbchannel.send("> <@&858387110973538324>")
  } catch (err) {
    console.log(err)
  }
})

daily.start()
testing.start()

client.login(process.env.BOT_TOKEN)