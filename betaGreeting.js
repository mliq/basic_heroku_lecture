var messages = require('./messages');

var message = function () {
    console.log(messages.hello());
    return messages.awkward();
};

module.exports = message;