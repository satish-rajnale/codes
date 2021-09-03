async function  createFlow(){
    console.log("me first!!");
    const getdata = await (function(){ let ans = "nothing";for(let i=0;i<700000000;i++){}return ans = "Got ran after a long time.."})()
    console.log(getdata);
}

createFlow();
console.log("im second!!");

