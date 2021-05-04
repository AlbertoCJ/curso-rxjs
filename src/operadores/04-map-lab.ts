import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non bibendum neque, nec semper magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam a orci leo. Cras ante massa, sollicitudin vel elit et, rutrum facilisis justo. Nullam blandit libero non interdum rutrum. Duis vel purus non ex semper sodales. Donec suscipit arcu id tellus scelerisque tincidunt. Nam odio est, tempus in diam quis, feugiat fringilla eros. Phasellus blandit at risus vel aliquam. Donec ut tellus id leo efficitur convallis. Phasellus euismod, felis a tempus sodales, libero orci convallis neque, sit amet elementum lacus leo sodales turpis.
<br/><br/>
Duis auctor libero at tellus finibus, at maximus ligula pharetra. Duis et eleifend risus, a tincidunt nisl. Donec at nibh eu est accumsan convallis. Proin tristique sollicitudin turpis, eget semper nibh elementum ut. Vestibulum dignissim consequat tellus, eget luctus nunc sollicitudin non. Quisque facilisis viverra dictum. Etiam pretium felis diam, eget pulvinar ex pretium non. Suspendisse vestibulum viverra justo, sit amet gravida velit. Nam ultricies, lacus vitae ullamcorper mattis, tortor nibh fermentum velit, nec fringilla libero lorem id dolor. Donec eleifend, augue at rhoncus pellentesque, quam elit porta purus, nec fringilla tortor ex ac mi. Donec non diam a tellus pulvinar scelerisque id quis augue. Sed auctor metus sed odio ullamcorper semper. In augue nulla, porttitor nec venenatis et, semper non nisl.
<br/><br/>
Proin porta felis sit amet velit sollicitudin blandit. Vivamus facilisis ante sit amet nisl placerat tristique. Nunc porta, lacus eget imperdiet eleifend, libero elit vestibulum velit, eu tincidunt nisl libero et odio. Morbi finibus, magna a faucibus fringilla, augue tellus condimentum orci, id sodales sapien augue nec lectus. Duis lacinia posuere lorem a tincidunt. In at diam purus. In sit amet nisi rutrum, eleifend risus in, congue arcu. Suspendisse ullamcorper lacinia risus, nec sagittis odio sollicitudin non. Etiam condimentum nibh in sodales suscipit. Vestibulum varius lacus nec massa fermentum tristique. Nunc lectus dolor, commodo ut libero ac, sagittis ultricies ipsum. Integer facilisis dapibus metus, nec iaculis sapien consequat vel. Mauris condimentum, ex in porta faucibus, odio eros cursus quam, non congue mi erat at lectus.
<br/><br/>
Sed dui justo, malesuada eget urna in, aliquet luctus lacus. Nulla dignissim auctor semper. Vestibulum magna felis, gravida at arcu quis, condimentum vestibulum sem. Vestibulum eget dui nisi. Suspendisse scelerisque quis velit vitae faucibus. Praesent et elit et quam porta molestie id et erat. Nunc et aliquet purus, et tempor libero. In tempus dapibus posuere. Donec quis neque in neque aliquet tincidunt tincidunt non dolor. Integer tempor accumsan tempus. Nulla volutpat velit vel augue egestas, at sodales tortor gravida. Fusce volutpat mi lobortis dui ornare, sit amet placerat mi placerat. Pellentesque imperdiet posuere mauris. Nunc euismod rhoncus metus, hendrerit mattis mi lobortis non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br/><br/>
Aliquam luctus velit quis odio lobortis pulvinar. Quisque iaculis blandit leo non malesuada. Curabitur eget nisi dui. Nullam quis iaculis magna, bibendum interdum nulla. Ut pellentesque at urna eu efficitur. Nunc finibus leo ante, sit amet fermentum purus suscipit varius. Ut quis purus neque. Praesent euismod elit vitae purus commodo bibendum. Suspendisse velit dolor, iaculis vitae enim in, vehicula vehicula justo. Pellentesque aliquam placerat malesuada. In ut arcu ut arcu bibendum placerat eu sed tortor. Mauris sodales, lacus vel faucibus rutrum, nunc magna aliquam odio, et gravida arcu tortor at justo.
<br/><br/>
Pellentesque ut quam magna. Etiam at bibendum est. Vivamus eget nisl placerat mi accumsan ultricies. Fusce vulputate et nunc nec imperdiet. In efficitur, sem accumsan viverra varius, urna turpis elementum nibh, ut fringilla neque massa et velit. Sed volutpat diam at fringilla lacinia. Nam posuere porttitor felis, sed ornare odio. Suspendisse sed urna porttitor, luctus nisl vitae, tincidunt sem. Aenean quis rhoncus purus. In at placerat urna. Sed fringilla, velit eu sodales iaculis, erat velit aliquet quam, et vulputate eros tortor eu ligula. Nullam molestie scelerisque massa, sit amet vulputate erat tincidunt vitae. Nullam aliquam, elit quis imperdiet viverra, nisl lorem pulvinar nisi, ut sagittis sapien enim nec nulla. Cras finibus tincidunt orci et ultrices. Proin pellentesque interdum sollicitudin. Integer consectetur, nisl et ultrices lacinia, nibh sapien molestie leo, posuere mollis libero dui nec ligula.
<br/><br/>
Donec ornare sodales laoreet. Pellentesque pulvinar lorem purus, nec venenatis diam pellentesque non. Integer id massa neque. Aenean fermentum arcu in justo efficitur lacinia. Maecenas sagittis varius dapibus. Aliquam hendrerit vestibulum massa sed venenatis. Maecenas nec suscipit metus. Phasellus tincidunt venenatis elit, ut sollicitudin orci iaculis sit amet. Morbi risus magna, venenatis vel velit non, vestibulum cursus mauris. Sed in venenatis ipsum. Proin rhoncus posuere tortor, id condimentum elit tincidunt a. Curabitur at ipsum luctus, consectetur nulla non, laoreet sapien.
<br/><br/>
Nulla sagittis mauris et eros accumsan, vitae hendrerit quam scelerisque. Vestibulum posuere sit amet turpis sit amet tincidunt. Duis quis elit purus. Sed sed tellus enim. Ut luctus volutpat tempus. Maecenas convallis facilisis sapien. Fusce ornare, nulla egestas lacinia pulvinar, velit leo aliquam metus, et finibus diam tellus at tellus. Maecenas aliquam mauris nec felis pharetra, eu sollicitudin diam posuere. Nam ornare mi felis, id euismod odio tempus a. Mauris facilisis hendrerit egestas. Sed vitae sapien ut ante ullamcorper vestibulum. Ut ultricies libero lectus, nec tempus odio condimentum mattis. Vivamus eget metus eu dolor iaculis venenatis. Quisque dictum nisi sed bibendum ultricies. Nullam fringilla mi in nisi suscipit, at condimentum elit accumsan.
<br/><br/>
Proin ex velit, accumsan vel risus pulvinar, dignissim auctor tellus. Morbi vitae mattis mi. Cras pellentesque ut nibh venenatis vehicula. Cras dictum, ante ac aliquam semper, mauris dui rutrum nunc, ut sollicitudin risus metus id urna. Nam in urna nec metus cursus gravida. Maecenas elementum luctus tortor sodales porta. Etiam lectus dolor, convallis vitae rutrum vel, tristique ut dui.
<br/><br/>
Ut ac odio et nibh tempus luctus at nec odio. Integer turpis nulla, finibus rhoncus convallis ut, commodo vitae dolor. Maecenas sodales, ipsum pellentesque blandit sodales, nisl ligula facilisis eros, in interdum leo enim sagittis massa. Sed a malesuada risus. In hac habitasse platea dictumst. Suspendisse leo dolor, porta a quam eu, ornare auctor purus. Aliquam in sagittis sapien. In ac quam eu augue dictum gravida. Donec dui arcu, molestie non ex ac, iaculis feugiat eros. Aenean vitae felis ut nisl iaculis ornare eget in leo. Sed sem quam, tincidunt at venenatis eu, sodales in leo. Vivamus sit amet laoreet eros, ac accumsan libero. Suspendisse nec urna vitae sapien interdum vehicula nec elementum ipsum.
`;

const body = document.querySelector('body');
body.append( text );

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append( progressBar );

// Función que haga el cálculo
const calcularPorcentajeScroll = ( event ): number => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
}

// Streams
const scroll$ = fromEvent( document, 'scroll' );
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`;
});