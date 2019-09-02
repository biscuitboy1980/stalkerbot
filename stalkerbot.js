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
                    message.channel.send('_```-------------' + clan.toString().toUpperCase() + '------------- \n\n' + found + '```_');
                    return(found);
                  
                    });

        }  

        if(command == 'add'){     

          const arr = args;   

              if (arr[0] == undefined) {
                message.channel.send("You must enter a valid clan name no more than 5 characters. i.e. alpha, use &all to see examples")
                return;
              }

              else if (arr[1] == undefined) {
                message.channel.send("You must enter a valid player name.  Do not use special characters or anything just use regular a-z 0-9 characters, use &all to see examples")
                return;
              }

              else if (arr[2] == undefined) {
                message.channel.send("You must enter a valid x position. i.e. x1111, use &all to see examples")
                return;
              }

              else if (arr[3] == undefined) {
                message.channel.send("You must enter a valid y position. i.e. y1111, use &all to see examples")
                return;
              }

              else {

                CSVToJSON().fromFile("./locations.csv").then(source => {

                var clan = JSON.stringify(arr[0]);
                var name = JSON.stringify(arr[1]);
                var xpos = JSON.stringify(arr[2]);
                var ypos = JSON.stringify(arr[3]);
                clan = clan.replace(/,/g,'').replace(/"/g, "");
                name = name.replace(/,/g,'').replace(/"/g, "");
                xpos = xpos.replace(/,/g,'').replace(/"/g, "");
                ypos = ypos.replace(/,/g,'').replace(/"/g, "");

                source.push({
                  "clan": clan,
                  "name": name,
                  "xpos": xpos,
                  "ypos": ypos
                });
              
                const csv = JSONToCSV(source, { fields: ["clan", "name", "xpos", "ypos"] })
                fs.writeFileSync("./locations.csv", csv);
                message.channel.send('_```Stalkerbot has updated the list with: \n\n' + clan + ', ' + name + ', ' + xpos + ', ' + ypos + '```_');
  
              })   
            }   
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
            found = found.replace(/"/g, "").replace(/{/g, "").replace(/}/g, "").replace(/,/g, ", ").replace(/clan:/g, "").replace(/name:/g, "").replace(/xpos:/g, "");
            found = found.replace(/ypos:/g, "");
    
            message.channel.send('_```Player(s) Found\n\n' + found + '```_');
            });
              
        }
    })

client.login(token);