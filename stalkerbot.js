const Discord = require('discord.js');
const { token, prefix } = require('./config.js');
const client = new Discord.Client();
const CSVToJSON = require('csvtojson');
const JSONToCSV = require('json2csv').parse;
const OBJToCSV = require('objects-to-csv')
const fs = require('fs');
const path = 'C:/bots/stalkerbot';


async function writeCSV(data) {
  var csv = (await new OBJToCSV(data));
  console.log(csv);
  csv.toDisk('./locations.csv');
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });
  const result = await promise;
  console.log(result);
}

function getDate() {
  return new Date();
} 

client.once('ready', () => {
    console.log(`${client.user.tag} is online`)
    client.user.setActivity("watching K402")
})


client.on('message', message => {

        if (message.author.bot || !message.content.startsWith(`${prefix}`)) return;
          const args = message.content.slice(prefix.length).split(/ +/);
          const command = args.shift().toLowerCase();

        if(message.content.startsWith(`${prefix}help`)){ 

            message.author.send('_```Stalkerbot stores locations of players on K402 \n\nPrefix = &\n\nUsage &help\n\nAvailable commands:\nhelp, \nadd - adds a user to track (usage: add clan, player name, keep level, xpos, ypos\nall - lists all players currently being tracked \nclan - lists all members being tracked for specified clan (usage: clan <clan name>) \ndel - deletes a player from tracking (usage: del <player name>) \nsearch - searches tracked players by name (usage: search <player name>)```_')
        }

        if(command == 'add'){          

        arr = args.toString();
        arr = arr.split(',,');

        var clan = JSON.stringify(arr[0]);
        var name = JSON.stringify(arr[1]);
        var keep = JSON.stringify(arr[2]);
        var xpos = JSON.stringify(arr[3]);
        var ypos = JSON.stringify(arr[4]);

        clan = clan.toLowerCase().replace(/,/g,'').replace(/"/g, "");
        name = name.toLowerCase().replace(/,/g,' ').replace(/"/g, "");
        keep = keep.toLowerCase().replace(/,/g,'').replace(/"/g, "");
        xpos = xpos.toLowerCase().replace(/,/g,'').replace(/"/g, "");
        ypos = ypos.toLowerCase().replace(/,/g,'').replace(/"/g, "");

        var validClan = (/^([a-z0-9]){3,5}$/.test(clan));
        var validName = (/^([a-z0-9_ ]){3,15}$/.test(name));
        var validKeep = (/^[k]\d{1,2}$/.test(keep));
        var validXpos = (/^[x]\d{1,4}$/.test(xpos));
        var validYpos = (/^[y]\d{1,4}$/.test(ypos));


              if (arr[0] == undefined || validClan == false) {
                message.channel.send("You must enter a valid clan name no more than 5 characters. i.e. alpha, use &all to see examples")
                return;
              }

              else if (arr[1] == undefined || validName == false) {
                message.channel.send("You must enter a valid player name.  Use only alphanumeric characters and must be under 15 characters. Use &all to see examples")
                return;
              }

              else if (arr[2] == undefined || validKeep == false)  {
                message.channel.send("You must enter a valid Keep level. i.e. k15, use &all to see examples")
                return;
              }

              else if (arr[3] == undefined || validXpos == false) {
                message.channel.send("You must enter a valid x position. i.e. x1111, use &all to see examples")
                return;
              }

              else if (arr[4] == undefined || validYpos == false) {
                message.channel.send("You must enter a valid y position. i.e. y1111, use &all to see examples")
                return;
              }

              CSVToJSON().fromFile("./locations.csv").then(source => {
                var index = source.findIndex(obj => obj.name === name);
                // console.log(index);
                if (index == "-1") {
                  var date = getDate();
                  // console.log(date);
                  // const newData = [clan, name, keep, xpos, ypos];
                  var newData = [
                    clan,
                    name,
                    keep,
                    xpos,
                    ypos,
                    date
                  ];
                  // console.log(newData);
                  fs.appendFile('./locations.csv', '\n' + newData, function (err) {
                    if (err) throw err;
                    // console.log('Saved!');
                  });
                  message.channel.send('_```Stalkerbot has updated the list with: \n\n' + clan + ', ' + name + ', ' + keep + ', ' + xpos + ', ' + ypos + '```_');
                  return;
                }
                // else if (index == true) {
                //   message.channel.send('_```Multiple players which one do you want to delete?');
                //   return;
                // }
                else {
                  var removed = [
                      ...source.splice(index, 1),
                  ]
                  console.log(removed);
                  
                  var date = getDate();
                  console.log(date);
                  source.push({
                    "clan": clan,
                    "name": name,
                    "keep": keep,
                    "xpos": xpos,
                    "ypos": ypos,
                    "date": date.toString()
                  });
                  // console.log(source);
                  writeCSV(source);
                  message.channel.send('_```Stalkerbot has updated the list with: \n\n' + clan + ', ' + name + ', ' + keep + ', ' + xpos + ', ' + ypos + '```_');
                }
              })
                   
        }        

        if(command == 'all'){

          CSVToJSON().fromFile("./locations.csv").then((source) => {
            source.sort((a, b) => (a.clan > b.clan)  ? 1 : -1);
            var alltext = source;
            alltext = JSON.stringify(alltext);
            alltext = alltext.slice(2,-2);
            alltext = alltext.replace(/},{/g,'\n');
            alltext = alltext.replace(/"/g, "").replace(/{/g, "").replace(/}/g, "").replace(/,/g, ", ").replace(/clan:/g, "").replace(/name:/g, "").replace(/keep:/g, "").replace(/xpos:/g, "").replace(/ypos:/g, "").replace(/date:/g, "");
            message.channel.send('_```-------------  ALL TRACKING DATA -------------\n\n' + alltext + '```_');
          })
        }

        if(command == 'clan'){

          if (args.length == 0) {
            return message.channel.send("You must enter a clan name to search");;
          }
          const clan = args;
              
          CSVToJSON().fromFile("./locations.csv").then(source => {
                      var found = source.filter(function(v, i){
                      return ((v["clan"] == clan));
                    })              
    
                    found = JSON.stringify(found);

                    if (found == '[]') {
                      message.channel.send('No records for clan named ' + clan + ' were found, use add');
                      return;
                    }

                    found = found.slice(2,-2);
                    found = found.replace(/},{/g,'\n');
                    found = found.replace(/"/g, "").replace(/{/g, "").replace(/}/g, "").replace(/,/g, ", ").replace(/clan:/g, "").replace(/name:/g, "").replace(/keep:/g, "").replace(/xpos:/g, "");
                    found = found.replace(/ypos:/g, "");
    
                    message.channel.send('_```-------------' + clan.toString().toUpperCase() + '------------- \n\n' + found + '```_');
                    return(found);
                  
                    });

        }  

        if(command == 'del'){

          if (args.length == 0) {
            return message.channel.send("You must enter a player name to delete");;
          }

          var user = args.toString();
          user = user.toLowerCase().replace(/,/g,' ');
    
          CSVToJSON().fromFile("./locations.csv").then(source => {
            var index = source.findIndex(obj => obj.name === user);
            if (index == "-1") {
              message.channel.send('_```No player named ' + user + ' was found, try &search```_');
              return;
            }
            var newData = [
                ...source.slice(0, index),
                ...source.slice(index + 1)
            ]
            
            async function writeCSV() {
              const csv = new OBJToCSV(newData);
              await csv.toDisk('./locations.csv');
            }

            writeCSV();

            message.channel.send('_```' + user + ' was deleted successfully.```_');
            return;

          })  
    

        }

        if(command == 'keep'){

          if (args.length == 0) {
            return message.channel.send("You must enter a keep level range to search for (i.e. K15-K17)");
          }
          const user = args;
          var regex = new RegExp(user, "g");
          
          CSVToJSON().fromFile("./locations.csv").then(source => {
              var found = source.filter(function(v, i){
              return ((v["name"].match(regex)));
            })              

            if (found == undefined || found == false) {
              message.channel.send('No records for that player were found, use add');
              return;
            }
            found = JSON.stringify(found);
            found = found.slice(2,-2);
            found = found.replace(/},{/g,'\n');
            found = found.replace(/"/g, "").replace(/{/g, "").replace(/}/g, "").replace(/,/g, ", ").replace(/clan:/g, "").replace(/name:/g, "").replace(/keep:/g, "").replace(/xpos:/g, "").replace(/ypos:/g, "");
    
            message.channel.send('_```Player(s) Found\n\n' + found + '```_');
            });
              
        }        

        if(command == 'search'){


          if (args.length == 0) {
            return message.channel.send("You must enter a player name to search");;
          }

          var user = args;
          user = user.join(" ");
          var regex = new RegExp(user, "g");
          
          CSVToJSON().fromFile("./locations.csv").then(source => {
              var found = source.filter(function(v, i){
              return ((v["name"].match(regex)));
            })              

            if (found == undefined || found == false) {
              message.channel.send('No records for that player were found, use add');
              return;
            }
            found = JSON.stringify(found);
            found = found.slice(2,-2);
            found = found.replace(/},{/g,'\n');
            found = found.replace(/"/g, "").replace(/{/g, "").replace(/}/g, "").replace(/,/g, ", ").replace(/clan:/g, "").replace(/name:/g, "").replace(/keep:/g, "").replace(/xpos:/g, "").replace(/ypos:/g, "");
    
            message.channel.send('_```Player(s) Found\n\n' + found + '```_');
            });
              
        }

        
    })

client.login(token);