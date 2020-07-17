// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    const l = num.toString().length 
    return num.toString()
              .split("")
              .map(function(num,i) {return num.padEnd((l-i),"0")} )
              .filter(num => num > 0).join(" + ")
   }


   

//    The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

//    If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
   
//    If
   
//    sz is <= 0 or if str is empty return ""
//    sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
//    Examples:
//    revrot("123456987654", 6) --> "234561876549"
//    revrot("123456987653", 6) --> "234561356789"
//    revrot("66443875", 4) --> "44668753"
//    revrot("66443875", 8) --> "64438756"
//    revrot("664438769", 8) --> "67834466"
//    revrot("123456779", 8) --> "23456771"
//    revrot("", 8) --> ""
//    revrot("123456779", 0) --> "" 
//    revrot("563000655734469485", 4) --> "0365065073456944"

function revrot(str, sz) {
    if (str === "" || sz <= 0 || sz > str.length) return ""
       
   let resultsArr = []
   let strToArray = str.split("").map(str => Number(str))
   let rotate  = s => s.slice(1) + s.slice(0, 1);
   
     for (i = 0 ; i < strToArray.length; i = i + sz){
     let chunk = strToArray.slice(i, i+sz)
     if (chunk.length < sz) break;
     if (chunk.reduce((a, b) => a + b, 0) % 2 === 0){
     resultsArr.push(chunk.reverse().join(""))    
   } else {
     resultsArr.push(rotate(chunk.join("")))
     }
   }
     return resultsArr.join("")
 }