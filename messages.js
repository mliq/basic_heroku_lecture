var hello = function (message) {
    return "Hello world!\nHere is a custom message:  " + message;
};

var awkward = function () {
    return "I really have nothing to talk about with you.";
};

module.exports.hello = hello;
module.exports.awkward = awkward;