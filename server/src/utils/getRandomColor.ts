export default function getRandomColor() {
    var letters = `0123456789ABCDEF`
    var colors =`#`
    for(var i = 0; i < letters.length; i++) {
        colors += letters[Math.floor(Math.random() * 16)]
    }

    return colors;
}