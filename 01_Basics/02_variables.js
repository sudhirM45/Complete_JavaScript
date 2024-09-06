const accountId = 1845
let accountEmail = "sudhir45@gmail.com"
var accountPassword = "1845"
accountCity = "Solapur"

accountEmail = "sudhir12@gmail.com"
accountCity = "pune"
accountPassword = "4554"

let accountState; // js ke aandar aagar var ko declear kake chod dethe hai and val assign nahi karte to js use undefineted consider karta hai.

/* we are not going to use the var beacuse javascript has a problem of scope {} writing this braces is know as scope.
-> at intial stage js does not work on the scope.
ex-> agar ak programmer hai use ne likha accountpass 
    and use value assign kardi and uske bad ak aur programmer aaya and usene ak fun me accountpass var likha ke value assign kardi to pahile decleared vala var ki value change ho jati to ye problem js me pahele huva karti thi
*/

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity]);

