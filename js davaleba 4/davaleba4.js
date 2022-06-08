//Task 1

/*
დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
მაგალითად
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
უმჯობესია გამოიყენოთ reduce მეთოდი

*/
function max(arr){
    for(let x in arr){
        if(arr[x] === 5){
        console.log(`${x} - ${arr[x]}`)}}
}
let arr1=['3', 'a', 'a', 'a', '2', '3', 'a', '3', 'a', '2', '4', '9', '3'];
let result = arr1.reduce((acc,element) =>{
    if(element in acc){
        acc[element]++
    }else{
        acc[element] = 1
    } return acc
},{})
console.log(result)
max(result)

/*
Task 2 : 
დაწერეთ ფუნქცია რომელიც იღებს რაღაც ციფრების მიმდევრობას (სტრინგად ან რიცხვად) პარამეტრად , ჩასვით ტირეები (-) ყოველ ორ ლუწ რიცხვს შორის. 
მაგალითად 025468 უნდა დაგვიბრუნდეს როგორც 0-254-6-8


*/

let numArray = [0,2,5,4,6,8]

function result (arr){
    for(let i = 0 ; i < arr.length-1 ; i++){
        if(arr[i] % 2 == 0 && arr[i+1] % 2 == 0){
          arr[i] += "-";
        }
    }
    let resultarr = arr.join("");
    return resultarr;
}
console.log(result(numArray))

/*
Task 3 : 
დაწერეთ ფუნქცია რომელიც იღებს ორ მასივს და უნდა დაგვიბრუნოს 
ამ ორი მასივის დამერჯილი მასივი , გაერთიანებული , არადუბლირებული მნიშვნელობებით .
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

შედეგი უნდა იყოს : [1,2,3,30]

*/
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

function marge(arr1,arr2){
    let arr = arr1.concat(arr2)
    let mass = [];
    for (let i = 0; i<arr.length; i++)
    if(mass.indexOf(arr[i]) === -1){
        mass.push(arr[i])
}
console.log(mass)
}
marge(array1,array2)

/*
Task 4 : 
ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
გამოიყენეთ map

*/

function readyToPutInTheDOM(arr){
    return arr.map((celebrity) => {
        return "<h1>${celebrity.name}</h1><h2>${celebrity.age}</h2>"
    })
  }
      let celebrity= [
      {name: "Angelina Jolie",age: 80},
      {name: "Eric Jones",age: 2},
      {name: "Paris Hilton",age: 5},
      {name: "Kayne West",age: 16},
      {name: "Bob Ziroll", age: 100}
  ]; 
  console.log(readyToPutInTheDOM(celebrity));

  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]



  /* Task 5 */

  /* 
  გვაქვს ფუნქცია sumOfDifferences(arr) , რომელიც იღებს მასივს . 
  პროგრამამ მასივი უნდა დაალაგოს კლებადობით და შემდეგ უნდა დაგვითვალოს
  მეზობელი ელემენტების სხვაობების ჯამი . 
  მაგ : [2, 1, 10]  -->  9 , რაც ნიშნავს დავალაგებდით [10,2,1] კლებადად
  შემდეგ  (10-2) + (2-1) = 8 + 1 = 9

  სორტირების ფუნქცია დაწეროთ თქვენით ან გამოიყენოთ Array.sort() მეთოდი რომელიც
  პარამეტრად იღებს compareFn ფუნქციას , შედარების ქოლბექს .



  */
  let arr = [2,1,10];
  function sumOfDifferences (arr) {
      let sortArray = [];
      while(arr.length !==0){
          sortArray.push(Math.max(...arr));
          arr.splice(arr.indexOf(Math.max(...arr)),1);
      }
      sum = 0;
      for(let i = 0; i <sortArray.length-1;i++){
      sum += sortArray[i] - sortArray[i+1]
  }
  console.log(sum,sortArray);
}
sumOfDifferences (arr);