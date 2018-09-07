module.exports = {
    getLenght: str => str.length,
    convertCase: (str, c) => {
        if (c === "U") {
            return str.toUpperCase();
        }
        if (c === "L") {
            return str.toLowerCase();
        }
    }
}
