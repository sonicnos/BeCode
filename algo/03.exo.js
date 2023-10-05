function caesarCipher (str, num) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabettoUpperCase = alphabet.toUpperCase();
    let alphabettoLowerUpper = alphabet + alphabettoUpperCase + " ";
    let index = [];
    let newIndex = []
    let newStr = [];
    console.log(str)
    console.log(alphabettoLowerUpper)
    
    for (let i=0; i<str.length; i++){
            index.push(alphabettoLowerUpper.indexOf(str[i])); 
        }
        
        console.log(index + 'index')
    
    for (let i=0; i<index.length; i++) {
        newIndex[i] = index[i] + num;
        if (newIndex[i] >= 23 && index[i] <= 23) {
            newIndex[i] = (newIndex[i] - 23) - num
        }

    }
    console.log(newIndex)
    
    for (let i=0; i<newIndex.length; i++){
        newStr.push(alphabettoLowerUpper[newIndex[i]])
    }
    console.log(newStr)
    console.log("finish")
}

caesarCipher("zoo keeper", 2);
caesarCipher("bqq mggrgt", -2);
caesarCipher("My name is Henrique", 3);
