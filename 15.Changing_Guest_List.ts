let Guest_List:string[] =['Imran','Salman','Abdul Basit'];

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr.' +Guest_List[i] +',\n\nIt is our pleasure to invite you to our party \n\nThank you!\n\n')

}
let absent_Guest:string = 'Imran';

let new_Guest:string = 'Khaliq';

Guest_List[0] =new_Guest ;

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr.' +Guest_List[i] + ',\n\nIt is our pleasure to invite you  to our party\n\nThanks you!\n\n')
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`)