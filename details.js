let id=new URLSearchParams(window.location.search).get("id");
const num=document.querySelector(".num")
console.log(id)
fetch(` http://localhost:3000/robots/${id}`)
.then(res=>res.json())
.then(data=>{
   num.innerHTML+=`
   <div class="toy-1">
        <div class="photo"><img src="${data.image}" alt=""></div>
        <div class="word">
            <h1>${data.name}</h1>
            <p>${data.description}</p>
            <button><a href="./details.html?id=${data.id}">VIEW DETAILS</a></button>
          
        </div>
     </div>
   `
})