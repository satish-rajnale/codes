const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then((value) => {
    return value + " and bar";
  })
  .then((value) => {
    return value + " and bar again";
  })
  .then((value) => {
    return value + " and again";
  })
  .then((value) => {
    return value + " and again";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
// Promise.prototype.catch =(str)=>{return str};
const presolved = Promise.resolve(() => "i got resolved!!");
const prejected = Promise.reject(() => "i got rejected!!").catch((err) =>
  console.log("i got error")
);

presolved.then((val) => console.log(val));
console.log(prejected);
