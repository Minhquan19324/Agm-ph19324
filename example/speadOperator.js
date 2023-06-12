const food1 = ["ga " , "heo "]
const food2 = ["rau " , "qua "]

 const food3 = [...food1 , ...food2]

 console.log(food3);


 const uers0 = {
    id: 2,
    name : "name1" 
 }
 const user1 = {
    phone : "123456789",
    address: HN
 }

 const user2 = {...uers0 , ...user1}
 console.log(user2);

 const aNumber = [1, 2, 3]
 function show(...params){
    console.log(params);
 }

 show(...aNumber)
 // arrayNumber -> [1,2,3]
//...arrayNumber -> 1,2,3