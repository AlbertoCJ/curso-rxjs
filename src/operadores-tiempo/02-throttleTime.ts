import { asyncScheduler, fromEvent } from 'rxjs';
import { distinctUntilChanged, pluck, throttleTime } from 'rxjs/operators';


const click$ = fromEvent( document, 'click' );

click$
.pipe(
    throttleTime(3000) // Emite el primero instantaneamente y no emite mas hasta pasar 3 seg
);
// .subscribe( console.log );


const input = document.createElement('input');
document.querySelector('body').append( input );


const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );

input$
.pipe(
    throttleTime(2000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe( console.log );