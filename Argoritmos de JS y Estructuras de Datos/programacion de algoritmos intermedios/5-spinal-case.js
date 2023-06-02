function spinalCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/\s+|_+|-+/g, "-")
        .toLowerCase();
}

spinalCase('TeleTubbies say_Eh-oh');