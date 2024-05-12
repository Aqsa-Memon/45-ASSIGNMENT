let Guest_list = ["Imran Khan", "Atif Aslam", "Ali Zafar"];

for (let i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr. " + Guest_list[i] +",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n");
}
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
Guest_list[0] = new_Guest;

for (let i = 0; i < Guest_list.length; i++) {
    console.log("Mr." + Guest_list[i] + ' ' + "you are invited in dinner");
}
console.log(`Mr.${absent_Guest} is not coming to the party.`)