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

```javascript
 let val1 = 10
let val2 = 5
function addNum(num1, num2){
  let total = num1 + num2
  return total
} 
let result1 = addnum(val1, val2)
let result2 = addnum(10, 2);
```

## Steps of Execution:
1. Global execution is created which is allocated to variable *this*
2. Memory Phase => sare variables ke naam liye jate hain and they are assigned to undefined
val1 = undefined
val2 = undefined
addnum = definition (function ke liye definition jati hai)
result1 = undefined
result2 = undefined

3. Execution phase:
val1 = 10
val2 = 5
addnum => This is a function so it will create a different executional context in the execution phase.
result1 = 15
i. The execution context will consist of: New vairable enviornment + Execution Thread 
ii. Now this new execution phase will run the same steps as Global execution phase i.e it will go through Memory phase and then Execution phase.
### Memoru Phase: 
val1 = undefined (Cause when the function is executed these variables are needed)
val2 = undefined 
total = undefined 
### Execution Phase:
num1 = 10
num2 = 5
total = 15 => Returned in Global executional context
**Once work is complete the new Executional context which was created for the function gets deleted**
Then Original execution phase continues
result2 = 12 (Same steps are executed for this as well, A new enviornment is created and after work is done gets deleted.)

## Call Stack:
Refer this video @18:40 => https://youtu.be/ByhtOgF6uYM?si=7JKtbm1kA1iKu4ke