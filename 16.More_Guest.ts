let guest_List:string[] =['Imran', 'Salman', 'Abdul Basit'];

//for( let i=0; i<guest_List.length; i++){
    //console.log('Dear Mr.' + guest_List[i] + ',\n\nIt is our pleasure to invite you to our party.\n\nThank You!\n\n')

//}

let absent_Guest:string = 'Imran';

let new_Guest:string = 'Khaliq';

guest_List[0] = new_Guest ;

for ( let i=0; i<guest_List.length; i++){
    console.log('Dear Mr.' +guest_List[i] + ',\n\nIt is our pleasure to invite you to our party.\n\nThank You!\n\n')
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`)

console.log('Good Newa! We find Big Table So we are inviting 3 more guests.')

guest_List.unshift('Saad');
guest_List.splice(2 , 0 , 'Arfan');
guest_List.push('Ahmad');

for ( let i=0; i<guest_List.length; i++){
    console.log('Dear Mr.' +guest_List[i] + ',\n\nIt is our pleasure to invite you to our party.\n\nThank You!\n\n')
}


