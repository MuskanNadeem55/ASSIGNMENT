var magicians = ["Nabiyha", "Nafia", "Asiya"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
function show_magicians(magicians) {
    console.log(magicians);
}
make_great(magicians);
show_magicians(magicians);
