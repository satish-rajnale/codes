const people = [
  { id: 1, name: 'sally' },
  { id: 2, name: 'jhon' },
  { id: 3, name: 'ron' },
];

//doing this gives O(n)^3 efficincy as every time you are creating a new object as this gets transformed
//by compiler into ES2015 js and Object.assign creates new object each time
people.reduce(
  (lookup, people) => ({
    ...lookup,
    [people.id]: people,
  }),
  {}
);

//rather a simple logic of assigning a key and value directing to the lookup is much more effiecient
people.reduce((lookup, people) => {
  lookup[people.id] = people;
  return lookup;
}, {});

const numbers = [10, 20, 30, 40];
//similarly arrays also get created newly every time if used first method
numbers.reduce((arr, v) => [...arr, v * 100], []);

numbers.reduce((arr, v) => {
  arr.push(v * 100);
  return arr;
}, []);
