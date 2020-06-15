#!/usr/bin/env node
"use strict";

const { exec } = require('child_process');
let ArgumentParser = require('argparse').ArgumentParser;
let parser = new ArgumentParser({
  version: '1.0.0',
  addHelp:true,
  description: 'Argparse example'
});
parser.addArgument(
  [ '-s', '--start' ],
  {
    help: 'Where the trim should start',
    required: true,
  }
);
parser.addArgument(
  [ '-e', '--end' ],
  {
    help: 'Where the trim should end',
    required: true,
  }
);
parser.addArgument(
  ['-i', '--input'],
  {
    help: 'Input file',
    required: true,

  }
);
parser.addArgument(
    ['-o', '--output'],
    {
        help: "Output file",
        required: true,
    }
)
let args = parser.parseArgs();

exec(`ffmpeg -i "${args.input}" -ss ${args.start} -to ${args.end} -c copy ${args.output}`, (err, stdout, stderr) => {
  if (err) {
    console.error(err)
  }
});