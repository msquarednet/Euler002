

describe("Euler002", function() {
    it("exists", function() {
        expect(Euler).toBeDefined();
    });

    describe("Euler.doStuff", function() {
        it("exists", function() {
            expect(Euler.doStuff).toBeDefined();
        });
        it("doStuff() = 0", function() {
            expect(Euler.doStuff()).toEqual(0);
        });
        it("doStuff(10) = 10", function() {
            expect(Euler.doStuff(10)).toEqual(10);
        });
        it("doStuff(100) = 44", function() {
            expect(Euler.doStuff(100)).toEqual(44);
        });    
        it("doStuff(4000000) = 4613732", function() {
            expect(Euler.doStuff(4000000)).toEqual(4613732);
        });    
        
    });    
    
});