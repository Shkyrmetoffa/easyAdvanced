const getRamdomNumber = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

module.exports = getRamdomNumber;