var Guest_list = ["Imran Khan", "Atif Aslam", "Ali Zafar"];
var absent_Guest = 'Imran Khan';
var new_Guest = 'Kamran Tessori';
Guest_list[0] = new_Guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr. " + Guest_list[i] + ",It is our pleasure to invite you in our party.\n\nThank You!");
}
console.log("Mr. ".concat(absent_Guest, " is not coming to the party."));
console.log('Good News ! we find Big Table so we are inviting 3 more Guests.');
Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2, 0, 'Naseem Shah');
Guest_list.push('Asim Azhar');
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr. " + Guest_list[i] + ",It is our pleasure to invite you in our party.\n\nThank You!");
}
