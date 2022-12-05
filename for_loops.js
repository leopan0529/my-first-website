
//
// function showMultiplicationTable(num) {
//
//     for (var i = 1; i < 11; i++) {
//         s = num * i
//         console.log(`${num} x ${i}=${s}`)
//     }
//
// }
//
//
//  showMultiplicationTable(7)
//
//
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


// function question_repear(){
//     for (let i =0; i<9;i++){
//         let num =i+1;
//         let result =num.toString()
//         console.log(result,'i')
//         for(let j =1; j<=i;j++){
//             console.log(result,'j')
//             result = result+num
//         }
//         console.log(result,'final')
//     }
// }
//
// question_repear()

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


// while(true){
//     let userNum = prompt("enter an odd number between 1 an 50");
//     userNum = parseFloat(userNum);
//     if(userNum % 2 === 1 && userNum <= 50 && userNum>=1){
//         for (let i =1; i<50; i++){
//             if (i === userNum){
//                 console.log(`Yikes, Skipping ${i}`);
//                 continue
//             }
//             console.log(`odd number: ${userNum}`)
//         }
//         break
//     }
//
//
// }



var allCones = Math.floor(Math.random() * 50) + 50;

console.log(allCones,'all cone')

var total_consale=0

//var cone_sale = Math.floor(Math.random() * 5) + 1
//var remaining_cone = allCones- total_consale

do {
    var cone_sale = Math.floor(Math.random() * 5) + 1
    total_consale = cone_sale + total_consale;
    remaining_cone = allCones - total_consale
    //console.log(cone_sale, 'cone_sale')
    //console.log(remaining_cone,'remaining_cone')
    //console.log(remaining_cone,'remaining')
    if (remaining_cone === 0 || total_consale === allCones) {
        console.log(`${cone_sale} is sold, total_consale so far is ${total_consale}`)
        console.log(`I have remaining of ${remaining_cone} cone left`)
        console.log('Yay! I sold them all!')
        break
    } else if (cone_sale <= remaining_cone && remaining_cone >= 0) {

        console.log(`${cone_sale} is sold,total_consale is ${total_consale}`);
        remaining_cone = allCones - total_consale
        console.log(`${remaining_cone} remaining cone amount`)
        //console.log(`${remaining_cone}`, 'remaining')
        //console.log(`${remaining_cone} is sold`,222);
        //final_remaining_cone = allCones - total_consale
        //console.log(`${final_remaining_cone} `, 'remaining',555);

    } else if (cone_sale > remaining_cone && cone_sale <total_consale && remaining_cone>0) {
        //console.log(cone_sale,'cone_sale',111)
        console.log(`cannot sell you ${cone_sale},I only have ${remaining_cone}`)
        total_consale = remaining_cone + total_consale
        //console.log(total_consale,'total cone_sale')
        console.log(`${remaining_cone} is sold,`)
        remaining_cone = allCones - total_consale
        console.log(`remaining_cone_quantity has ${remaining_cone} left`)
        console.log(`${cone_sale} is sold, total_consale so far is ${total_consale}, I have remaining of ${remaining_cone} cone left`)
        console.log('Yay! I sold them all!')
        break
    } else if (cone_sale > remaining_cone && cone_sale < total_consale && remaining_cone <=0) {
        if( remaining_cone<0) {
            console.log(`cannot sell you ${cone_sale},I only have 0 cone`)
            console.log(total_consale,'total conesale')
            break
        }
        //console.log('Yay! I sold them all!')
        else if(total_consale === allCones) {
            console.log(`total_consale is ${total_consale} `)
            console.log('Yay! I sold them all!')
            break
        }

        }


    } while (remaining_cone > 0)







// let conesToSell = Math.floor(Math.random() * 50) + 50;
//
// do {
//     let conestoBuy =  cone_sale = Math.floor(Math.random() * 5) + 1;
//     if (conestoBuy <= conesToSell){
//         console.log(`${conestoBuy} cones sold`);
//         conesToSell -= conestoBuy;
//     }
//     else {
//         console.log(`Cannot sell you ${conestoBuy} cones, I have only ${conesToSell}`)
//         console.log(`${conesToSell} cones sold`);
//         conesToSell -= conestoBuy;
//         console.log(`yay! I have sold them all`);
//         break
//
//     }
//
// }
// while (conesToSell >0)
//


