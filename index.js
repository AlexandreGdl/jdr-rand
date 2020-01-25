const Discord = require('discord.js')
const client = new Discord.Client()

var generalChannel = client.channels.get("670640836916019210")

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
        return;
    }
}

const randomD = (max,receivedMessage) => {
    receivedMessage.channel.send(Math.floor(Math.random() * (max - 1 + 1)) + 1)
}

bot_secret_token = "NjcwNjM1ODgwOTc3MDA2NTk1.XixR_A.shkyso760Gbg-XIh-nLCzhInXSQ"

client.login(bot_secret_token)