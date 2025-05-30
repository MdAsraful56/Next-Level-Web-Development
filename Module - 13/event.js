const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter {} // Class name is now capitalized

const schoolBellInstance = new SchoolBell(); // Instance name is unique
// Example usage
schoolBellInstance.on('ring', () => {
    console.log('The school bell has rung!');
});

schoolBellInstance.emit('ring');