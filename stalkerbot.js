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

            message.author.send('_```Stalkerbot stores locations of players on K402 \n\nPrefix = &\n\nUsage &help\n\nAvailable commands:\nhelp, \nadd - adds a user to track (usage: add clan, player name, keep level, xpos, ypos\nall - lists all players currently being tracked \nclan - lists all members being tracked for specified clan (usage: clan <clan name>) \ndel - deletes a player from tracking (usage: del <player name>) \nplayer - searches tracked players by name (usage: search <player name>)```_')
        }

        if(command == 'add'){     

        arr = args.toString();
        arr = arr.split(',,');           

              if (arr[0] == undefined) {
                message.channel.send("You must enter a valid clan name no more than 5 characters. i.e. alpha, use &all to see examples")
                return;
              }

              else if (arr[1] == undefined) {
                message.channel.send("You must enter a valid player name.  Do not use special characters or anything just use regular a-z 0-9 characters, use &all to see examples")
                return;
              }

              else if (arr[2] == undefined) {
                message.channel.send("You must enter a valid Keep level. i.e. k15, use &all to see examples")
                return;
              }

              else if (arr[3] == undefined) {
                message.channel.send("You must enter a valid x position. i.e. x1111, use &all to see examples")
                return;
              }

              else if (arr[4] == undefined) {
                message.channel.send("You must enter a valid y position. i.e. y1111, use &all to see examples")
                return;
              }

              else {

                CSVToJSON().fromFile("./locations.csv").then(source => {

                var clan = JSON.stringify(arr[0]);
                var name = JSON.stringify(arr[1]);
                var keep = JSON.stringify(arr[2]);
                var xpos = JSON.stringify(arr[3]);
                var ypos = JSON.stringify(arr[4]);
                clan = clan.replace(/,/g,'').replace(/"/g, "");
                name = name.replace(/,/g,' ').replace(/"/g, "");
                keep = keep.replace(/,/g,'').replace(/"/g, "");
                xpos = xpos.replace(/,/g,'').replace(/"/g, "");
                ypos = ypos.replace(/,/g,'').replace(/"/g, "");

                const timestamp = new Date();
                source.push({
                  "clan": clan,
                  "name": name,
                  "keep": keep,
                  "xpos": xpos,
                  "ypos": ypos,
                  "date": timestamp
                });
              
                const csv = JSONToCSV(source, { fields: ["clan", "name", "keep", "xpos", "ypos", "date"] })
                fs.writeFileSync("./locations.csv", csv);
                message.channel.send('_```Stalkerbot has updated the list with: \n\n' + clan + ', ' + name + ', ' + keep + ', ' + xpos + ', ' + ypos + '```_');
  
              })   
            }   
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
    
                    if (found == undefined) {
                      message.channel.send('No records for that clan were found, use add');
                      return;
                    }
                    found = JSON.stringify(found);
                    found = found.slice(2,-2);
                    found = found.replace(/},{/g,'\n');
                    found = found.replace(/"/g, "").replace(/{/g, "").replace(/}/g, "").replace(/,/g, ", ").replace(/clan:/g, "").replace(/name:/g, "").replace(/keep:/g, "").replace(/xpos:/g, "");
                    found = found.replace(/ypos:/g, "");
    
                    console.log(clan);
                    message.channel.send('_```-------------' + clan.toString().toUpperCase() + '------------- \n\n' + found + '```_');
                    return(found);
                  
                    });

        }  

        if(command == 'del'){

          var user = args.toString();

          if (args.length == 0) {
            return message.channel.send("You must enter a player name to delete");;
          }
          CSVToJSON().fromFile("./locations.csv").then(data => {
            console.log(user);
            const index = data.findIndex(obj => obj.name === user);
            console.log(index);
            const newData = [
                ...data.slice(0, index),
                ...data.slice(index + 1)
            ]
            console.log(newData);
            return(newData);
          })  


          



          // CSVToJSON().fromFile("./locations.csv").then(source => {
          //   var found = source.filter(function(v, i){
          //   return ((v["name"].match(user)));
          // })     
          // console.log(found);
          // var line = Object.keys(user).indexOf(found);
          // console.log(line);
          // removed = source.splice(line, 1);
          // console.log(removed);  
          // console.log(source); 
          // var key = "clan";
          // var index = Object.keys(source).indexOf(["name"].match("fucker"));
          // console.log(index);
          // return index;
          // console.log(source);


          // if (newData == undefined || found == false) {
          //   message.channel.send('No records for that player were found, use add');
          //   return;
          // }
        // });
      }
          


          // CSVToJSON().fromFile("./locations.csv").then(source => {
            // var idToSearchFor = "fucker";
            // // read the file
            // fs.readFile('./locations.csv', 'utf8', function(err, data)
            // {
            //     if (err)
            //     {
            //         // check and handle err
            //     }
            //     // Get an array of comma separated lines`
            //     let lines = data.split('\n').slice(0);
            //     // Turn that into a data structure we can parse (array of arrays)
            //     let linesArr = lines.map(line=>line.split(','));
            //     // Use filter to find the matching ID then return only those that don't matching
            //     // deleting the found match
            //     // Join then into a string with new lines
            //     let output = linesArr.filter(line=>parseInt(line[0]) !== idToSearchFor).join("\n");
            //     // Write out new file
            //     fs.writeFileSync('new.csv', output);
            // });
              // var found = source.find(function(v, i){
              //  return ((v["name"] == user));
            // }) 


            // if (found == undefined || found == false) {
            //   message.channel.send('No player with that name found to delete, try &search');
            //   return;
            // }
                
            // message.channel.send('_```Deleted player ' + found + '```_');
            // });

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

        if(command == 'player'){


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