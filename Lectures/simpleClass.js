// class Game {
//     constructor(){
//         this.genre = "action"
//     }

//     printGenre(){
//         console.log(this.genre);
//     }
// }

// class CSGO extends Game {
//     constructor(){
//         super();
//         this.name = "CSGO";
//         this.genre = "Shooting";
//     }

//     printDetails(){
//         console.log(this.name);
//     }
// }

// const newgame = new CSGO();
// newgame.printDetails();
// newgame.printGenre();

// same but using es6/Babel
class Game {
 
      genre = "action"
    

    printGenre(){
        console.log(this.genre);
    }
}

class CSGO extends Game {
   
     
      name = "CSGO";
     genre = "Shooting";
    

    printDetails=()=>{
        console.log(this.name);
    }
}

const newgame = new CSGO();
newgame.printDetails();
newgame.printGenre();