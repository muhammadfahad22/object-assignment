// 1.
//  items = [{name: "juice", price: 50, quantity: 3},
//   {name: "cookie", price: 30, quantity: 9},
//    {name: "shirt", price: 880, quantity: 1},
//     {name: "pen", price: 100, quantity: 2}];

// var sumItems = () => {
// var sum = 0;
// items.forEach(function(item) {
//     let calculation = item.price * item.quantity;
//     sum += calculation;
// })
// console.log(sum);
// };
// sumItems();


// 2.
// var data={
//     name : "Fahad",
//     email : "muhammadfahad647@gmail.com",
//     password : "pass",
//     age : "22",
//     gender : "male",
//     city : "Karachi",
//     country : "Pakistan",
// }
// console.log("data.age is existing" + (Boolean(data.age)));
// console.log("data.country is existing" + (Boolean(data.country)));
// console.log("data.fullName is existing" + (Boolean(data.fullame)));



3. 
function Person (personName, personAge) {
    this.name = personName,
    this.age = personAge,

     this.greet = function () {
        console.log('hello');
    }
}
var person1 = new Person("fahad",22);
var person2 = new Person("hamza", 12);
var person3 = new Person("Muzamil", 25)
console.log(person1.name);
console.log(person2.name);
console.log(person3.name);




// 4.
// var personEducation = document.getElementById("education");
// var personProfession = document.getElementById("profession");
// var personGender = document.getElementById("x","y");
// var personAddress = "abc,123";
// function Census(personName, personGender, personEducation, personProfession, personAddress){
//     this.name = personName,
//     this.age = personGender,
//     this.address = personAddress,
//     this.education = personEducation,
//     this.profession = personProfession
   
// }
// var person1 = new Census("Fahad", personGender, personEducation, personProfession, personAddress);
// var person2 = new Census("hamza", personGender, personEducation, personProfession, personAddress);
// var person3 = new Census("mazamil", personGender, personEducation, personProfession, personAddress);

// console.log(person1);
// console.log(person2);
// console.log(person3);