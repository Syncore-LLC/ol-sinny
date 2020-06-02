import 'dotenv/config'
const { AkairoClient } = require('discord-akairo')

class SyncoreBot extends AkairoClient {
  constructor() {
    super({ ownerID: '717195375731015732' })

    this.commandHandler = new CommandHandler(this, {
      directory: './commands/',
      prefix: '!'
    })

    this.commandHandler.loadAll()
  }
}

const bot = new SyncoreBot()

bot.login('NjQ5NDM4MzAzNTM1MzY2MjI2.XtWxig.5t46LbYbFjKlV7uhlJjWwMxGXi4')
