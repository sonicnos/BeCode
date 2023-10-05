/*
A palindrome is any word or phrase that spells the same way both backward and forward.

For example : race car is a palindrome. (don't take spaces, periods, dots, etc in consideration)

Other examples : Madam, I'm Adam, radar, kayak, etc.

You should create a function isPalindrome that takes a parameter text and returns a boolean indicating if the provided text is a palindrome or not.

Notes
You should be able to to ignore all special characters, spaces, dots, periods, etc. and be case insensitive
Expected results
isPalindrome("kayak") ---> true
isPalindrome("race car") ---> true
isPalindrome("hello world") ---> false
isPalindrome("Madam, I'm Adam") ---> true
*/



function isPalindrome(str) {
    str = str.toLowerCase()
            .replace(",", "")
            .replace(" ", "")
            .replace("'", "");
    
    let strSplit = str.split("");
    let check = 0;
    

    let strSplitReverse = str.split("").reverse();

    for (let i=0; i < strSplit.length; i++){
        if (strSplit[i] == strSplitReverse[i]){
            check += 1;
        }

    }
    return check == strSplit.length
    
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("hello world"));
console.log(isPalindrome("Madam, I'm Adam"));

