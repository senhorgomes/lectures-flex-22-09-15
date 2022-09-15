
/* Question 03 (stretch)

This is a STRETCH QUESTION.

Let's revisit Question 01 which had us convert an array of arrays into an object.

This time, make it support nested arrays.

The nested arrays also only contain 2 element arrays to represent key & value: [key, value].
However, this time we are allowing the value to be another array.

Non-array objects need NOT be supported/handled at all.

Examples:

- deepArrayToObject(
    [['a', 1],['b', 2],['c', [['d', 4]]]
)
  => { a: 1, b: 2, c: { d: 4 } }
- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
  => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }
  => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

*/

const deepArrayToObject = function(arr) {
    //convert an array of arrays into an object
    //loop through an array
    const emptyObject = {}
    for(const element of arr){
        // let value
        //Each array, has two elements, one should be a key and the other a value
        //Always do the easiest thing first
        //[a,1]->{a:1}
        // console.log(element[0], element[1])
        //If element[1] is an array, then loop through it and do the same
        //c = element[0]
        //[ 'd', 4 ]
        //if element is an array, loop
        //There will always be a apir
        // if(Array.isArray(element[1])){
        //     value = deepArrayToObject(element[1])//{d: 4}
        // } else {
        //     value = element[1]
        // }
        let value = Array.isArray(element[1]) ? deepArrayToObject(element[1]) : element[1];
        emptyObject[element[0]] = value; //{c: {d: 4}}
    }
    return emptyObject;
};

console.log(deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]));