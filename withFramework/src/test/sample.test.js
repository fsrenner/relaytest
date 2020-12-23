const add = (x, y) => x + y;

describe('Sample Test Setup to Make Sure Jest Is Working', () => {

    test('should return 5', ()=> {
        const result = add(3, 2);
        expect(result).toBe(5);
    });

});