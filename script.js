const navbar=document.querySelector("#nav")
function nvbr() {
    if (window.scrollY > 35) {
        navbar.style.top = "0px"
        navbar.style.backgroundColor = "blueviolet";
        navbar.style.transition = "all 1s ease";
    }
    else {
        navbar.style.backgroundColor = "";
        navbar.style.transition = "all 1s ease";
        navbar.style.top = "";
    }

}
window.addEventListener("scroll", nvbr);




fetch(" http://localhost:3000/robots")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        toy.innerHTML+=`
        <div class="toy-1">
        <div class="photo"><img src="${element.image}" alt=""></div>
        <div class="word">
            <h1>${element.name}</h1>
            <p>${element.description}</p>
            <button><a href="./details.html?id=${element.id}">VIEW DETAILS</a></button>
            <button onclick="deleteRobot(${element.id})">Delete</button>
        </div>
        </div>
        `
    });
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
        transition:".9s ease-in",
        left: 0,
        behavior: 'smooth',
        transition: "all 0.3s ease",
        duration:1
    });

})

