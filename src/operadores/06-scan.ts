import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';



const numeros = [1,2,3,4,5];

const totalAccumulador = (acc, cur) => acc + cur;

// reduce
from( numeros )
.pipe(
    reduce( totalAccumulador, 0 )
)
.subscribe( console.log );


// scan
from( numeros )
.pipe(
    scan( totalAccumulador, 0 )
)
.subscribe( console.log );



// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'Alb', autenticado: false, token: null },
    { id: 'Alb', autenticado: true, token: 'ABC' },
    { id: 'Alb', autenticado: true, token: 'ABC123' }
];

const state$ = from( user ).pipe(
    scan<Usuario>( (acc, cur) => {
         return { ...acc, ...cur };
        }, { edad: 33 })
);

const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe( console.log );