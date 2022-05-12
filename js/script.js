/* davaleba 1 */

var firstName = "ანა"
var asaki = 28
var person = "ლევანი"
var age = 21
var asakisSxvaoba = asaki - age
var text = firstName + " " + person +"ზე" + " " + asakisSxvaoba + " " +"წლით უფროსია"
console.log(asakisSxvaoba)
console.log(text)

/* davaleba 2 */
                     
var studentsArray = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
                          
console.log(studentsArray.length / 2 - 1)

var middleStundentsName = studentsArray [4]

console.log(middleStundentsName)

/* davaleba 3 */

var students = {
    firstName: "ვახო",
    lastName: "კეჩხუაშვილი",
    age:32,
    subjectsArray:["since", "math","astronomy","archeology","history"],
    roomMate: {
        fullName:"თორნიკე სამხარაძე",
        age: 29
    },
    fullName: "ვახო კეჩხუაშვილი"
}
var result = students.fullName + " " + "არის" + " " + students.age + " " + "წლის და მისი რუმმეითი არის" + " " + students.roomMate.fullName

console.log(result)

for(let i = 0; i<students.subjectsArray.length; i++)
    console.log(students.subjectsArray[i])

/* დავალება 4 */

var fruitsArray = ["Banana", "Orange", "Apple", "Mango", 2, 12,]

    let i = 0;
    
    while(i < fruitsArray.length && typeof fruitsArray[i] === "string"){
        console.log(fruitsArray[i]);
        i++
        
    }

/* davaleba 5 */    


var numbersArray = [ 12 , 23 , 43 , 11 , 9 , 2 , 121 , 90]
for(let i = 0; i < numbersArray.length ; i++)
if(numbersArray[i] > 31 && numbersArray[i] % 2 == 0 ){
    console.log(numbersArray[i] +"Element is greater than provided value and is EVEN")
} else if (numbersArray[i] < 31 && numbersArray[i] % 2 != 0 ){
    console.log(numbersArray[i] + "Element is less than provided value and is ODD")
}