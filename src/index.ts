import { fromEvent, map, interval, mergeAll } from 'rxjs';

const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(map(() => interval(1000)));
const firstOrder = higherOrder.pipe(mergeAll());

firstOrder.subscribe(x => console.log(x));