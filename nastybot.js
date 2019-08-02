const Discord = require('discord.js');
const { token, prefix } = require('./config.js');
const client = new Discord.Client();
const fs = require('fs');
var min = 1;
const path = 'C:/Users/Geoff/Desktop/bots/nastybot/gifs/';


client.once('ready', () => {
    console.log(`${client.user.tag} is online`)
    client.user.setActivity("sexy time")
})

client.on('message', message => {

        if(message.content.startsWith(`${prefix}help`)){ 

            message.author.send('_```Nastybot generates random a random NSFW gif by category\n\nPrefix = $\n\nUsage $help\n\nAvailable commands:\nhelp, 69, bite, boobs, blow, doggy, dom, fuck, gnight, kiss, lick, orgy, peg, ride, spank, strip```_')
        }

        if(message.content.startsWith(`${prefix}3some`)){ 

            var option = "3some";
            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                // if (member == undefined) {
                //     return message.reply(":interrobang: you must specify a user.");
                // }
                // else {
                    if (message.member.roles.has("604460506144702494" && (member.roles.has("604460824668536997")))){
                            var dir = path + option + '/ffm/'
                            console.log("ffm1");
                    }
                    // if (message.member.roles.has("604460506144702494") && (member.roles.has("604460824668536997") && member.roles.has("604460824668536997"))){
                    //     var dir = path + option + '/ffm/'
                    //     console.log("ffm1");
                    // }
                    // else if (message.member.roles.has("604460506144702494") && (member.roles.has("604460824668536997") && (member.roles.has("604460506144702494")))){
                    //     var dir = path + option + '/ffm/';
                    //     console.log("ffm2");
                    // }
                    // else if (message.member.roles.has("604460506144702494") && (member.roles.has("604460506144702494") && (member.roles.has("604460824668536997")))){
                    //     var dir = path + option + '/mmf/';
                    //     console.log("mmf1");
                    // }
                    // else if (message.member.roles.has("604460824668536997") && (member.roles.has("604460506144702494") && (member.roles.has("604460506144702494")))){
                    //     var dir = path + option + '/mmf/';
                    //     console.log("mmf2");
                    // }
                    // else if (message.member.roles.has("604460824668536997") && (member.roles.has("604460824668536997") && (member.roles.has("604460506144702494")))){
                    //     var dir = path + option + '/mmf/';
                    //     console.log("mmf3");
                    // }
                    // else if (message.member.roles.has("604460824668536997") && (member.roles.has("604460824668536997") && (member.roles.has("604460824668536997")))){
                    //     var dir = path + option + '/fff/';
                    //     console.log("fff");
                    // }
                    else {
                        var dir = path + option + '/ffm/';
                        console.log("in else")
                                        }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} has a threesome with ${member} and ${member}`, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                // }

        }

        if(message.content.startsWith(`${prefix}69`)){ 

            var option = "69";
            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.has("604460506144702494") && (member.roles.has("604460824668536997"))){
                        var dir = path + option + '/mf/';
                    }
                    else if (message.member.roles.has("604460824668536997") && (member.roles.has("604460506144702494"))){
                        var dir = path + option + '/mf/';
                    }
                    else {
                        var dir = path + option + '/ff/';
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} sixty nine's ${member}`, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                }

        }

        if(message.content.startsWith(`${prefix}bite`)){ 

            var option = "bite";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.has("604460506144702494") && (member.roles.has("604460824668536997"))){
                        var dir = path + option + '/mf/';
                    }
                    else if (message.member.roles.has("604460824668536997") && (member.roles.has("604460506144702494"))){
                        var dir = path + option + '/fm/';
                    }
                    else {
                        var dir = path + option + '/ff/';
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} bites ${member} :shark: `, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                }

        }

        if(message.content.startsWith(`${prefix}blow`)){ 

            var option = "blow";
            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.has("604460824668536997") && (member.roles.has("604460506144702494"))){
                        var dir = path + option + '/';
                    }
                    else if (member.roles.has("604460506144702494")){
                        return message.reply("nobody wants to see that, try again :wink:");
                    } 
                    else {
                        return message.reply("you can't blow a lady, try $lick instead :wink:");
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} gives ${member} a blowjob`, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                }

        }

        if(message.content.startsWith(`${prefix}boobs`)){ 

            var option = "boobs";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
            }
            else {
                if (message.author.id === "264758290469093387") {
                    var dir = path + option + '/davo/';
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} wants to look at boobs :eyes:`, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                    else {
                    var dir = path + option + '/everyone/';
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} wants to look at boobs :eyes:`, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                }
    
                
                    
                

        }

        if(message.content.startsWith(`${prefix}doggy`)){ 

            var option = "doggy";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.has("604460506144702494") && (member.roles.has("604460824668536997"))){
                        var dir = path + option + '/mf/';
                    }
                    else if (message.member.roles.has("604460824668536997") && (member.roles.has("604460506144702494"))){
                        var dir = path + option + '/mf/';
                    }
                    else {
                        var dir = path + option + '/ff/';
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} fucks ${member} doggystyle :dog:`, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                }

        }

        if(message.content.startsWith(`${prefix}dom`)){ 

            var option = "dom";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.has("604460506144702494") && (member.roles.has("604460824668536997"))){
                        var dir = path + option + '/mf/';
                    }
                    else if (message.member.roles.has("604460824668536997") && (member.roles.has("604460506144702494"))){
                        var dir = path + option + '/fm/';
                    }
                    else {
                        var dir = path + option + '/ff/';
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} dominates ${member} :closed_lock_with_key: :chains: `, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                }

        }

        if(message.content.startsWith(`${prefix}fuck`)){ 

            var option = "fuck";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.has("604460506144702494") && (member.roles.has("604460824668536997"))){
                        var dir = path + option + '/mf/';
                    }
                    else if (message.member.roles.has("604460824668536997") && (member.roles.has("604460506144702494"))){
                        var dir = path + option + '/mf/';
                    }
                    else {
                        var dir = path + option + '/ff/';
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} fucks ${member} :honey_pot: `, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                }

        }

        if(message.content.startsWith(`${prefix}gnight`)){ 

            var option = "gnight";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.has("604460824668536997") && (member.roles.has("604460506144702494"))){
                        var dir = path + option + '/fm/';
                    }
                    else if (message.member.roles.has("604460506144702494") && (member.roles.has("604460824668536997"))){
                        var dir = path + option + '/mf/';
                    }
                    else {
                    var dir = path + option + '/ff/';
                    }

                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} wishes ${member} sweet dreams :sleeping:`, {
                            file: dir + random +'.gif'
                            });
                        });
                    }   
                }

        }

        if(message.content.startsWith(`${prefix}kiss`)){ 

            var option = "kiss";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.has("604460506144702494") && (member.roles.has("604460824668536997"))){
                        var dir = path + option + '/mf/';
                    }
                    else if (message.member.roles.has("604460824668536997") && (member.roles.has("604460506144702494"))){
                        var dir = path + option + '/mf/';
                    }
                    else {
                        var dir = path + option + '/ff/';
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} kisses ${member} :kiss: `, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                }

        }

        if(message.content.startsWith(`${prefix}lick`)){ 

            var option = "lick";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.has("604460824668536997") && (member.roles.has("604460506144702494"))){
                        var dir = path + option + '/fm/';
                    }
                    else if (message.member.roles.has("604460506144702494") && (member.roles.has("604460824668536997"))){
                        var dir = path + option + '/mf/';
                    }
                    else {
                    var dir = path + option + '/ff/';
                    }

                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} licks ${member} up and down :flushed:`, {
                            file: dir + random +'.gif'
                            });
                        });
                    }   
                }

        }

        if(message.content.startsWith(`${prefix}orgy`)){ 

            var option = "orgy";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
            }
            else {
                var dir = path + option + '/';
                fs.readdir(dir, (err, files) => {
                    max = (files.length)                   
                    var random = Math.floor(Math.random() * (+max - +min)) + +min;
                    message.channel.send(`${message.author} starts an orgy in the room :rabbit: :rabbit: :rabbit: `, {
                        file: dir + random +'.gif'
                        });
                    });
                }
    
        }

        if(message.content.startsWith(`${prefix}peg`)){ 

            var option = "peg";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
            }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }

                else if (member.user.id === "264758290469093387") {
                    var dir = path + option + '/';
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} bends ${member} over and pegs him :confounded:`, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                    
                else {
                    message.channel.send(`${message.author} you are not allowed to peg ${member}:face_palm:`);
                } 

            }
        }

        if(message.content.startsWith(`${prefix}ride`)){ 

            var option = "ride";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.has("604460506144702494") && (member.roles.has("604460824668536997"))){
                        var dir = path + option + '/mf/';
                        var msg = `${member}` + " rides " + `${message.author}` + " like a bucking brongo :racehorse:";
                    }
                    else if (message.member.roles.has("604460824668536997") && (member.roles.has("604460506144702494"))){
                        var dir = path + option + '/mf/';
                        var msg = `${message.author}` + " rides " +  `${member}` + " like a bucking brongo :racehorse:";
                    }
                    else {
                        var dir = path + option + '/ff/';
                        var msg = `${message.author}` + " grinds on " + `${member}` + " hard :racehorse:";
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(msg, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                }

        }

        if(message.content.startsWith(`${prefix}spank`)){ 

            var option = "spank";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.has("604460506144702494") && (member.roles.has("604460824668536997"))){
                        var dir = path + option + '/mf/';
                        var msg = `${message.author}` + " spanks " + `${member}` + " like a dirty girl :hand_splayed: :peach:";
                    }
                    else if (message.member.roles.has("604460824668536997") && (member.roles.has("604460506144702494"))){
                        var dir = path + option + '/fm/';
                        var msg = `${message.author}` + " spanks " + `${member}` + " like a bad boy :hand_splayed: :peach:";
                    }
                    else {
                        var dir = path + option + '/ff/';
                        var msg = `${message.author}` + " spanks " + `${member}` + " like a dirty girl :hand_splayed: :peach:";
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(msg, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                }

        }

        if(message.content.startsWith(`${prefix}strip`)){ 

            var option = "strip";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.has("604460824668536997") && (member.roles.has("604460506144702494"))){
                        var dir = path + option + '/m/';
                    }
                    else if (message.member.roles.has("604460506144702494") && (member.roles.has("604460824668536997"))){
                        var dir = path + option + '/f/';
                    }
                    else {
                    var dir = path + option + '/f/';
                    }

                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} orders ${member} to strip :man_dancing: :high_heel: `, {
                            file: dir + random +'.gif'
                            });
                        });
                    }   
                }

        }
  
    })


client.login(token);