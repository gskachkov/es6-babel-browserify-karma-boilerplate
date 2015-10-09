let stampit = require('stampit');

var myStamp =  
    stampit()
        .methods({
            sayHello: function() {
                return 'Hello';
            }
	});

module.exports = myStamp();
