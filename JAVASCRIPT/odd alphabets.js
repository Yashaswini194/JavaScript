function printOddDigitAlphabets() {
    // Loop through the alphabet, but treat numbering starting from 0
    for (let i = 1; i < 26; i += 2) {
        let alphabet = String.fromCharCode(65 + i); // Convert number to corresponding alphabet
        console.log(alphabet);
    }
}

printOddDigitAlphabets();
