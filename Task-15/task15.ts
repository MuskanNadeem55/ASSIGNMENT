// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you 
// need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestArray : string [] = ["Nabiyha", "Nafia", "Asiya", "Fatima"];
let canNotAttend : string = "Nafia";
let message: string =  ("can not attend the dinner");
console.log(canNotAttend + " " + message);

let newGuestArray : string = "Hira"
guestArray [guestArray.indexOf(canNotAttend)] = newGuestArray;

guestArray.map((items) => console.log(`Dear ${items} you are invited to the dinner`));

