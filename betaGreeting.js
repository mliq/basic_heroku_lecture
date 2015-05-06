var messages = require('./messages');

var message = function () {
    console.log(messages.hello('Here is a custom message'));
    return messages.awkward();
};

module.exports = message;