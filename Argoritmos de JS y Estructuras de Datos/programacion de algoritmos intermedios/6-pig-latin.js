function translatePigLatin(str) {
    return str
        .replace(/^[aeiou]\w*$/i, "$&way")
        .replace(/^([^aeiou]+)(\w*)$/i, "$2$1ay");;
}

translatePigLatin("california");