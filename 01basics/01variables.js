const accountId = 144553
let accountEmail = "abc@gamil,cin"
var accountPassword = "12345"
accountCity = "HSP"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "67890"
accountCity = "NYC"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
Prefer not to use var
because of issue in block scope and functional scope 
*/ 