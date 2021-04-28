import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
}

/**
 * Emite el valor cada segundo
 */
const interval$ = interval(1000);

console.log('inicio');
interval$.subscribe( observer );
console.log('fin');

/**
 * Emite los valores cada 2 segundos
 */
const timer$ = timer(2000);

console.log('inicio');
timer$.subscribe( observer );
console.log('fin');


/**
 * Cada 2 segundos emite el valor hasta 1000 veces
 */
const timer2$ = timer(2000, 1000);

console.log('inicio');
timer2$.subscribe( observer );
console.log('fin');



/**
 * A la fecha actual le suma 5 segundos y emite cuando llegue ese momento
 */
const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );

const timer3$ = timer( hoyEn5 );

timer3$.subscribe( observer );