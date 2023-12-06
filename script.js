


const toy=document.querySelector(".toy")

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