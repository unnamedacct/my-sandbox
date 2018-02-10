/* Function grabbed from freecodecamp.org */
function _isPalindrome(str) {
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
    
    var lowRegStr = str.toLowerCase().replace(re, '');
    // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
    // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
    // var lowRegStr = "amanaplanacanalpanama";
        
    // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
    // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
    // And, var reverseStr = "amanaplanacanalpanama";
    
    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}

function _displayStatus(success, enteredText) {
    const statusBar = document.getElementById("status");
    statusBar.style.display = "block";
    statusBar.style.backgroundColor = (success ? "green" : "red");
    spanElement = statusBar.getElementsByTagName("span")[0];
    spanElement.innerText = 
        (success ? 
            "The word '" + enteredText + "' is a palindrome" :
            "The word '" + enteredText + "' is not a palindrome"
        );
}

function _createRecord(enteredText) {
    const tableBody = document.getElementsByTagName("tbody")[0];
    const tableEntry = document.createElement('tr');
    const isPalindrome = _isPalindrome(enteredText)
    const resultDiv = document.getElementById("result");

    resultDiv.style.display = "inline";

    if (enteredText.length == 0)
        return;

    tableEntry.innerHTML = 
        "<td>" + enteredText + "</td> <td>" + ( isPalindrome ? "yes" : "no" ) + "</td>";
    tableBody.appendChild(tableEntry);

}

function processInput() {
    const inputField = document.getElementById("entry");
    const enteredText = inputField.value.trim();
    const isPalindrome = _isPalindrome(enteredText);

    _createRecord(enteredText);
    _displayStatus(isPalindrome, enteredText);
    inputField.value = ""; 
}
