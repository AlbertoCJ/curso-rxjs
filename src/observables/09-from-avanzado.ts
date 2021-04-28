import { of, from } from 'rxjs';



const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
};

// const source$ = from([1,2,3,4,5]);
// const source$ = of([1,2,3,4,5]);

// const source$ = from('Alberto');

// source$.subscribe( observer );



// const sourcer$ = from( fetch('https://api.github.com/users/klerith') );

// sourcer$.subscribe( async(resp) => {
//     console.log(resp);

//     const dataRsep = await resp.json();
//     console.log(dataRsep);
// } );



const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for(let id of miIterable) {
//     console.log(id);
// }

from( miIterable ).subscribe( observer );