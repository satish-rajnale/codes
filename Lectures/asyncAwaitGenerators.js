function dowhenDataRecieved(val){
    returnNextElement.next(val);
}

function *createFlow(){
    // const mypromise = new Promise();
    let arr = new Promise((resolve, reject) => {
 setTimeout(function(){resolve("i got it")}, 3000);
                                });
    const getdata = yield arr
    console.log(getdata);
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next().value;
console.log("its future :",futureData)
futureData.then(dowhenDataRecieved).catch(reason => console.log(reason));