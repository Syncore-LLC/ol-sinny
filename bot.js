'use strict'
exports.__esModule = true
require('dotenv/config')
var discord_akairo_1 = require('discord-akairo')
var client = new discord_akairo_1.AkairoClient()
client.login(process.env.BOT_TOKEN)
