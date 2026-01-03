Whenever we give JS a code the first thing that is made is **Global Execution Context** and this GEC is refered to variable *this*
Every enviornment has their own global execution contex.

## Types of Execution contexts:
1. Global execution context
2. Functional execution context
3. Eval execution context (Property of global execution context so not considered as a type)

## Let's understand how JS code gets executed
{} => let this be a JS code 
Now this code will run in two phases
1. Memory creation phase => sirf variables ke liye jagah allocate hoti hai
2. Execution Phase => Every function gets executed 

` let val1 = 10
let val2 = 5
function addNum(num1, num2){
  let total = num1 + num2
  return total
} 
let result1 = addnum(val1, val2)
let result2 = addnum(10, 2) `
