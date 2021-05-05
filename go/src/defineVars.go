package main
import "fmt"

// assignment to a string must be done in double quotes "" and not in single ''
func greeting(name string )string{
  return "Hello "+ name
}

func getSum (num1 int, num2 int)int{
  return num1+num2
}

func main() {
  fmt.Println(getSum(1,4))
  fmt.Println(greeting("Jacob"))

  // defining multiple var
  var str1, str2 string //only one type is allowed in this method of defining
  id, name := 2, "San" // this is inferred correctly and gives types as values assigned in order
  // note in above both variables must be new on left side of the := operator
  str1= "as"
  str2= "heaven"
  fmt.Println(str2,str1,id,name)
  
  
  //arrays
  var fruitArr [2]string

  //assign values
  fruitArr[0]= "Apple"
  fruitArr[1]= "Grapes"
  // fruitArr[2]= "orange" does not get executed cuz already defined length of array of 2
  fmt.Println(fruitArr)

  // vegArr : = //this will throw an error use :=
  
  vegArr := [2]string{"spinach", "broccali"}
  fmt.Println(vegArr)

  // no length given
  goals := []int8{1,2,34,5,6,6,4} // int8 can take only between -128 to 127
  fmt.Println(goals)
  //length of array
   fmt.Println(len(goals))
  // slice like in js
  fmt.Println(goals[1:4])//  [2 34 5]

 x:= 5
  y:=6
  if x<= y {
    fmt.Printf("%d is less than or equal to %d\n", x, y) // print F not LN and is not given \n after %d second one the console pointer stays on the same line 
  } else {
   fmt.Printf("%d is less than %d\n",  y, x)
  }
color := "green"
  switch color{
    case "red":
  fmt.Println("background-color: red")
    case "blue":
  fmt.Println(" blue")
    default:
  fmt.Println(" no color")
  }

  // switch statements breaks immediately after a case is matched and executed so no break is needed 
  
}