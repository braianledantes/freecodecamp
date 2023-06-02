function palindrome(str) {
    const strInverted = str.split('').reverse().join('')
    const clean = (s) => s.toLowerCase().replace(/[^a-z\d]/g, '')
    return clean(strInverted) === clean(str);
}

palindrome("1 eye for of 1 eye.");