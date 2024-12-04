function printReverseAlphabet() {
    // Loop from 90 (ASCII code for 'Z') to 65 (ASCII code for 'A')
    for (let i = 90; i >= 65; i--) {
        let alphabet = String.fromCharCode(i); // Convert the ASCII code to the corresponding character
        console.log(alphabet);
    }
}

printReverseAlphabet();
