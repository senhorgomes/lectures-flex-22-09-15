//Recurssion?
//When a function calls itself
//const hello = (data)=>{
//     hello(data)
//}

const array = [[[[["Hello"]]]], ["Hi"], "Coffee"]
//console.log each string

//How do I access each element in the array?

// for(const element of array){
//     //We need to check if the element is an array
//     //If it is, loop through all elements, and console.log
//     if(Array.isArray(element)){
//         for(const item of element){
//             //If the item is an array, we need to check it again, and then loop through it
//             if(Array.isArray(item)){
//                 for(const item2 of item){
//                     console.log(item2)
//                 }
//             } else {
//                 console.log(item)
//             }
//         }
//     } else {
//         console.log(element)
//     }
//     //we need to have another check here, that that verifies if it isnt and an array
// }

const stringPrinter = (arr) =>{
    for(const element of arr){
        //We need to check if the element is an array
        //If it is, loop through all elements, and console.log
        if(Array.isArray(element)){
            stringPrinter(element);
            // for(const item of element){
            //     //If the item is an array, we need to check it again, and then loop through it
            //     if(Array.isArray(item)){
            //         for(const item2 of item){
            //             console.log(item2)
            //         }
            //     } else {
            //         console.log(item)
            //     }
            // }
        } else {
            console.log(element)
        }
        //we need to have another check here, that that verifies if it isnt and an array
    }
}
 stringPrinter(array)