import 'dotenv/config'
import { AkairoClient, CommandHandler } from 'discord-akairo'

class SyncoreBot extends AkairoClient {
  constructor() {
    super({ ownerID: '717195375731015732' })

    // this.commandHandler = new CommandHandler(this, {
    //   directory: './commands/',
    //   prefix: '!'
    // })

    // this.commandHandler.loadAll()
  }
}

const bot = new SyncoreBot()

bot.login(process.env.BOT_TOKEN)
