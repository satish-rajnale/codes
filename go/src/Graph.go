package main
import "fmt"
// this isa directed graph one way not undirected / two way
//Graph Structure
type Graph struct {
  vertices  []*Vertex
}

//Vertex structure
type Vertex struct {
  key int
  adjacent []*Vertex
}


//contains
func contains (s []*Vertex, k int) bool {
  for _,v := range s{
    if k == v.key{
      return true}
  }
return false
}

//AddEdge adds an edge to the graph
func (g*Graph) AddEdge(from, to int){
  //get vertex
  fromVertex := g.getVertex(from)
  toVertex := g.getVertex(to)

  //check error as Vertex 1 : 2 2 should throw an error
 // also if similar edges are being added
  if fromVertex == nil || toVertex == nil {
   err := fmt.Errorf("Ïnvalid edge (%v --> %v)", from , to)
 fmt.Println(err.Error())
 } else if contains(fromVertex.adjacent, to){
   err := fmt.Errorf("Existing edge (%v --> %v)", from , to)
 fmt.Println(err.Error())
    } else {
  //add edge
    fromVertex.adjacent = append(fromVertex.adjacent, toVertex)
  }
}

// get vertex
func (g*Graph) getVertex(k int) *Vertex {
  for i, v := range g.vertices {
    if v.key == k {
      return g.vertices[i]
    }
  }
return nil
}

// AddVertex method to add a vertex to graph
func (g * Graph) AddVertex(k int){
  if contains(g.vertices, k){
    err := fmt.Errorf("Vertex %v not added because it is an existing kry", k)
    fmt.Println(err.Error())
  } else {
  g.vertices = append(g.vertices, &Vertex{key: k})
}
  }



// Print will print the adjacent list for each vertex
func (g*Graph) Print(){
  for _,v := range g.vertices{
    fmt.Printf("\n Vertex %v :", v.key)
    for _,v := range v.adjacent{
      fmt.Printf(" %v ", v.key)
    }
  }
fmt.Println()
}
func main() {
  test := &Graph{}

  for i := 0; i<5; i++{
    test.AddVertex(i)
  }
    // fmt.Println(test)// &{[0xc00000c0a0 0xc00000c0c0 0xc00000c0e0 0xc00000c120 0xc00000c140]}
  test.AddEdge(1,2)
  // test.AddEdge(1,2) this line should be an error
 // Vertex 0 :
 // Vertex 1 : 2 
 // Vertex 2 :
 // Vertex 3 :
 // Vertex 4 :

  test.AddEdge(6,2)
  test.AddEdge(1,2)
  test.AddEdge(4,1)
  test.AddEdge(3,2)
  // here above lines give an output of
 //  Ïnvalid edge (6 --> 2)

 // Vertex 0 :
 // Vertex 1 : 2 
 // Vertex 2 :
 // Vertex 3 : 2 
 // Vertex 4 :
  // while 6 --> 2 is an error we catched first for non defined vertex 3: 2 is valid
  test.Print()
}

// final output
Ïnvalid edge (6 --> 2)
Existing edge (1 --> 2)
Existing edge (3 --> 2)
Ïnvalid edge (3 --> 5)

 Vertex 0 :
 Vertex 1 : 2 
 Vertex 2 :
 Vertex 3 : 2 
 Vertex 4 : 1 