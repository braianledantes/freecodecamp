function fearNotLetter(str) {
    const alfabet = "abcdefghijklmnopqrstuvwxyz";
    const ini = alfabet.search(str[0]);
    const end = alfabet.search(str[str.length - 1]);
    const str2 = alfabet.substring(ini, end + 1);

    for (let i = 0; i < str2.length; i++) {
        if (!str.includes(str2[i])) return str2[i];
    }
    return undefined;
}

console.log(fearNotLetter("abce"));