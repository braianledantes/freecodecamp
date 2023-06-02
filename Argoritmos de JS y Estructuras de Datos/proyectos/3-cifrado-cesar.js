function rot13(str) {
    return str
        .split('')
        .map(char => {
            let code = char.charCodeAt(0);

            if (65 <= code && code <= 90) {
                let desChar = code - 13;
                if (desChar < 65) desChar += 26;

                return String.fromCharCode(desChar);
            }

            return char;
        })
        .join('');
}

console.log(rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ")); 