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
})