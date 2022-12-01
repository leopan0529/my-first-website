
//
// function showMultiplicationTable(num) {
//
//     for (var i = 1; i < 11; i++) {
//         s = num * i
//         console.log(s)
//     }
//
// }


// showMultiplicationTable(7)


// function randomnumbercheck(){
//
//     for(var i=0;i<10;i++){
//         num =Math.floor((Math.random()*200+20));
//         if(num%2===0){
//             console.log(`${num} is even`)
//         }
//         else {
//             console.log(`${num} is odd`)
//         }
//     }
// }
//
//
// randomnumbercheck()



// var s = 0;
// function question3(){
//     var array = []
//     for(var i=1;i<10;i++){
//
//             array.push(i);
//             //console.log(i,'i')
//             //console.log(array,1111);
//             new_one = array.join("");
//             console.log(new_one)
//             //console.log(array[i],"array[i]")
//             for(var j = 0;j<array.length;j++){
//                 array[j]= array[j]+1
//
//             }
//
//         }
//
//
// }
//
//
// question3()



// function questions5(){
//         var s =100
//     for(var i=1;i<20;i++){
//         s=s-5
//         console.log(s)
//     }
// }
//
// questions5()



// function question6(){
//
//     for(var i=0;i<50;i++){
//         if(!i%2===0){
//             if(i===27){
//                 console.log(`Yikes! Skipping number: ${i}`)
//                 continue
//             }
//             console.log(`here is an odd number:${i}`)
//         }
//     }
// }
//
// question6()



var allCones = Math.floor(Math.random() * 50) + 50;

console.log(allCones,'all cone')

var total_consale=0

do{

    var cone_sale = Math.floor(Math.random() * 5) + 1
    total_consale= cone_sale+total_consale;
    console.log(total_consale,'total_consale')
    var remaining_cone = allCones- total_consale

    //console.log(remaining_cone,'remaining_cone')
    if(cone_sale< remaining_cone && remaining_cone>0){
        console.log(`${cone_sale} is sold`)
        console.log(cone_sale,'cone<remaining')
        console.log(remaining_cone,'cone<rem')
    }else if(cone_sale > remaining_cone && remaining_cone>0){
        console.log(cone_sale,'cone_sale',111)
        console.log(`cannot sell you ${cone_sale},I only have ${remaining_cone}`,2222)
        total_consale =remaining_cone+total_consale
        console.log(total_consale,333)
        remaining_cone = allCones - total_consale
        console.log(remaining_cone,444)

    }


}
while (remaining_cone>0)
console.log('Yay! I sold them all!')
