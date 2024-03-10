let personname :string = '';

personname = prompt('what is your name?') || '';

let lowercase :string =personname .toLowerCase();
let uppercase :string =personname .toUpperCase();
let titlecase :string =personname .split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
toLowerCase()).join('')

if( personname !== null && personname !== ''){
    alert(`Hello ${personname}, Here are you name in :
    LowerCase: ${lowercase}
    UpperCase: ${uppercase}
    TitleCase: ${titlecase}`)
}
else{
    alert('Please fill your name !')
}