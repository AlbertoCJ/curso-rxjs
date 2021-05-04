import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

// range(1,5).pipe(
//     map<number,number>( val => val * 10 )
// )
// .subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

// keyup$
// .pipe(map(event => event.code))
// .subscribe( code => console.log('map', code) );

// keyup$
// .pipe(pluck('key')) // Mismo resultado que lo anterior
// .subscribe( key => console.log(key) );

keyup$
.pipe(pluck('target', 'baseURI')) 
.subscribe( key => console.log(key) );

// keyup$
// .pipe(mapTo('Tecla presionada: '));