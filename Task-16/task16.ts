//Task 16
let guestList = ["Nabiyha", "Nafia","Asiya","Fatima"];

for (const guest of guestList) {
    let invitation =`Dear ${guest}, your presence would be greatly appreciated if you could join us.`
    console.log(invitation); 
}
console.log("yohoo guys! I've found a bigger table let's invite some more friends");
guestList.unshift("Hira")
guestList.splice(3,0,"Afeefa")
guestList.push("Nimra")
console.log(guestList);

for (const guest of guestList) {
    let invitation =`Dear ${guest}, your presence would be greatly appreciated if you could join us.`
    console.log(invitation); 
}

