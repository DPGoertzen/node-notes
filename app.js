console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv
var command = argv._[0];

console.log(`Command: ${command}`);

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (note){
    console.log(
      `Note successfully created.
      Title: ${note.title}
      Body: ${note.body}`
    );
  } else {
    console.log("Unable to create note!")
  }
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read'){
  var singleNote = notes.getOne(argv.title);
  if (singleNote){
    console.log("The note you were looking for:");
    console.log(`Title: ${singleNote.title}`);
    console.log(`Body: ${singleNote.body}`);
  } else {
    console.log("No notes exist with that title");
  }
} else if (command === 'remove'){
  var noteRemoved = notes.deleteOne(argv.title);
  var message = noteRemoved ? "Note was removed" : "Note was not able to be removed";
  console.log(message);
} else {
  console.log('command not recognized');
}
