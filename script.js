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
            <div class="button"><a href="./details.html?id=${element.id}">VIEW DETAILS</a></div>
        </div>
        </div>
        `
    });
})
