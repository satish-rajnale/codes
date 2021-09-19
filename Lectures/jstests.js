function Starter (props, children){
    this.children = children;
    //return "initialized"+ (props && children && props.toString() +children.toString()) || "attach";
};
Starter.filter = (x) => {
 return x*2;
}// 
Starter.prototype.getsome = function() { // creting a protoype makes it available on the fucntion call itself as a obj
   console.log(this.children)
}
const per = new Starter("12",555);

per.getsome()
per.filter(2) // this will throw an error 
Starter.filter(2)// but this wont 
// (function(){
//     // console.log(innerIife);
//     var innerIife = "something!!!!!!!!!!!!!!!!!";
//     console.log(isITrue);
// })()

// var isITrue = Boolean( 1*2 == 3 && 7/2 == 3.5);
// console.log(isITrue)

