
let magician : string[] = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];

function copyArry(arr:string[]){
    return [...arr]
}



function make_great ( magicianArry:string[] ){

    for(let i=0; i<magicianArry.length; i++){

        'the Great' + magicianArry[i]
    }
}

function show_magicians(magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}


const copyMagicianArray = copyArry(magician)

make_great(copyMagicianArray);

console.log('\n\nThis is my orignal array:');
show_magicians(magician);

console.log('\n\nThis is my modfied copy of the array:');
show_magicians(copyMagicianArray);