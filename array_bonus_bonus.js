
var fruits = ["apple", "banana", "orange", "apple", "pineapple"];


function allIndexesOf(a,b){
    let fruit_array =[]
  for( var i =0; i<a.length;i++){
      if(a[i] === b){
          //console.log(a[i],i)
          //console.log(b)
          fruit_array.push(b)
          //console.log(fruit_array,'fruit_array')
      }



  }
  return fruit_array
}


//console.log(fruits.indexOf("banana"))

// console.log(allIndexesOf(fruits, "apple"))
// console.log(allIndexesOf(fruits, "guava"))
// console.log(allIndexesOf(fruits, "pineapple"))



console.log("question number_2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")


var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];


console.log(bugs.unshift("d"),8888)
console.log(bugs.shift('d'),999)
console.log(bugs,777)

//console.log(bugs.splice(1,1),bugs)
// function removeAll(a,b){
//     let new_array_slice=[];
//     for (var i=0;i<a.length;i++){
//         if(a[i] ===b){
//             console.log(a[i],i)
//             delete_bug = bugs.splice(i,1)
//             console.log(delete_bug,1111)
//             new_array_slice.push( delete_bug)
//             console.log(bugs,22222)
//             console.log(a[i],i)
//             //console.log(new_array_slice)
//         }
//     }
//
// }

//
// removeAll(bugs, "ant")

// console.log(removeAll(bugs, "ant"),1111)
// console.log(removeAll(bugs, "mosquito"))
// console.log(removeAll(bugs, "roach"))




// var month_array = ["April", 'May', "June"];
//
// month_array.push("July");
// console.log(month_array)
// month_array.unshift("March");
// console.log(month_array)
// month_array.pop("July");
// console.log(month_array)



// const x = [1,2,3];
//
// const y= x;
//
// console.log(x);
//
// console.log(y);
//
//
// x.push(4);
//
//
// console.log(x);
// console.log(y);




// const x = [1,2,3];
// const  y=x.slice();
// x.push("hello");
//
// console.log(x); //[1, 2, 3, 'hello']
// console.log(y); //[1, 2, 3]





// const numbers = [11,1,2,5];
//
// // numbers.sort();
// // console.log(numbers)
//
//
// function compareNumbers(a,b){
//
//     return a-b
// }
//
// numbers.sort(compareNumbers);
//
// console.log(numbers);



// const pies = [
//
//     "apple",
//     "huckleberry",
//     "cherry",
//     "rhuabarb",
//     "key lime"
// ]
//
//
//
// const reversedPies = pies.slice().reverse()
// const reverseunslicepies = pies.reverse()
// pies.reverse();
// console.log(pies);
// console.log()
// console.log(reversedPies,111)



const name = "Bob,Sally,Mary";
// const namesArr = name.split("");
// console.log(namesArr);

//
//
// const pi =3.14;
//
// ['3', '14'];
//
//
// function returnDecimal(num){
//
//     return Number("."+String(num).split(".")[1])
// }
//
//
// console.log(returnDecimal(pi))

//
// const namesArr=  name.split(",");
// //
// // console.log(namesArr);
// //
// // namesArr.join("");
// //
// // console.log(namesArr,'join or not')
// //
// // const namesString = namesArr.join("_______________");
// console.log(namesString)



console.log(" ============================= !! MINI-EXERCISE 2 !!")



/*
    1. Put the first names of everyone in your row in the order they are sitting (just your half of the classroom)
    2. Log the alphabetical order of everyone in your row
    3. Log the reverse alphabetical order of everyone in your row
    4. Log everyone in the row in reverse order
    5. Log an array of just the first two students in the row (left to right)
    6. Log everyone in the row in a single string separated by spaces
    7. Log everyone in the row in a single string separated by underscores
 */



const first_name_row = ["Hung","Jason","Alexia",'jiabin'];
const first_name = "Hung,Jason,Alexia,jiabin"
var first_two = first_name_row.slice()
console.log(first_name_row.sort(),'alphabetical order');
console.log(first_name_row.sort().reverse(),'reverse alphabetical order');
console.log(first_name_row.reverse(),'reverse order');

console.log(first_two.slice(0,2),'first two')


console.log(first_name.split(",").join(" "));
console.log(first_name.split(",").join("_"));

