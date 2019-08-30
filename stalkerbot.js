const Discord = require('discord.js');
const { token, prefix } = require('./config.js');
const client = new Discord.Client();
const csv = require('csv-parser');
const fs = require('fs');
const path = 'C:/bots/stalkerbot';


client.once('ready', () => {
    console.log(`${client.user.tag} is online`)
    client.user.setActivity("watching K402")
})

client.on('message', message => {

        if(message.content.startsWith(`${prefix}help`)){ 

            message.author.send('_```Stalkerbot stores locations of players on K402 \n\nPrefix = &\n\nUsage &help\n\nAvailable commands:\nhelp, &search, &delete, &```_')
        }
        
        if(message.content.startsWith(`${prefix}search`)){

            message.channel.send('What user do you want to search for?')
            .then(() => {
              message.channel.awaitMessages(response => response.content, {
                max: 1,
                time: 15000,
                errors: ['time'],
              })
              .then((collected) => {
                  fs.createReadStream('locations.csv')
                  .pipe(csv())
                  .on('bacardi', (row) => {
                    console.log(row);
                  })
                  .on('end', () => {
                    console.log('CSV file successfully processed');
                  })
                  message.channel.send(`List currently known ${collected.first().content} members?`);
                })
                .catch(() => {
                  message.channel.send('A response was not received within the time limit!');
                });
            });
        }
    })

client.login(token);