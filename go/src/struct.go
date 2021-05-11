package main
import ("fmt"
        "strconv")


// struct: structure
type Person struct {
  firstname string
  lastName  string
  city      string
  age       int
} 
// Value receiver => p is similar to 'this' : an identifier
func (p Person) greet() string {
  return "Hello my name is "+ p.firstname + "age is " + strconv.Itoa(p.age)
} 

func adder() func(int) int {
  sum := 0
  return func(x int ) int{
    sum +=x
    return sum
  }
}

//pointer receiver
func (p *Person) hasBirthday(){
  p.age++
}

func main() {
  sum:= adder()
  for i:= 0; i<10;i++{
    fmt.Println(sum(i))
  }

    person1 := Person{firstname: "Dam", city: "us", age: 9, lastName: "huo"}
   person2 := Person{"Dam",  "us",  "huo", 0}
  fmt.Println(person1, person2)//{Dam huo us 9} {Dam us huo 0}

  person1.age = 24
  fmt.Println(person1)//{Dam huo us 24}

  fmt.Println(person1.greet())//Hello my name is Damage is 24

person1.hasBirthday()
  fmt.Println(person1.greet())//Hello my name is Damage is 25
}