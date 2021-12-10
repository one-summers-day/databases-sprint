exports.messages = require('./messages.js');
exports.users = require('./users.js');

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  port: 3306,
  password: '',
  database: 'chat'
});

// Make a function that inserts some sample data. Will be modified if working properly
connection.connect(function(err) {
  if (err) { throw err; }
  console.log('Successfully connected to mySQL server');
  var dataEntry = 'INSERT INTO messages (messageID, username, body, room) VALUES (3, \'example_user\', \'body text\', \'sampleroom\')';
  connection.query(dataEntry, function(err, result) {
    if (err) { throw err; }
    console.log('Sample data successfully inserted.');
    connection.end();
  });

});
