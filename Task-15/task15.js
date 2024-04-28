// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you 
// need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestArray = ["Nabiyha", "Nafia", "Asiya", "Fatima"];
var canNotAttend = "Nafia";
var message = ("can not attend the dinner");
console.log(canNotAttend + " " + message);
var newGuestArray = "Hira";
guestArray[guestArray.indexOf(canNotAttend)] = newGuestArray;
guestArray.map(function (items) { return console.log("Dear ".concat(items, " you are invited to the dinner")); });
