var Guest_list = ["Imran Khan", "Atif Aslam", "Ali Zafar"];
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr. " + Guest_list[i] + ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n");
}
var absent_Guest = 'Imran Khan';
var new_Guest = 'Kamran Tessori';
Guest_list[0] = new_Guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Mr." + Guest_list[i] + ' ' + "you are invited in dinner");
}
console.log("Mr.".concat(absent_Guest, " is not coming to the party."));
