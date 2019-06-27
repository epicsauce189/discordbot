const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTkzODAwOTMwOTIzOTA1MDQ0.XRTLHA.NDfC9N_IObL6JETmxFPBObFMpFA.XRTHnA.KKoAoI5tl944t0W5osXUef9Sap0);//where BOT_TOKEN is the token of our bot
