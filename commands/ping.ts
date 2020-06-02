import { MessageOptions } from 'discord.js'

const { Command } = require('discord-akairo')

class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping'],
        })
    }

    exec(message: MessageOptions) {
        return message.reply('Pong')
    }
}

module.exports = PingCommand
