// let name = "Deepak"
// const gameName = new String("Minecraft");
// console.log(name[0]);
// console.log(gameName[2]);

// let myDate =new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.getDay())
// console.log(myDate.getDate())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())


const coding =["js", "ruby","java","python","cpp"]

// const values =coding.forEach( (item) => {
//     console.log(item);          //forEach does not return any valur
//                                 // even if return keyword is used.
// })


const nums=[1,2,3,4,5,6,7,8]
const newNums =nums.filter( (num) => num>4)
console.log(newNums);  //[ 5, 6, 7, 8 ]


const newarr =nums.filter( (num) => {
    return num>4                //we have to use return keyword to explicitly
                                //return the value
})
console.log(newarr);  //[ 5, 6, 7, 8 ]

const total = nums.reduce( (accumulator,current) =>{
    return accumulator + current;
},0);

console.log(`the total sum of arary is ${total}`);
