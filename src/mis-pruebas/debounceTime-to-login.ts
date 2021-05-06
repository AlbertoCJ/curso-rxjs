import { from, fromEvent, Subscription } from "rxjs";
import { mergeMap, debounceTime } from 'rxjs/operators';


const min = 1;

const events = [
    'scroll',
    'wheel',
    'touchmove',
    'touchend',
    'click',
    'mousemove'
];

const sub$: Subscription = from(events)
.pipe(
    mergeMap(event => fromEvent(document, event)),
    debounceTime(min * 60 * 1000)
)
.subscribe(
    events => {  
        console.log('Al login');
        sub$.unsubscribe();
    }
);
