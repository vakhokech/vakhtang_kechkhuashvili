/* //task 1
/*  
    დაწერეთ ფუნქცია რომელიც მიიღებს ორ რიცხვს და აღნიშნული ფუნქცია
    დააბრუნებს ამ ორი რიცხვის უდიდეს საერთო გამყოფს . 
    იგივე ფუნქცია დაწერეთ რეკურსიული ფუნცქიის გამოყენებით იპოვეთ უდიდესი საერთო გამყოფი 
    gcd(a,b)
    
*/
function gcd (a,b){
    if (a === b){
        return a;
    }else if(a>b){
        return gcd(a-b,b);
    }else{
        return gcd(a,b-a)
    }
}
console.log(gcd(98,56))

function gcdrec (a,b){
    while (a != b){
        if(a>b){
            a = a-b;
        }else if(b>a){
            b = b-a
        }
    }
    return a
}

console.log(gcdrec(9,3))
/* დაწერეთ ფუნქცია ციფრების ჯამი , sumOfDigits(n) რომელიც იღებს ერთ პარამეტრს 
და აბრუნებს გადაცემული მნიშვნელობის შემადგენელი ციფრების ჯამს . 
sumOfDigits(1312) = 1+3+1+2 = 7;

აღნიშნული დავალება შეასრულეთ ორნაირად , როგორც ჩვეულებრივი ასევე რეკურსიული
ფუნქციის გამოყენებით . 

*/

function sumOfDigits(n){
let sum = 0
while (n!= 0){
    sum = sum + n%10;
    n = Math.floor(n/10)
}
return sum
}
console.log(sumOfDigits(1312))

function sumOfDigits(n){
    if(n<10){
        return n
    }else{
        return n%10 + sumOfDigits(Math.floor(n/10))
    }
}
console.log(sumOfDigits(1312))
/* //Task 3
/*
    გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
    ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
    და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
    დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
    მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
    გვაქვს 
    დალოგეთ calculateWorkload და formatArray შედეგები; 
    !!!აუცილებლად გამოიყენეთ bind მეთოდი
*/

let factory = {
    facName : 'Volkswagen Wolfsburg Plant',
    calculateWorkload: function() {
        for(let i = 0; i < this.employeeWeeklyWorkload.length; i++){
           console.log(this.employeeWeeklyWorkload[i].workload)
        }
    },
    formatArray: function(name){
            if(name == "john"){
                this.employees[0].timeLeft = this.workTime - this.employees[0].timeSpent;
                console.log(this.employees[0]);
            }
            else if(name == "Sam"){
                this.employees[1].timeLeft = this.workTime - this.employees[1].timeSpent;
                console.log(this.employees[1]);
            }
            else if(name == "Maria"){
                this.employees[2].timeLeft = this.workTime - this.employees[2].timeSpent;
                console.log(this.employees[2]);
            }
            else if(name == "Dan"){
                this.employees[3].timeLeft = this.workTime - this.employees[3].timeSpent;
                console.log(this.employees[3]);
            }
            else if(name == "Lorelai"){
                this.employees[4].timeLeft = this.workTime - this.employees[4].timeSpent;
                console.log(this.employees[4]);
            }
        }
    
}

let factoryEmployees = {
    employees : [
        {name : "John", timeSpent : 1 } , 
        {name : "Sam", timeSpent : 3 },
        {name : "Maria", timeSpent : 2 },
        {name : "Dan", timeSpent : 4 },
        {name : "Lorelai", timeSpent : 5 }
    ],
    workTime: 5,
}

let workloadData = {
    employeeWeeklyWorkload : [
        {name : "John", workload : 40 } , 
        {name : "Sam", workload : 25 },
        {name : "Maria", workload : 28 },
        {name : "Dan", workload : 30 },
        {name : "Lorelai", workload : 31 }
    ]
}

let calculateWork = factory.calculateWorkload.bind(workloadData);
calculateWork();

let factoryWorker = factory.formatArray.bind(factoryEmployees, "Sam");
factoryWorker()
//Task 4

/*
დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.

hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 


*/
function sumOfNumbers(x,y){
    let sum = x + y ;
    console.log(sum);
}

sumOfNumbers.apply(null,[6,7]);

let sumOfNumbers = {

    fullname: function(x,y){
        console.log(x-y)
    }
}
sumOfNumbers.fullname.apply(null,[10,11])

//Task 5
/*
დაწერეთ რეკურსიული ფუნქცია checkIfEven(n) . აბრუნებს გადაცემული მნიშვნელობა
არის თუ არა ლუწი . აუცილებლად გამოიყენეთ რეკურსია

*/
function checkIfEven(n){
    if(n%2 == 0){
        return 'this number is even'
    }else{
        return 'this number is odd'
    }
}
console.log(checkIfEven(11))