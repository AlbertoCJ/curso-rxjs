import { asyncScheduler } from 'rxjs';

const saludar = () => console.log('Hola mundo');
const saludar2 = nombre => console.log(`Hola ${ nombre }`);

// asyncScheduler.schedule( saludar, 2000 );
// asyncScheduler.schedule( saludar2, 2000, 'Alberto' ); // Simula al setTimeout

const subs = asyncScheduler.schedule( function(state){

    if (state === 10) subs.unsubscribe();

    console.log('state', state);

    this.schedule( state + 1, 1000 ); // Simula setInterval

}, 3000, 0);