let users: string[]=["muskan","nafia","nabiyha","asiya","fatima"];

for(let user of users){
    if (user === "admin"){
        console.log("Hellow admin, would you like to see a status report")
    }else {
        console.log(`hello ${user}, Thankyou for logging in again.`)
    }
}