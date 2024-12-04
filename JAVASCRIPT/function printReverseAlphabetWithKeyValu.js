function printReverseAlphabetWithKeyValues() {
    // Loop from 90 (ASCII code for 'Z') to 65 (ASCII code for 'A')
    for (let i = 90; i >= 65; i--) {
        let alphabet = String.fromCharCode(i); // Convert ASCII code to character
        let keyValue = 26 - (i - 65); // Calculate key value where 'Z' is 26, 'A' is 1
        console.log(`Letter: ${alphabet}, Key Value: ${keyValue}`);
    }
}

printReverseAlphabetWithKeyValues();
