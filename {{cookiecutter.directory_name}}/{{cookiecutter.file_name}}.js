#!/usr/bin/env node

const args = require("yargs").argv;
const fs = require("fs");
const path = require("path");

function main()
{
  var help = "Usage:\tnode {{ cookiecutter.file_name }}.js (Options) (Required)\n\t ";
  help += "Options:\n\t\t";
  help += "--help | Display this help text\n\t\t";
  help += "--optional | Optional argument\n\t\t";
  help += "Required:\n\t\t";
  help += "--required | Required argument\n\t\t";

  if (process.argv.length <= 2 || args.h || args.help) {
    console.log(help);
    return 0;
  }

  try {
    var input = args[3];
    if (input) {
      input = input.toString();
      if (!fs.existsSync(input)) {
        console.log("file does not exist");
        return 0;
      }
      console.log(input);
    }
  } catch (err) {
    console.log(help);
    return 0;
  }
}

main();
