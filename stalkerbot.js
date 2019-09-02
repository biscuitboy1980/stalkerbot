const Discord = require('discord.js');
const { token, prefix } = require('./config.js');
const client = new Discord.Client();
const CSVToJSON = require('csvtojson');
const JSONToCSV = require('json2csv').parse;
const fs = require('fs');
const path = 'C:/bots/stalkerbot';


client.once('ready', () => {
    console.log(`${client.user.tag} is online`)
    client.user.setActivity("watching K402")
})


client.on('message', message => {

        if (message.author.bot || !message.content.startsWith(`${prefix}`)) return;
          const args = message.content.slice(prefix.length).split(/ +/);
          const command = args.shift().toLowerCase();

        if(message.content.startsWith(`${prefix}help`)){ 

            message.author.send('_```Stalkerbot stores locations of players on K402 \n\nPrefix = &\n\nUsage &help\n\nAvailable commands:\nhelp, \nadd - adds a user to track (usage: add clan, player name, xpos, ypos\nall - lists all players currently being tracked \nclan - lists all members being tracked for specified clan (usage: clan <clan name>) \ndel - deletes a player from tracking (usage: del <player name>) \nsearch - searches tracked players by name (usage: search <player name>)```_')
        }


        if(command == 'clan'){

          const clan = args;
              
          CSVToJSON().fromFile("./locations.csv").then(source => {
                      var found = source.filter(function(v, i){
                      return ((v["clan"]== clan));
                    })              
    
                    if (found == undefined) {
                      message.channel.send('No records for that clan were found, use add');
                      return;
                    }
                    found = JSON.stringify(found);
                    found = found.slice(2,-2);
                    found = found.replace(/},{/g,'\n');
                    found = found.replace(/"/g, "").replace(/{/g, "").replace(/}/g, "").replace(/,/g, ", ").replace(/clan:/g, "").replace(/name:/g, "").replace(/xpos:/g, "");
                    found = found.replace(/ypos:/g, "");
    
                    console.log(clan);
                    // message.channel.send('_```\n\n' + found + '```_');
                    message.channel.send('_```-------------' + clan.toString().toUpperCase() + '------------- \n\n' + found + '```_');
                    return(found);
                  
                    });

        }  

        if(command == 'add'){

          const arr = args;
          arr
          console.log(arr);
          console.log(arr[0]);
          console.log(arr[1]);
          console.log(arr[2]);
          console.log(arr[3]);

              CSVToJSON().fromFile("./locations.csv").then(source => {

              source.push({
                "clan": arr[0],
                "name": arr[1],
                "xpos": arr[2],
                "ypos": arr[3]
              });
            
              const csv = JSONToCSV(source, { fields: ["clan", "name", "xpos", "ypos"] })
              fs.writeFileSync("./locations.csv", csv);
              message.channel.send('_```Stalkerbot has updated the list with: \n\n' + arr[0] + ', ' + arr[1] + ', ' + arr[2] + ', ' + arr[3] + '```_');

              })
        }        

        if(command == 'all'){

          CSVToJSON().fromFile("./locations.csv").then((source) => {
            source.sort((a, b) => (a.clan > b.clan)  ? 1 : -1);
            console.log(source);
            var alltext = source;
            alltext = JSON.stringify(alltext);
            alltext = alltext.slice(2,-2);
            alltext = alltext.replace(/},{/g,'\n');
            alltext = alltext.replace(/"/g, "").replace(/{/g, "").replace(/}/g, "").replace(/,/g, ", ").replace(/clan:/g, "").replace(/name:/g, "").replace(/xpos:/g, "");
            alltext = alltext.replace(/ypos:/g, "");
            message.channel.send('_```-------------  ALL TRACKING DATA -------------\n\n' + alltext + '```_');
          })
        }

        if(command == 'search'){

                const user = args.toString();

                CSVToJSON().fromFile("./locations.csv").then(source => {
                  var found = source.includes(source => source.name === user);

                  if (found == undefined || found == false) {
                    message.channel.send('Player not found, use add');
                    return;
                  }

                  found = JSON.stringify(found);
                  found = found.replace(/"/g, "");
                  found = found.replace(/{/g, "");
                  found = found.replace(/}/g, "");
                  found = found.replace(/,/g, ", ");
                  found = found.replace(/clan:/g, "");
                  found = found.replace(/name:/g, "");
                  found = found.replace(/xpos:/g, "");
                  found = found.replace(/ypos:/g, "");

                  message.channel.send(found);
                  return(found);
                
                  });
              
        }
    })

client.login(token);