const promise1 = apiCall1()
const promise2 = apiCall2()
const promise3 = apiCall3()

let response1, response2, response3

promise1.then(data1 => {
  response1 = data1

	promise2.then(data2 => {
		response2 = data2

		promise3.then(data3 => {
			response3 = data3

	    doSomething(response1, response2, response3)
		})
	})
});


//you can use Promise,all to acheive concurrency as in one video of Jherr where he used promise pool to achieve concurrency

Promise.all([promise1, promise2, promise3]).then((response) => doSomething(response)).catch((reason) => console.log(reason));


function Foo(){
	this.a = 2;
};

var obj = {
	foo: Foo
};

var myobj = obj;
myobj.foo();
console.log(a); // will give an error
//use arrow fucntion on Foo as
const Foo =() => {
	this.a = 2; //now this a is lexically scoped to wherever the function Foo is defined i.e. in this case is global
}