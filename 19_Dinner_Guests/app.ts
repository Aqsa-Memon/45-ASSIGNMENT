let Guest_list: string[] = ["Imran Khan", "Atif Aslam", "Ali Zafar"];

// for (let i = 0; i < Guest_list.length; i++) {
//console.log("Dear Mr. " + Guest_list[i] + ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n")
//}
let absent_Guest: string = 'Imran Khan';
let new_Guest:  string = 'Kamran Tessori';
Guest_list[0] = new_Guest ;

// for (let i = 0; i < Guest_list.length; i++) {
//console.log("Dear Mr. " +Guest_list[i] + ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n");
//}
// console.log(`Mr. ${absent_Guest} is not coming to the party.`);
// console.log('Good New ! we find Big Table so we are inviting 3 more Guests.' )

Guest_list.unshift('Sir Zia Khan');
Guest_list.splice( 2, 0, 'Naseem Shah');
Guest_list.push('Asim Azhar');
      
// for (let i = 0; i < Guest_list.length; i++) {
// console.log( "Dear Mr. " + Guest_list[i] + ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n");
// }
   //Sorry Message TO Guest For Not Invited.
// console.log('\nSorry We Can Not Arrange Big Table, Only Two People will Be Invited.');
while(Guest_list.length > 2){
let remove_Guest = Guest_list.pop();
//  console.log(`Sorry Mr. ${remove_Guest}, You are not invited for dinner.`);
}
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log( "Dear Mr. " + Guest_list[i] +",\n\nYou Are Still Invited.\n\nThank You!\n\n")
//}
 Guest_list.splice(0, 2);
 console.log(Guest_list);
 
     //EXERCISE 19
   //print a message indicating the number of people you are invited to dinner.
   
   console.log(`Total number of Guest Are: ${Guest_list.length}`);  

