const toy=document.querySelector(".toy")
let page=4;
function showData(){
fetch(" http://localhost:3000/robots")
.then(res=>res.json())
.then(data=>{
    data.slice(page-4,page).forEach(element => {
        toy.innerHTML+=`
        <div class="toy-1">
        <div class="photo"><img src="${element.image}" alt=""></div>
        <div class="word">
            <h1>${element.name}</h1>
            <p>${element.description}</p>
            <button><a href="./details.html?id=${element.id}">VIEW DETAILS</a></button>
            <button onclick="deleteRobot(${element.id})">Delete</button>
            <button onclick="updateRobots(${element.id})">Update</button>
        </div>
        </div>
        `
    });
})
}
showData();
let section_3=document.querySelector(".section3")
let load=document.querySelector(".mean");
load.addEventListener("click",()=>{
    page+=4;
    showData();
    event.target.style.display="flex"
   
})







function deleteRobot(id){
    axios.delete(`http://localhost:3000/robots/${id}`);
    window.location.reload();
}

const names=document.querySelector("#fixed");
console.log(names)
names.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
        transition: "all 0.3s ease",
        duration:1
    });

})
const navbar=document.querySelector("#nav")
function nvbr() {
    if (window.scrollY > 35) {
        navbar.style.top = "0px"
        navbar.style.backgroundColor = "rgba(138, 144, 255, 0.9)";
        navbar.style.transition = "all 1s ease";
    }
    else {
        navbar.style.backgroundColor = "";
        navbar.style.transition = "all 1s ease";
        navbar.style.top = "";
    }

}
window.addEventListener("scroll", nvbr);



let x=document.querySelector("#icon")
let was=document.querySelector(".was");
let icon=document.querySelector(".icon-none");


icon.addEventListener("click",()=>{
    was.style.display="flex";
    icon.style.display="none"

})

x.addEventListener("click",()=>{
    was.style.display="none"
    icon.style.display="flex";
})
was.addEventListener("click",(e)=>{
    if(e.target == was){
        was.style.display="none";
        icon.style.display="flex";
    }
})

let update=document.querySelector(".date")
function updateRobots(){
    update.style.display="flex"
}

const nulls=document.querySelector("#null")
nulls.addEventListener("click",()=>{
    update.style.display="none"
})


