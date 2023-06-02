function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }
  return str.split("").map(c => [c, pairs[c]]);
}

pairElement("GCG");