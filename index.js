const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    // List servers the bot is connected to
    console.log("Servedrs:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
     // Replace with known channel ID
     
})

client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    
    if (receivedMessage.author == client.user) {
        return
    }

        
        if (receivedMessage.content.startsWith("!")) {
            processCommand(receivedMessage)
        }
    
})

const processCommand = (receivedMessage) => {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let otherArguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    switch(primaryCommand){
        case 'd':
            randomD(parseFloat(otherArguments[0]),receivedMessage);

        case 'md':
            let tab = [];
            for (let i = 0; i < otherArguments[1]; i++) {
                tab.push(Math.floor(Math.random() * (otherArguments[0] - 1 + 1)) + 1);
            }
            sendMultiple(tab,receivedMessage);
        return;
    }
}

const randomD = (max,receivedMessage) => {
    receivedMessage.channel.send(Math.floor(Math.random() * (max - 1 + 1)) + 1)
}

const sendMultiple = (tab,receivedMessage) => {
    console.log(tab);
    receivedMessage.channel.send(JSON.stringify(tab));
}

bot_secret_token = "NjcwNjM1ODgwOTc3MDA2NTk1.XmKyig.udR9NapK1LzN6RrIK9wuajdYdVI"

client.login(bot_secret_token)
