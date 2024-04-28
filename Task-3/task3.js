// Name Cases: Store a person’s name in a variable, and then print that person’s name in 
// lowercase, uppercase, and titlecase.
var userName = "Muskan Nadeem";
console.log("lowercase:", userName.toLowerCase());
console.log("uppercase:", userName.toUpperCase());
console.log("Titlecase:", userName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
