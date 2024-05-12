var Guest_list = ["Imran Khan", "Atif Aslam", "Ali Zafar"];
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log("Dear Mr. " + Guest_list[i] + is our pleasure to invite you in our party.Thank You!")}
var absent_Guest = 'Imran Khan';
var new_Guest = 'Kamran Tessori';
Guest_list[0] = new_Guest;
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log("Dear Mr. " + Guest_list[i] +",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n");
//}
console.log("Mr. ".concat(absent_Guest, "is not coming to the party."));
console.log('Good News! We find big table so we are inviting3 more guests.');
Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2, 0, 'Naseem Shah');
Guest_list.push('Asim Azhar');
// for (let i = 0; i < Guest_list.length; i++) {
// console.log( "Dear Mr. " + Guest_list[i] + ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n");
//  }; 
//Sorry Message TO Guest For Not Invited.
console.log('\nSorry We Can Not Arrange Big Table, Only Two People will Be Invited.');
while (Guest_list.length > 2) {
    var remove_Guest = Guest_list.pop();
    console.log("Sorry Mr. ".concat(remove_Guest, ", You are not invited for dinner."));
}
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr. " + Guest_list[i] + ",\n\nYou Are Still Invited.\n\nThank You!\n\n");
}
Guest_list.splice(0, 2);
console.log(Guest_list);
