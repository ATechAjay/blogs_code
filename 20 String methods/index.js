// const name1 = "John";
// const name2 = "Jane";
// const name3 = `Jack`;

let str = "Ajay Yadav";

// SLICE METHOD
// str.slice(startIndex, endIndex);
// console.log(str.slice()); //Ajay Yadav
// console.log(str.slice(0, 4)); //Ajay
// console.log(str.slice(NaN, 4)); //Ajay
// console.log(str.slice(-5)); //Yadav
// console.log(str.slice(9, 3)); //NOTHING
// console.log(str.slice(-5, -1)); //Yada
// console.log(str.slice(-1, -5)); //NOTHING
// console.log(str.slice(NaN, -5)); //Ajay

// TRIM METHOD
// str = "   Ajay Yadav      ";
// console.log(str.trim()); //Ajay Yadav
// console.log(str.trimEnd()); //    Ajay Yadav
// console.log(str.trimStart()); //Ajay Yadav

// TOLOWERCASE METHOD
// str = "AJAY YADAV";
// console.log(str.toLowerCase()); //ajay yadav
// str = "Ajay yadAV";
// console.log(str.toLowerCase()); //ajay yadav
// str = null;
// console.log(str.toLowerCase()); //TypeError: Cannot read property 'toLowerCase' of null

// TOUPPERCASE METHOD
// str = "ajay yadaV";
// console.log(str.toUpperCase()); //AJAY YADAV
// str = "Ajay yadav";
// console.log(str.toUpperCase()); //AJAY YADAV
// str = null;
// console.log(str.toUpperCase()); //TypeError: Cannot read property 'toUpperCase' of null

// str.startsWith(searchString, position);

// STARTSWITH METHOD
// str = "Ajay Yadav";
// console.log(str.startsWith("A")); //true
// console.log(str.startsWith("Ajay")); //true
// console.log(str.startsWith("AJAY")); //false
// console.log(str.startsWith("Y", 5)); //true
// console.log(str.startsWith("Y", 4)); //false

// str.endsWith(searchString, length);

// ENDSWITH METHOD
// str = "Ajay Yadav";
// console.log(str.endsWith("v")); //true
// console.log(str.endsWith("Yadav")); //true
// console.log(str.endsWith("V")); //false
// console.log(str.endsWith("YADAV")); //false
// console.log(str.endsWith("Yadav", 5)); //false

// str.repeat(count);

// REPEAT METHOD
// str = "Ajay";
// console.log(str.repeat(0)); //nothing
// console.log(str.repeat(5)); //Reapeat 5 times "Ajay"
// console.log(str.repeat(6.333)); //Reapeat 6 times "Ajay"
// console.log(str.repeat(-8)); //RangeError: Invalid count value

// str.substring(start, end);

// SUBSTRING METHOD
// str = "Ajay Yadav";
// console.log(str.substring()); //Ajay Yadav
// console.log(str.substring(0, 4)); //Ajay
// console.log(str.substring(0)); //Ajay Yadav
// console.log(str.substring()); //Ajay Yadav
// console.log(str.substring(-1, 4)); //Ajay
// console.log(str.substring(-1, -5)); //nothing
// console.log(str.substring(-5, -1)); //nothing
// console.log(str.substring(NaN, -1)); //nothing
// console.log(str.substring(9, 3)); //y Yada

// str.concat(string1, string2, ..., stringN);

// CONCAT METHOD
// const firstName = "Ajay";
// const lastName = "Yadav";
// console.log(firstName.concat(" ", lastName)); //Ajay Yadav
// console.log(firstName.concat("Kumar")); //AjayKumar
// console.log(firstName.concat("Kumar", "Yadav", "From", "India")); //AjayKumarYadavFromIndia

// VALUEOF METHOD
// str = new String("Ajay Yadav");
// console.log(typeof str); //object
// console.log(str.valueOf()); //Ajay Yadav
// console.log(typeof str.valueOf()); //string

// SPLICE METHOD
// str = "Ajay Yadav";

// console.log(str.split(" ")); //["Ajay", "Yadav"]
// console.log(str.split(" ", 1)); //[ 'Ajay' ]
// console.log(str.split("")); //["A", "j", "a", "y", " ", "Y", "a", "d", "a", "v"]

// REPLACEALL METHOD
// str = "Ajay Yadav, Ajay Ajay Ajay";
// console.log(str.replaceAll("Ajay", "Prince")); //Prince Yadav, Prince Prince Prince

// INDEXOF METHOD
// str = "Ajay Yadav";
// console.log(str.indexOf("j")); //1
// console.log(str.indexOf("Y", 6)); //-1 (none)
// console.log(str.indexOf("Y", 4)); //5

// CHARCODEAT METHOD
// str = "Ajay Yadav";
// console.log(str.charCodeAt(0)); //65
// console.log(str.charCodeAt(1)); //106
// console.log(str.charCodeAt(-1)); //NaN

// CHARAT METHOD
// str = "Ajay Yadav";
// console.log(str.charAt(0)); //A
// console.log(str.charAt(99)); //nothing
// console.log(str.charAt(-2)); //nothing

// INCLUDES METHOD
// str = "Ajay Yadav";
// console.log(str.includes("Ajay")); //true
// console.log(str.includes("Ajay", 1)); //false
// console.log(str.includes("Ajay", 0)); //true
// console.log(str.includes(5)); //false
// console.log(str.includes(true)); //false
// console.log(str.includes(["A", "H"])); //false

// LASTINDEXOF METHOD
// str = "Ajay Yadav";
// console.log(str.lastIndexOf("a")); //8
// console.log(str.lastIndexOf()); //-1
// console.log(str.lastIndexOf("a", 6)); //6
// console.log(str.lastIndexOf("Ajay", 8)); //0
// console.log(str.lastIndexOf("Hello")); //-1

// str = "Ajay Yadav";
// console.log(str.charCodeAt(0)); //65
// console.log(str.charCodeAt(1)); //106
// console.log(str.charCodeAt(2)); //97
// console.log(str.charCodeAt(3)); //121

// // FROMCHARCODE METHOD
// console.log(String.fromCharCode(65)); //A
// console.log(String.fromCharCode(106)); //j
// console.log(String.fromCharCode(97)); //a
// console.log(String.fromCharCode(121)); //y
// // Pass the mulptile arguments
// console.log(String.fromCharCode(65, 106, 97, 121)); //Ajay

// PADSART METHOD
// str = "Yadav";
// console.log(str.padStart()); //Yadav
// console.log(str.padStart(6)); // Yadav
// console.log(str.padStart(10, ".")); //.....Yadav
// console.log(str.padStart(10, "Ajay ")); //Ajay Yadav

// // PADEND METHOD
// str = "Ajay";
// console.log(str.padEnd()); //Ajay
// console.log(str.padEnd(6)); //Ajay
// console.log(str.padEnd(8, ".")); //Ajay....
// console.log(str.padEnd(10, " Yadav")); //Ajay Yadav
