console.log('starting notes.js')

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (err){
    console.log(`error: ${err}`);
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  // console.log('adding note', title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  var allNotes = fetchNotes();
  console.log("All current notes:");
  for(i=0; i < allNotes.length; i++){
    console.log(allNotes[i].title);
  }
  return allNotes;
};

var getOne = (title) => {
  var allNotes = fetchNotes();
  var returnedNote = allNotes.filter((note) => note.title === title)[0];
  if(returnedNote){
    return returnedNote;
  } else return false;
};

var deleteOne = (title) => {
  var allNotes = fetchNotes();
  var notesAfterDeletion = allNotes.filter((note) => note.title !== title);
  saveNotes(notesAfterDeletion);

  return allNotes.length !== notesAfterDeletion.length;
};

module.exports = {
// in ES6 we don't need to give the key value pair since they are the same
  addNote,
  getAll,
  getOne,
  deleteOne
};
