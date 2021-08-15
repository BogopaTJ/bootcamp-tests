describe('The greet function', function () {

    it('should return "Hello, Bob" when i greet Bob', function () {

        assert.equal('Hello, Bob', greet('Bob'));
    });
    it('should return "Hello, Sam" when i greet Sam', function () {

        assert.equal('Hello, Sam', greet('Sam'));
    })
})

