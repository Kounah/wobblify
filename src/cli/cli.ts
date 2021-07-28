import { EOL } from 'os'
import wobblify from '../wobble'
import yargs from 'yargs'
import { createReadStream, createWriteStream } from 'fs'

export async function cli () {
  const argv = await yargs
    .option('input', {
      alias: ['i'],
      type: 'string',
      desc: 'sets the input file to the given path'
    })
    .option('output', {
      alias: ['o'],
      type: 'string',
      desc: 'sets the output file to the given path'
    })
    .option('reset', {
      alias: ['r'],
      type: 'boolean',
      desc: 'resets on every new arg'
    })
    .argv

  const output = argv.output
    ? createWriteStream(argv.output)
    : process.stdout

  const input = argv.input
    ? createReadStream(argv.input)
    : process.stdin

  if (argv._.length > 0) {
    for (const arg of argv._) {
      output.write(wobblify(String(arg), argv.reset) + EOL)
    }
  } else {
    input.on('data', data =>
      output.write(wobblify(data.toString(), argv.reset)))
    input.on('end', () =>
      output.write(EOL))
  }
}

export default cli

if (process.argv[1] === __filename) cli()
