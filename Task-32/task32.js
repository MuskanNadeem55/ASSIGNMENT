var current_users = ["muskan", "nafia", "nabiyha", "asiya"];
var new_users = ["fatima", "dua", "zoya", "warda"];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users.toLocaleLowerCase() === new_users.toLocaleLowerCase(); })) {
        console.log("".concat(new_users, ", Will need to enter a new username."));
    }
    else {
        console.log("".concat(new_users, ", is available."));
    }
});
