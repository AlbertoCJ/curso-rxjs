import { Observable, Observer, Subject } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado [obs]')
};

const intervalo$ = new Observable( subs => {
    const intervalID = setInterval(
        () => subs.next( Math.random() ),1000
    );

    return () => clearInterval( intervalID );
})


/**
 * 1- Casteo múltiple
 * 2- También es un observer
 * 3- Next, error y complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe( subject$ );



// const subs1 = intervalo$.subscribe( rnd => console.log('subs1', rnd) );
// const subs2 = intervalo$.subscribe( rnd => console.log('subs2', rnd) );

const subs1 = subject$.subscribe( rnd => console.log('subs1', rnd) );
const subs2 = subject$.subscribe( rnd => console.log('subs2', rnd) );


setTimeout( () => {

    subject$.next(10);

    subject$.complete();

    subscription.unsubscribe();

}, 3500 );