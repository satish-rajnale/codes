func test(str string) func(){
	return func(){ fmt.Println(str, "Test func run")}
}
   
func main() {
	 x:= test
	 x("Sam")()
}