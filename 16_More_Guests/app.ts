let Guest_list: string[] = ["Imran Khan", "Atif Aslam", "Ali Zafar"];



let absent_Guest: string = 'Imran Khan';

let new_Guest:  string = 'Kamran Tessori';

Guest_list[0] = new_Guest ;

for (let i = 0; i < Guest_list.length; i++) {
  console.log( "Dear Mr. " + Guest_list[i] + ",It is our pleasure to invite you in our party.\n\nThank You!");
  }
  console.log(`Mr. ${absent_Guest} is not coming to the party.`);
      
      console.log('Good News ! we find Big Table so we are inviting 3 more Guests.' )

      
      Guest_list.unshift('Sir Zia Khan');
       
      Guest_list.splice( 2, 0, 'Naseem Shah');
      
      Guest_list.push('Asim Azhar');
      
      for (let i = 0; i < Guest_list.length; i++) {
        console.log("Dear Mr. " + Guest_list[i] +",It is our pleasure to invite you in our party.\n\nThank You!");
     }

