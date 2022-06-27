const COLORS = ["red","green","brown","grey","dodgerblue","white","yellow"];
const BUTTON = document.getElementById("clickme");

export const BTN = BUTTON.addEventListener("click",() =>{
    document.body.style.backgroundColor = COLORS[GETRANDOMNUMS()];
})

const GETRANDOMNUMS = function (){
    return Math.floor(Math.random() * (COLORS.length + 1))
}

/*  */

let input = document.querySelector(".entered-list")
let addBtn = document.querySelector(".add-list")
let tasks = document.querySelector(".tasks")

input.addEventListener("keyup", ()=>{
    if(input.value != 0){
        addBtn.classList.add("active")
    }else{
        addBtn.classList.remove("active")
    }
})

addBtn.addEventListener("click", ()=> {
    if(input.value != 0){
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.innerHTML = `<p> ${input.value}<p>
        <div class="item completed">
            <div class="item-btn">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa-solid fa-circle-minus"></i>
            </div>
        </div>`
        /*  */
        tasks.appendChild(newItem);
        input.value = " "
    }else{
        alert ("hold on wait a minute, put text")
    }
})

tasks.addEventListener("click", (e)=>{
    if(e.target.classList.contains("fa-circle-minus")){
        e.target.parentElement.parentElement.parentElement.remove();
    }
})


tasks.addEventListener("click", (e)=>{
    if(e.target.classList.contains("fa-circle-check")){
        e.target.parentElement.parentElement.parentElement.classList.toggle("completed");
    }
})