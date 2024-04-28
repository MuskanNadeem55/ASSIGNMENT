let current_users: string[] = ["muskan", "nafia","nabiyha", "asiya"];
let new_users: string[] = ["fatima", "dua", "zoya", "warda"];

new_users.forEach(new_users =>{
if
 (current_users.some(current_users => current_users.toLocaleLowerCase()===new_users.toLocaleLowerCase())){
        console.log(`${new_users}, Will need to enter a new username.`);
    }else 
    {
        console.log(`${new_users}, is available.`);
    }
});