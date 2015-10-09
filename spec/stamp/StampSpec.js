let myStamp = require('../../src/stamp/Stamp.js');

describe('stamp from Stamp.js', function () {
    it('should be able to say hello', () => {
        expect(myStamp.sayHello()).toEqual('Hello');
    });
});
