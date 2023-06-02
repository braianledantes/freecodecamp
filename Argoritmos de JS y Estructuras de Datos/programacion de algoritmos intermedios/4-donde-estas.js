function whatIsInAName(collection, source) {
    const keys = Object.keys(source)
    return collection.filter(elem => keys.every(k => elem[k] === source[k]))
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
