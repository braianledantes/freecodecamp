function convertToRoman(num) {
    const romanNumbers = [
        { simbol: 'M', value: 1000 },
        { simbol: 'CM', value: 900 },
        { simbol: 'D', value: 500 },
        { simbol: 'CD', value: 400 },
        { simbol: 'C', value: 100 },
        { simbol: 'XC', value: 90 },
        { simbol: 'L', value: 50 },
        { simbol: 'XL', value: 40 },
        { simbol: 'X', value: 10 },
        { simbol: 'IX', value: 9 },
        { simbol: 'V', value: 5 },
        { simbol: 'IV', value: 4 },
        { simbol: 'I', value: 1 }
    ];

    let romanNumber = "";

    romanNumbers.forEach(rm => {
        romanNumber += rm.simbol.repeat(num / rm.value);
        num = num % rm.value;
    });

    return romanNumber;
}

console.log(convertToRoman(44));