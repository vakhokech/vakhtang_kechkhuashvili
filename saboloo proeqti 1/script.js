const url = "https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json";
const amazon= document.getElementById("amazon");
const walmart= document.getElementById("walmart");
const apple= document.getElementById("apple");
const american= document.getElementById("american");
const dataBase=[]
const cargoAmerican = document.getElementById("count_result_express")
const cargoApple = document.getElementById("count_result_apple")
const cargoAmazon = document.getElementById("count_result_amazon")
const cargoWalmart = document.getElementById("count_result_walmart")

function fetchData(){
    loader.style.display = "block";
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        dataBase.push(...data);
        loader.style.display = "none";
    })
    .catch((err) => console.log(err));
    
}

console.log(dataBase)
window.addEventListener("load", () => {
     fetchData();
   });

if (amazon) {
    amazon.addEventListener('click', () => {
        dataBase.forEach((catchName) => {
            if (catchName.name === "Amazon.com"){
                document.getElementById("cargobox").value = catchName.boxes;

                let countCargos = caunt(catchName.boxes);
                cargoAmazon.innerHTML = countCargos;
            }
            });
      });
  }
  if (walmart) {
    walmart.addEventListener('click', () => {
        dataBase.forEach((catchName) => {
            if (catchName.name === "Walmart"){
                document.getElementById("cargobox").value = catchName.boxes;

                let countCargos = caunt(catchName.boxes);
                cargoWalmart.innerHTML = countCargos;
            }
            });
      });
  }
  if (apple) {
    apple.addEventListener('click', () => {
        dataBase.forEach((catchName) => {
            if (catchName.name === "Apple"){
                document.getElementById("cargobox").value = catchName.boxes;
                let countCargos = caunt(catchName.boxes);
                cargoApple.innerHTML = countCargos;
            }
            });
      });
  }
  if (american) {
    american.addEventListener('click', () => {
        dataBase.forEach((catchName) => {
            if (catchName.name === "American Express"){
                document.getElementById("cargobox").value = catchName.boxes;

              
                let countCargos = caunt(catchName.boxes);
                cargoAmerican.innerHTML = countCargos;
            }
            });
      });
  }

  function caunt (y){
    let arr = y.split(",");
    let val = arr.map(el => parseInt(el));
    let sum = val.reduce((acc,ele)=>acc + ele);
    return Math.ceil(sum/10);
}