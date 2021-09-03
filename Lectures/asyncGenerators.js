function dowhenDataRecieved(val){
    returnNextElement.next(val);
}

function *createFlow(){
    
    let arr = new Promise((resolve, reject) => {
 setTimeout(function(){resolve("i got it")}, 3000);
});
    const getdata = yield arr
    console.log(getdata);
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next();
console.log("its future :",futureData);
futureData.value.then(dowhenDataRecieved).catch(reason => console.log(reason));

function calcSomething(arr){
    for(i=0;i<100000000;i++){

    }
    return arr.reduce((a,b) => a+b);
}
console.log("JUst checking that promise did not resolve yet!!!")
console.log(calcSomething([1,2,3,4,5,6,7,8,9]))