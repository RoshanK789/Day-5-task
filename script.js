//! Task 1 create a resume on json format:

//! syntax create a JSON:

//* var jsonname={
//*    "key":"values",
//* }


var resume={
    "name":"roshan",
    "email":"roshan1999@gmail.com",
    "phoneno":"8825814143",
    "skills":["html","css","js"],
    "address":"vellore"
}

//console.log(resume);

//! Task 2 Above Resume JSON iterate over using loops.(for,for in,for of, forEach)

//* for loop:
/*
console.log("For Loop");
console.log("");
let keys=Object.keys(resume);
let value=Object.values(resume);
for(var i=0;i<keys.length;i++)
{
    console.log(keys[i],":",value[i]);
}
*/

//* for in loop:
/*
console.log("For in Loop");
console.log("");
for(var values in resume)
{
    console.log(values,":",resume[values]);
}
*/
//* for of loop:
/*
console.log("For of Loop");
console.log("");
for(var[key,value] of Object.entries(resume))
{
    console.log(key,":",value);
}
*/

//* forEach loop:
/*
console.log("ForEach Loop");
console.log("");
Object.entries(resume).forEach(([key,value])=>(console.log(key,":",value)));
*/
