const { AkairoClient, CommandHandler } = require('discord-akairo')

class Client extends AkairoClient {
    constructor() {
        super({
            ownerID: "'227540474951368704'",
        })

        this.commandHandler = new CommandHandler(this, {
            directory: './commands/',
            prefix: '!',
        })

        this.commandHandler.loadAll()
    }
}
