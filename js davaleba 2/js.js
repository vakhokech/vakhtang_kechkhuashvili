/* davaleba 1 */
/* //Task 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"
 */
function checkIfItarable(object){
    if(object.isItarable == true){
        for(let i  = 0; i < object.sampleArray.length; i++)
        console.log(object.sampleArray[i])
    }else{
        console.log("provided array isn't itarable")
    }
}

let sampleObject = {
    isItarable : false,
    sampleArray : [12,63,21,34,98,57]
}
checkIfItarable(sampleObject)

/* davaleba 2 */
/* შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
წინააღმდეგ შემთხვევაში false
 */
function checkPythagoras (x,y,z){
    if(x**2 == y**2 + z**2 || y**2 == x**2 + z**2 || z**2 == x**2 + y**2) {
        return true
    }else{
        return false
    }

}
console.log(checkPythagoras(3,4,5))
/* davaleba 3 */
/* დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75" */

    let arr = [2,14,25,75,11,6]

    function minMax(sum){
        let max = sum[0];
        let min = sum[0];
        for(let i = 0; i < sum.length; i++){
            if(sum[i] > max){
                max = sum[i]; 
            }
              if(sum[i] < min){
                    min = sum[i];
                }
            }
            return "min is " + min + " max is " +max
        }
        let result = minMax(arr)
console.log(minMax(arr));
/* davaleba 4 */

/* დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle. */

function angleName(a){
if(a < 90){
    return "acute angle";
}else if(a == 90){
    return "rigth angle";
}else if(a < 180){
    return "obtuse angle";
}else if(a == 180){
    return "straight angle";
}
}
console.log(angleName(90));

/* davaleba5 */
/* დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
მიღებული მასივი დააბრუნებინეთ ფუნქციას .

0-50 = F
51-60 = E
61-70 = D
71-80 = C
81-100 = A

საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
[{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ] */

let studentsArray = [{name: 'student1', grade : 91}, {name: 'student2', grade : 71},{name: 'student3', grade : 45}]

function checkStudentGrade (students) {
    for(let i = 0; i < students.length; i++) {
        let grade = students[i].grade; 
        if (grade < 50) {
            students[i].finalResult = 'F'
        } else if (grade > 50 && grade < 60) {
             
        students[i].finalResult = 'E'
       } else if( grade > 60 && grade < 70) {
        students[i].finalResult = 'D'
       } else if (grade > 70 && grade < 80){
        students[i].finalResult = 'c'
       } else if (grade > 80 && grade < 100){
        students[i].finalResult = 'A'
       }
  }
    return students;
}
console.log(checkStudentGrade(studentsArray))