const { Client, Events, GatewayIntentBits } = require('discord.js');

const dotenv = require('dotenv')
dotenv.config()
const {TOKEN, CID, GID} = process.env

//Comandos
const fs = require('fs')
const path = require("node:path")
const commandsPath = path.join(__dirname, "commands")
var commandsFile = fs.readSync(commandsPath).filter(file => f)

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(TOKEN);