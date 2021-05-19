const airports = "PHX AUR IND USA UKA BNK LOS RUA JIA MHK LIE".split(" ");
// undirected -> meaning in both direction
const routes = [
    ["PHX", "IND"],
    ["PHX", "RUA"],
    ["BNK", "LIE"],
    ["LIE", "IND"],
    ["LIE", "MHK"],
    ["LOS", "MHK"],
    ["USA", "BNK"],
    ["UKA", "USA"],
    ["JIA", "UKA"],
    ["JIA", "RUA"],
    ["IND", "AUR"],
];

// The graph
const adjacancyList = new Map();


//add a node
function addNode(airport){
    adjacancyList.set(airport, []);
};

// add a Edge
function addEdge(origin, destination){
    //adding destination to array og origin airport
    adjacancyList.get(origin).push(destination);
    // same link is persisted by the destination as it is undirected
    adjacancyList.get(destination).push(origin);
}

//create a graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacancyList);
// Map {
//     'PHX' => [ 'IND', 'RUA' ],
//     'AUR' => [ 'IND' ],
//     'IND' => [ 'PHX', 'LIE', 'AUR' ],
//     'USA' => [ 'BNK', 'UKA' ],
//     'UKA' => [ 'USA', 'JIA' ],
//     'BNK' => [ 'LIE', 'USA' ],
//     'LOS' => [ 'MHK' ],
//     'RUA' => [ 'PHX', 'JIA' ],
//     'JIA' => [ 'UKA', 'RUA' ],
//     'MHK' => [ 'LIE', 'LOS' ],
//     'LIE' => [ 'BNK', 'IND', 'MHK' ]
//   }

// BFS Breadth First Search
function bfs(start){

    const visited = new Set();// if not included a visited set the while loop will run infinitely
    const queue = [start];

    while(queue.length > 0){
        const airport  = queue.shift();
        //getting array of all airports linked to the current airport
        const destinations = adjacancyList.get(airport);


        for(const destination of destinations){
            // queue.push(destination); // this line is moved to visited conditional block below
            // console.log(destination); 

            if(destination === "JIA"){
                console.log("found it");
            }

            if(!visited.has(destination)){
                queue.push(destination);
                console.log(destination); 
                visited.add(destination)
            }
        }
    }
}

bfs("PHX");
// IND
// RUA
// PHX
// LIE
// AUR
// found it
// JIA
// BNK
// MHK
// UKA
// USA
// LOS
// found it


// now we jus want to find a route to JIA as quickly as possible
// dont care if multiple routes or best route

//DFS Depth First Search <- recursive method
function dfs(currentAirport, visited = new Set(), steps=0){
    console.log(currentAirport);
    visited.add(currentAirport);

    const destinations = adjacancyList.get(currentAirport);
    for(const destination of destinations){
       

        if(destination === "JIA"){
            console.log(`found JIA in ${steps} steps`);
            return;
        }

        if(!visited.has(destination)){
            dfs(destination, visited, steps++);
            
        }
    }

}
 
dfs("PHX");
// PHX
// IND
// LIE
// BNK
// USA
// UKA
// found JIA in 0 steps
// MHK
// LOS
// AUR
// RUA
// found JIA in 1 steps


// time complexity
// O(V + E); where V is total no of vertices/nodes and E is total no of Edges
//time performance scales linear based on no of nodes