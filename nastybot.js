const Discord = require('discord.js');
const { token, prefix } = require('./config.js');
const client = new Discord.Client();
const fs = require('fs');
var min = 1;
const path = 'C:/bots/nastybot/gifs/';


client.once('ready', () => {
    console.log(`${client.user.tag} is online`)
    client.user.setActivity("sexy time")
})

client.on('message', message => {

        if(message.content.startsWith(`${prefix}help`)){ 

            message.author.send('_```Nastybot generates random a random NSFW gif by category\n\nPrefix = $\n\nUsage $help\n\nAvailable commands:\nhelp, 3some, 69, anal, assmb, bite, blow, boobs, camel, caught, choke, doggy, dom, facial, finger, fuck, gag, gm, gn, handy, kiss, lick, lust, mock, orgy, peg, ride, shower, spank, squirt, strip```_')
        }

        if(message.content.startsWith(`${prefix}3some`)){ 

            var option = "3some";
            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first(2)
                let member1 = member[0];
                let member2 = member[1];
                if (member1 == undefined || member2 == undefined) {
                     return message.reply(":interrobang: you must specify two users.");
                 }
                 else {
                    if (message.member.roles.some(role => role.name === 'male')){
                        if (member1.roles.has("604460506144702494") && (member2.roles.has("604460824668536997"))){
                            var dir = path + option + '/mmf/'
                        }
                        else if (member1.roles.has("604460824668536997") && (member2.roles.has("604460506144702494"))){
                            var dir = path + option + '/mmf/'
                        }   
                        else if (member1.roles.has("604460824668536997") && (member2.roles.has("604460824668536997"))){
                            var dir = path + option + '/ffm/' 
                        }   
                        else {
                            return message.reply("nobody wants to see that, try again :wink:");
                        }   
                    }
                    else if (message.member.roles.some(role => role.name === 'female')){
                        if (member1.roles.has("604460506144702494") && (member2.roles.has("604460824668536997"))){
                            var dir = path + option + '/ffm/'
                        }
                        else if (member1.roles.has("604460824668536997") && (member2.roles.has("604460506144702494"))){
                            var dir = path + option + '/ffm/'
                        }
                        else if (member1.roles.has("604460506144702494") && (member2.roles.has("604460506144702494"))){
                            var dir = path + option + '/mmf/'
                        }
                        else {
                            var dir = path + option + '/fff/' 
                        }     
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} has a threesome with ${member1} and ${member2}`, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                }

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
                    if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/mf/';
                    }
                    else if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
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

        if(message.content.startsWith(`${prefix}anal`)){ 

            var option = "anal";
            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (member.user.id === "576293372667625483") {
                        if (message.member.id === "264758290469093387" || (message.member.id === "152964720620470272")){
                            var dir = path + option + '/'; 
                        }
                        else {
                            return message.reply("Only -Charger- and Davo are allowed to have anal sex with Dobs :wink:");
                        } 
                    }
                    else if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/';
                    }
                    else if (member.roles.some(role => role.name === 'male')){
                        return message.reply("nope....try $peg :wink:");
                    } 
                    else {
                        return message.reply("ladies don't do that :wink:");
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} has anal sex with ${member}`, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                }

        }

        if(message.content.startsWith(`${prefix}assmb`)){ 

            var option = "assmb";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if ((message.member.roles.some(role => role.name === 'male') && (member.roles.some(role => role.name === 'female')))){
                        var dir = path + option + '/mf/';
                    }
                    else {
                        var dir = path + option + '/ff/';
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} motorboats ${member} ass :motorboat: :peach:`, {
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
                    if ((message.member.roles.some(role => role.name === 'male') && (member.roles.some(role => role.name === 'female')))){
                        var dir = path + option + '/mf/';
                    }
                    else if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
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
                    if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
                        var dir = path + option + '/';
                    }
                    else if (member.roles.some(role => role.name === 'male')){
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
                if (message.author.id === "586043373958332419") {
                    var dir = path + option + '/punish/';
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

        if(message.content.startsWith(`${prefix}camel`)){ 

            var option = "camel";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
            }
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }

                else {
                    var dir = path + option + '/';
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} admires ${member} cameltoe :dromedary_camel:`, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                }
    
        }

        if(message.content.startsWith(`${prefix}choke`)){ 

            var option = "choke";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/mf/';
                    }
                    else if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
                        var dir = path + option + '/mf/';
                    }
                    else {
                        var dir = path + option + '/ff/';
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} chokes ${member} :dizzy_face: `, {
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
                    if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/mf/';
                    }
                    else if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
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
                    if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/mf/';
                    }
                    else if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
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

        if(message.content.startsWith(`${prefix}mock`)){ 

            var option = "mock";
            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                var dir = path + option + '/';
                fs.readdir(dir, (err, files) => {
                    max = (files.length)                   
                    var random = Math.floor(Math.random() * (+max - +min)) + +min;
                    message.channel.send(`${message.author} mocks the room :rofl: `, {
                        file: dir + random +'.gif'
                        });
                    });
                }
        }

        if(message.content.startsWith(`${prefix}facial`)){ 

            var option = "facial";
            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (member.user.id === "576293372667625483") {
                        if (message.member.id === "152964720620470272"){
                            var dir = path + option + '/'; 
                        }
                        else {
                            return message.reply("Only -Charger- is allowed to bust a nut on Dobs face :wink:");
                        } 
                    }
                    else if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/';
                    }
                    else if (member.roles.some(role => role.name === 'male')){
                        return message.reply("nope....try $squirt :wink:");
                    } 
                    else {
                        return message.reply("you can't give a guy a facial, try $squirt :wink:");
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} busts a nut all over ${member} face :sweat_drops: :stuck_out_tongue_winking_eye: `, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                }

        }

        if(message.content.startsWith(`${prefix}finger`)){ 

            var option = "finger";
            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/mf/';
                    }
                    else if (message.member.roles.some(role => role.name === 'female') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/ff/';
                    } 
                    else if (member.roles.some(role => role.name === 'male')){
                        return message.reply("you can't finger a guy, try $handy instead :wink:");
                    } 
                    else {
                        return;
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} fingers ${member} :vulcan:  `, {
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
                    if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/mf/';
                    }
                    else if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
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

        if(message.content.startsWith(`${prefix}gag`)){ 

            var option = "gag";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
            }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }

                else if (member.user.id === "590556525425197160") {
                    var dir = path + option + '/';
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} shoves a ball gag down ${member} throat :scream: `, {
                            file: dir + random +'.gif'
                            });
                        });
                    }
                    
                else {
                    message.channel.send(`${message.author} you are not allowed to gag ${member} :face_palm:`);
                } 

            }
        }

        if(message.content.startsWith(`${prefix}gm`)){ 

            var option = "gm";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
                        var dir = path + option + '/fm/';
                    }
                    else if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/mf/';
                    }
                    else {
                    var dir = path + option + '/ff/';
                    }

                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} tells ${member} good morning :sunny: `, {
                            file: dir + random +'.gif'
                            });
                        });
                    }   
                }

        }

        if(message.content.startsWith(`${prefix}gn`)){ 

            var option = "gn";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
                        var dir = path + option + '/fm/';
                    }
                    else if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
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

        if(message.content.startsWith(`${prefix}caught`)){ 

            var option = "caught";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if ((member.roles.some(role => role.name === 'male'))){
                        var dir = path + option + '/m/';
                    }
                    else if (member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/f/';
                    }
                    else {
                    var dir = path + option + '/f/';
                    }

                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} caught ${member} playing with themself :eyes:`, {
                            file: dir + random +'.gif'
                            });
                        });
                    }   
                }

        }

        if(message.content.startsWith(`${prefix}handy`)){ 

            var option = "handy";
            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
                        var dir = path + option + '/';
                    }
                    else if (member.roles.some(role => role.name === 'male')){
                        return message.reply("nobody wants to see that, try again :wink:");
                    } 
                    else {
                        return message.reply("you can't give a lady a handjob, try $finger instead :wink:");
                    }
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} gives ${member} the handjob of a lifetime  :fist: :eggplant: `, {
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
                    if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/mf/';
                    }
                    else if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
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
                    if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
                        var dir = path + option + '/fm/';
                    }
                    else if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
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

        if(message.content.startsWith(`${prefix}lust`)){ 

            var option = "lust";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if ((message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female'))){
                        var dir = path + option + '/m/';
                    }
                    else if ((message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male')))){
                        var dir = path + option + '/f/';
                    }
                    else if ((message.member.roles.some(role => role.name === 'male') && (member.roles.some(role => role.name === 'male')))){
                        var dir = path + option + '/m/';
                    }
                    else {
                    var dir = path + option + '/f/';
                    }

                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author} looks at ${member} with fuck me eyes :heart_eyes: `, {
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
                let member = message.mentions.members.first(5)
                let member1 = member[0];
                let member2 = member[1];
                let member3 = member[2];
                let member4 = member[3];
                let member5 = member[4];
                let member6 = member[5];
                if (member1 == undefined || member2 == undefined || member3 == undefined) {
                     return message.reply(":interrobang: you must specify three users, if you have only 2 users use $3some");
                 }
                 else { 
                    var dir = path + option + '/';
                    fs.readdir(dir, (err, files) => {
                        max = (files.length)                   
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        message.channel.send(`${message.author}` + " has an orgy with " + `${member}` + " :eggplant: :peach: :confetti_ball:", {
                            file: dir + random +'.gif'
                            });
                        });
                    }
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
                else if (member.user.id === "567632092473851905") {
                    if (message.member.id === "590556525425197160"){
                        var dir = path + option + '/'; 
                        }
                        else {
                            return message.reply("Only Sassy can peg Turtle :wink:");
                        } 
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
                    message.channel.send(`${message.author} you are not allowed to peg ${member}, you can only peg Ferraro :face_palm:`);
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
                    if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/mf/';
                        var msg = `${member}` + " rides " + `${message.author}` + " like a bucking brongo :racehorse:";
                    }
                    else if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
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

        if(message.content.startsWith(`${prefix}shower`)){ 

            var option = "shower";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/mf/';
                        var msg = `${message.author}` + " takes a shower with " + `${member}` + " :shower: ";
                    }
                    else if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
                        var dir = path + option + '/fm/';
                        var msg = `${message.author}` + " takes a shower with " + `${member}` + " :shower: ";
                    }
                    else {
                        var dir = path + option + '/ff/';
                        var msg = `${message.author}` + " takes a shower with " + `${member}` + " :shower: ";
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
                    if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/mf/';
                        var msg = `${message.author}` + " spanks " + `${member}` + " like a dirty girl :hand_splayed: :peach:";
                    }
                    else if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
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

        if(message.content.startsWith(`${prefix}squirt`)){ 

            var option = "squirt";

            if (message.channel.nsfw === false) {
                return message.reply(":warning: This channel isn't marked as NSFW.");
              }
    
            else {
                let member = message.mentions.members.first()
                if (member == undefined) {
                    return message.reply(":interrobang: you must specify a user.");
                }
                else {
                    if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
                        var dir = path + option + '/fm/';
                        var msg = `${message.author}` + " makes " + `${member}` + " squirt all over the place :eggplant: :sweat_drops:";  
                    }
                    else if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
                        var dir = path + option + '/mf/';
                        var msg = `${message.author}` + " makes " + `${member}` + " squirt all over the place :peach: :sweat_drops:";
                    }
                    else {
                    var dir = path + option + '/ff/';
                    var msg = `${message.author}` + " makes " + `${member}` + " squirt all over the place :peach: :sweat_drops:";
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
                    if (message.member.roles.some(role => role.name === 'female') && (member.roles.some(role => role.name === 'male'))){
                        var dir = path + option + '/m/';
                    }
                    else if (message.member.roles.some(role => role.name === 'male') && member.roles.some(role => role.name === 'female')){
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