let guest_List:string[] =['Imran', 'Salman', 'Abdul Basit'];
//for( let i=0; i<guest_List.length; i++){
    //console.log('Dear Mr.' + guest_List[i] + ',\n\nIt is our pleasure to invite you to our party.\n\nThank You!\n\n')

//}
let absent_Guest:string = 'Imran';
let new_Guest:string = 'Khaliq';
guest_List[0] = new_Guest ;
// for ( let i=0; i<guest_List.length; i++){
//     console.log('Dear Mr.' +guest_List[i] + ',\n\nIt is our pleasure to invite you to our party.\n\nThank You!\n\n')
// }
console.log(`Mr. ${absent_Guest} is not coming to the party.`)
console.log('Good News! We find Big Table So we are inviting 3 more guests.')

// array ma 3 guest add kiye hain.
guest_List.unshift('Saad');
guest_List.splice(2 , 0 , 'Arfan');
guest_List.push('Ahmad');


// yehan par mene 6 guest ke array ko print kraya he.
for ( let i=0; i<guest_List.length; i++){
    console.log('Dear Mr.' +guest_List[i] + ',\n\nIt is our pleasure to invite you to our party.\n\nThank You!\n\n')
}

// sorry Message to guest for not inviting.
console.log(`\nSorry we can not arrange big table, Only Two peoples will be invited.`);

// yehan par mene guest remove kiye hain.
while(guest_List.length > 2 ){
    let remove_guest = guest_List.pop()
    console.log(`Sorry Mr. ${remove_guest},You are not invited for dinner.`);
}

// Hamare bache howe 2 invited guest.
for( let i=0; i<guest_List.length; i++){
    console.log('Dear Mr.'+guest_List[i] +',\n\nYou are still invited.\n\nThank You!\n\n') 
}
// mene sare guest array se remove kar diye.
guest_List.slice(0,2);
console.log(guest_List);