#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]

switch (cmd) {
  case 'list':
    await commands.list()
    break

  case 'done':
    await commands.done(userInputs[3])
    break

  case 'add':
    await commands.add(userInputs[3])
    break

  case 'update':
    await commands.update(userInputs[3], userInputs[4])
    break

  default:
    console.log(`I don't understand that command: ${cmd}`)
}
