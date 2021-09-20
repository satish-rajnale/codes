//iterator
function initialize(arr) {
  let i = 0;
  function bouncer() {
    const element = arr[i];
    i++;
    return element;
  }
  return bouncer;
}

const getelement = initialize([1]);
const first = getelement();
const second = getelement();
console.info(first, second);

//generator
function* mygenerator(arr) {
  yield 1;
  let i = "name";
  const c = yield i;
  yield c * 2;
  yield arr;
}

const gen1 = mygenerator([1, 2, 3]);
const gen2 = gen1.next();
const gen3 = gen1.next();
const gen4 = gen1.next(2);
const gen5 = gen1.next();
const gen6 = gen1.next();
console.log(gen1);
console.log(gen2);
console.log(gen3);
console.log(gen4);
console.log(gen5);
console.log(gen6);
