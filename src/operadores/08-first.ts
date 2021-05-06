import { fromEvent } from "rxjs";
import { first, map, tap } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>( document, 'click' );

click$
.pipe(
    tap<MouseEvent>( () => console.log ),
    first( event => event.clientY >= 150 )
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});



// Destructuracion de objetos en el map

// click$
// .pipe(
//     // tap<MouseEvent>( () => console.log ),
//     map( ({ clientX, clientY }) => ({ clientX, clientY }) ),
//     first( eventAny => eventAny.clientY >= 150 )
// )
// .subscribe(
//     val => console.log(val)
// );
