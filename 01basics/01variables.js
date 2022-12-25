const accountId = 123321;
let accountEmail = "marvel@marvel.com";
var accountPassword = "12345";
accountCity = "Patna";
let accountState;

// accountId = 21; // not allowed as const can't be changed

accountEmail = "dc@dc.com";
accountPassword = "909090";
accountCity = "Banglore";

console.log(accountId);

/* Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
