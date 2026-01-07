const myNums = [1, 2, 3, 4, 5, 6, 7, 8]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0) // 0 is the value from which accumutlator will start 
console.log(myTotal);

// Functioning => first we have assigned an accumulator(the first value of accumulator is assigned by us, outside the scope and after that it takes value of whatever output is returned. Example - in above function the output of acc + currval will be the second value of accumulator) and currentvalue (the value which is taken from array)

// With arrow function
const myValue = myNums.reduce((acc, currval) => acc + currval, 0)
console.log(myValue);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]
const addPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0 )
console.log(addPrice);