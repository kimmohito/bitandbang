'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
 name: chalk.white('         Kim Mohito'),
 bar: chalk.gray('|'),
 handle: chalk.yellow('@kimmohito'),
 work: chalk.white('         Founder'),
 at: chalk.gray('at'),
 company: chalk.yellow('Rojak Cube'),

 labelLinkedIn: chalk.blue('linkedin'),
 labelTwitter: chalk.cyan(' twitter'),
 labelGitHub: chalk.magenta('  github'),
 labelNpm: chalk.green('     npm'),

 linkedin: chalk.white('https://linkedin.com/in/') + chalk.grey('kimmohito'),
 twitter: chalk.white('https://twitter.com/') + chalk.grey('kimmohito'),
 github: chalk.white('https://github.com/') + chalk.grey('kimmohito'),
 npm: chalk.white('https://npmjs.com/') + chalk.grey('~kimmohito'),

 card: chalk.red('     npx') + chalk.white(' kimmohito'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.bar} ${data.handle}`
const working = `${data.work} ${data.at} ${data.company}`
const linkedining = `${data.labelLinkedIn} ${data.linkedin}`
const twittering = `${data.labelTwitter} ${data.twitter}`
const githubing = `${data.labelGitHub} ${data.github}`
const npming = `${data.labelNpm} ${data.npm}`
const carding = `${data.card}`


// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline +
               working + newline + newline +
               linkedining + newline +
               twittering + newline +
               githubing + newline +
               npming + newline + newline +
               carding

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.white(boxen(output, options)))
