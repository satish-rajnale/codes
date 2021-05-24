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
  fromVertex := g.getVertex(from)
  toVertex := g.getVertex(to)

  //add edge
  fromVertex.adjacent = append(fronVertex.adjacent, toVertex)
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
    fmt.Printf("\n Vertex %v", v.key)
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
    fmt.Println(test)// &{[0xc00000c0a0 0xc00000c0c0 0xc00000c0e0 0xc00000c120 0xc00000c140]}
  test.AddEdge(1,2)
  test.Print()
}