/*     mergeAll
import { fromEvent, map, interval, mergeAll } from 'rxjs';


const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(map(() => interval(1000)));
const firstOrder = higherOrder.pipe(mergeAll());

firstOrder.subscribe(x => console.log(x));
*/

import { from, interval, last, skip } from "rxjs";

/*    take

import { interval, take } from "rxjs"

const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5));
takeFive.subscribe(x => console.log(x));
*/


/*  takeLast
import { range, takeLast} from 'rxjs';

const many = range(1, 100);
const lastThree = many.pipe(takeLast(3));
lastThree.subscribe(x=>console.log('x:',x)
)

*/

/*  takeLast 

import { fromEvent, interval, takeUntil } from "rxjs";

const source = interval(1000);
const clicks = fromEvent(document,'click');
const result = source.pipe(takeUntil(clicks));
result.subscribe(x=>console.log(x)
)
*/

/*  takeLast 

import { fromEvent, takeWhile, interval, takeUntil } from "rxjs";

const clicks = fromEvent<PointerEvent>(document,'click');
const result = clicks.pipe(takeWhile(ev=>ev.clientX >200))
result.subscribe(x=>console.log(x)
)
*/


/*  Skip 

const source = interval(1000);
const result = source.pipe(skip(4));
result.subscribe(x=>console.log(x)
)
*/

/*  last */
const sr = from(['x','y','z']);
//const r = sr.pipe(last());
const r = sr.pipe(last(char=> char==='a', 'not found'))

r.subscribe(value=>console.log(`last alphabet: ${value}`)
)



/*  Skip */

