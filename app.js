console.log('starting app.js');

const fs = require('fs');
const os = require('os');

const notes = require('./notes.js');

var user = os.userInfo();

var res = notes.addNote();

console.log(notes.add(3,4));

fs.appendFile('greetings.txt', `hello ${user.username}`, function(err){
  if (err) {
    console.log('Unable to write to file')
  }
});
