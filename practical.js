// function jaggery_tea(){
//     return "cup of tea"
// }

// result =jaggery_tea()

// console.log(jaggery_tea())


// function jaggery_tea(tea_type){
//     return tea_type+"cup of tea"
// }
// console.log(jaggery_tea("full "))

// const jaggery_tea =(tea_type)=>{
//     console.log(tea_type+" cup of tea")
// }
// jaggery_tea("cutting")

// name = `Sumit`
// console.log(`my name is ${name}`)
// n=prompt("name")
// name = "gautam"
// console.log(name.length)
// console.log(name.trim())
// console.log(name.toUpperCase().trim())
// console.log(name.toLowerCase())
// console.log(name.replace("m","mi"))
// console.log(name.slice(0,4))


// arr = [11,43,13,42,50]
// for (i=0;i<=4 ;i++){
//     console.log(arr[i])
// }
// console.log(arr)
// console.log(arr[1])


details = [
    {name:"sandesh",math:70,eng:80,phy:90},
    {name:"samrudhi",math:70,eng:60,phy:80},
    {name:"pratima",math:60,eng:50,phy:40},
    {name:"snehal",math:30,eng:40,phy:40},

]
//calculate percentage
function per(){
    for(i in details){
        console.log(details[i])
        result = ((details[i].math+details[i].eng+details[i].phy)/300)*100
        console.log("result = ",result)
    }
//  perentage =${details} 
}
per()
// for (i=0;i<=3 ;i++){
//     console.log(`my name is ${details[i].name} and age is ${details[i].age}`)
//     // console.log(details[i])
// }

// for ()
// retrive 














