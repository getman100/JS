//задание 1 +
// var check_1 = get_type(true)
//
// function get_type(str){return typeof(str)};
// console.log(check_1);


// Задание 2

// var newStr = "";
// console.log(get_string_length("Hello world"));
//
// function get_string_length(str){
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] != " " )
//     newStr += str[i];
//   }
//   countNewStr = newStr.length;
//   return countNewStr;
// }


//Задание 3
// var text = prompt("Введите строку");
// var textSearch = prompt("Введите искомое слово");
// var newSearch = search_string (textSearch, text);
//
//  function search_string (search, string){
//   var searchString = string.toLowerCase();
//   var searchingText = search.toLowerCase();
//   var result = searchString.indexOf(searchingText);
//   if (result>-1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(newSearch);


//Задание 4

// var text = prompt("Введите строку");
// var textSearch = prompt("Введите искомый символ");
//
// countSymbol = count_symbol(textSearch,text);
// function count_symbol(symbol,string){
// var searchSymbol = symbol.toLocaleLowerCase();
// var searchString = string.toLocaleLowerCase();
// var searchString_arr = searchString.split("");
// counter = 0;
//
// for(i=0; i < searchString_arr.length; i++){
//   if (searchString_arr[i] == searchSymbol) {
//     counter ++;
//   }
// }
// return counter;
// }

//Задание 5 +
// str  = "Привет как дела";
// addStr = "..."
// maxlenght = 9;
// truncate(str,maxlenght);
//
// function truncate(str, maxlenght){
// //   if (str.length <= maxlenght) {
// //     str += addStr;
// //   } else {
// // str = str.slice(0,(maxlenght - addStr.length)) + addStr;
// (str.length <= maxlenght)? str += addStr: str = str.slice(0,(maxlenght - addStr.length)) + addStr; // более короткий код, по просьбе Андрея)
//   return str;
//   }

// Задание 6 +
// str = "123456";
// countStr(str);
// function countStr(str){(str.length>0)? console.log(str.length): console.log("Задана пустая строка")}

//Задание 7;

// str = "free xxxx frr buy";
// spam_1 = "buy";
// spam_2 = "XXX"
//
// var check1 = checkSpam(str);
//
//  function checkSpam (str){
//    str.toLowerCase();
//    return str.includes(spam_2) || str.includes(spam_1)}
//
// document.write(check1);


//Задание 8
// var user = {};
// user.name = "Вася";
// user.surname = "Петров";
// user.name = "Сергей";
// console.log(user);
// delete user.name;
// console.log(user);

//Задание 1*

// function up_first(str) {
//   if (!str)
//     return str;
//   newStr = str.toLowerCase();
//     return newStr[0].toUpperCase() + newStr.slice(1);
// }
//
// alert( up_first("ИВАНОВ") ); // Вася

//Задание 2*
// alert(get_type_file ("readme.txt"));
//
// function get_type_file (file_name){
//     var index = file_name.toString().lastIndexOf(".");
//     return file_name.slice(index);
// }
