 package main
 import "fmt"

 func main() {

 // for var i = 0; i<=10; i++{ this wont work not allowed to use var inside a for loop

 // var i int
 // for (i = 0; i<=10; i++){ this also wont work not allowed to use paranthses
  
 // i:= 1
 // for (i<=10){ this will work
 //   fmt.Println(i)
 //     i++
 // }
  
 for i:=0; i<=10;i++{
  fmt.Println(i)
 }

 // defining a map// map[keytype]valtype
 emails := make(map[string]string)

 emails["name"] = "josh"

  fmt.Println(emails)// map[name:josh]
  fmt.Println(emails["name"])// josh
 emails["contact"] = "mail"
 emails["skill"] = "play"
  fmt.Println(len(emails))//3

  // delete from map
  delete(emails, "name")
   fmt.Println(len(emails))//2

  // declare and add kv
  games := map[int]string{1:"golf",2:"cod"}
   fmt.Println(games)// map[1:golf 2:cod]
  games[1] = "nogame"
   fmt.Println(games)// map[1:nogame 2:cod]


  numbers := []int{1,2,3,4,5,6,7}

  for i, num := range numbers {
    fmt.Printf("index : %d, value : %d \n",i, num)
  }
 //index : 0, value : 1 
 // index : 1, value : 2 
 // index : 2, value : 3 
 // index : 3, value : 4 
 // index : 4, value : 5 
 // index : 5, value : 6 
 // index : 6, value : 7

  // but what if dont want to print index
  // for i, num := range numbers {
  //   fmt.Printf(" value : %d \n", num)
  // }     this wont work and throw error of i is declared but not used
    // in such cases use _

  for _, num := range numbers {
    fmt.Printf("value : %d \n",num)
  }
 // value : 1 
 // value : 2 
 // value : 3 
 // value : 4 
 // value : 5 
 // value : 6 
 // value : 7 

 // range with map
  for k, v := range games{
    // fmt.Printf("%s : %s \n ", k, v) // this will give an output of %!s(int=1) : nogame 
  fmt.Printf("%d: %s\n ", k, v) // %d for base 10 values see more at:https://golang.org/pkg/fmt/ 
  }
 // 1: nogame
 // 2: cod
 
}