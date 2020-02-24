function toJadenCase(str) {
  return str
    .split(" ")
    .map(el => el[0].toUpperCase() + el.substr(1))
    .join(" ");
}
console.log(toJadenCase("hello my dear friends"));
