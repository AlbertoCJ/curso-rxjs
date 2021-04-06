import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado [obs]')
};


const intervalo$ = new Observable<number>( subscriber => {

    // Crear un contador 1,2,3,4,5,.....
    let count = 1;


    const interval = setInterval( () => {
        // Cada segundo
        subscriber.next( count );
        count++;
    }, 1000);

    return () => {
        clearInterval(interval);
        console.log('Intérvalo destruido');
    }

} );


const subscription1 = intervalo$.subscribe( num => console.log('Num: ', num ));
const subscription2 = intervalo$.subscribe( num => console.log('Num: ', num ));
const subscription3 = intervalo$.subscribe( num => console.log('Num: ', num ));

setTimeout( () => {
    subscription1.unsubscribe();
    subscription2.unsubscribe();
    subscription3.unsubscribe();

    console.log('Completado timeout');
}, 3000);