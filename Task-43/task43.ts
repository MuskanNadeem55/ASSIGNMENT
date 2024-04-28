const magicians: string[] = ["Muskan", "Nafia", "Nabiyha"];

function showMagicians(magicians: string[])
{
    magicians.forEach(magicians => {
        console.log(magicians)
    })
}
function makeGreat(magicians: string[]) {
    const greatMagicians: string[] = []
    for (const magician of magicians) {
        greatMagicians.push(`The Great ${magician}`)
    }
    return greatMagicians
}

let greatMagicians = makeGreat([...magicians]);
console.log("original magicians.");
showMagicians(magicians);
console.log("Great magicians:");
showMagicians(greatMagicians);