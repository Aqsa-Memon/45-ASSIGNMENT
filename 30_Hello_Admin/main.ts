
const user_Name: string[] = ['admin','bugs Bunny','daffy duck','sylvester','tweety'];

for(let i=0; i<user_Name.length; i++){
    if(user_Name[i] === "admin"){
        console.log('Hello Admin, would you like to see a status report?');
    }
    else{
        console.log(`Hello ${user_Name[i]},Thank You For Loggin In Again.`)
    }
}
