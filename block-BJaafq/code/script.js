function add(numA,numB){
    return numA+numB;
}
function multiply(numA,numB){
    return numA*numB;
}
let expected, result;
function test(message,callback){
    try {
        callback();
        console.log(`RUNNING`,message);
    } catch (error){
        console.error(error);
        console.log(`FAILED`,message);
    }
}
function expect(actual){
    return {
        toEqual: function(expected){
            if(actual !== expected){
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        }    
    };
}
function testAdd(){
    result = add(2,9);
    expected = 11;
    expect(result).toEqual(expected);

};
test('adding 2 and 9',add(2,9));