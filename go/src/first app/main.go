package "main"
package main
import "fmt"

//globally declaring variables
var (
  actorName string = "Elizabeth"
  companion string = "sarah lane"
  doctorNumber int = 3
  season int = 11
)

var i int =12 // local scope
var I int = 12 // global scope

func main() {
  var i int // block scope
   i = 42
  // this gives you valur and type of the variable
    fmt.Printf("%v, %T",i,i) 

  var j float = 27
  fmt.Printf("%v, %T",i,i)
}