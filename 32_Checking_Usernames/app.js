let current_Users = ['ZeesHan', 'Kashif', 'Danish', 'ZaId', 'Umair'];
let new_Users = ['Saad', 'ZeesHan', 'sarim', 'rayyan', 'ZaId'];
new_Users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_Users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The UserName ${newUsername} is not available.please write a different username`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
export {};
