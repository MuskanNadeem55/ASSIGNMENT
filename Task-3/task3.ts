// Name Cases: Store a person’s name in a variable, and then print that person’s name in 
// lowercase, uppercase, and titlecase.

let userName="Muskan Nadeem";
console.log("Lowercase:", userName.toLowerCase())
console.log("Uppercase:", userName.toUpperCase())
console.log("Titlecase:", userName.replace(/\b\w/g, char => char.toUpperCase()));