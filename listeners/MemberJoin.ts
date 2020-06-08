import { GuildMember } from 'discord.js'

const { Listener } = require('discord-akairo')

import config from '../config'

class MemberJoin extends Listener {
  constructor() {
    super('memberJoin', {
      emitter: 'client',
      event: 'guildMemberAdd'
    })
  }

  exec(guildMember: GuildMember) {
    //   Log the user join
    console.log(`${guildMember.user.username} has joined the server!`)

    //   Give the user the member role
    guildMember.guild.roles.fetch(config.roles.member).then(role => {
      guildMember.roles.add(role)
    })
  }
}

export default MemberJoin
