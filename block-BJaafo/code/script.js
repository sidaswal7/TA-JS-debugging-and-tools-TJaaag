function getFullName(fName,sName){
    return fName+' '+sName;
}
let result = getFullName('Arya','Stark');
let expectedStringOne = 'Arya stark';
if(result!==expectedStringOne){
    throw new Error(`${result} is not equal to ${expectedStringOne}`);
}
let expectedStringTwo = 'Arya Stark';
if(result!==expectedStringTwo){
    throw new Error(`${result} is not equal to ${expectedStringTwo}`);
} else {
    console.log(`${result} is equal to ${expectedStringTwo}`);
}