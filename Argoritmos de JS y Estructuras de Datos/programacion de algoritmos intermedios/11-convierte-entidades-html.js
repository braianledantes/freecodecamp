function convertHTML(str) {
    return str
        .replaceAll('&', "&amp;")
        .replaceAll('<', "&lt;")
        .replaceAll('>', "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;");
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));