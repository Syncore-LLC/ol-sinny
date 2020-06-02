const { AkairoClient } = require('discord-akairo')

class MyClient extends AkairoClient {
  constructor() {
    super(
      {
        // Options for Akairo go here.
      },
      {
        // Options for discord.js goes here.
      }
    )
  }
}

const client = new MyClient()
client.login('TOKEN')
