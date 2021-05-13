import { ajax } from 'rxjs/ajax';


const url = 'https://httpbin.org/delay/1';


const get = ajax.get( url, { 'mi-token': 'ABC123' });

const post = ajax.post( url, { id: 1, nombre: 'Alberto' }, { 'mi-token': 'ABC123' });

const put = ajax.put( url, { id: 1, nombre: 'Alberto' }, { 'mi-token': 'ABC123' });


// get.subscribe(console.log);
// post.subscribe(console.log);
// put.subscribe(console.log);



// Otra forma pasando un objeto json
ajax({
    url: url,
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Alberto'
    }
})
.subscribe( console.log );