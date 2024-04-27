let basket=JSON.parse(localStorage.getItem("basket"))
const tableBody=document.querySelector('.tableBody')
function addingToTable(basket) {
    innerHTML=""
    for (let i = 0; i < basket.length; i++) {
    innerHTML+=
    `
    <tr>
    
       <td><img width="100px" src="${basket[i].el.img}" alt=""></td>
       <td>${basket[i].el.name}</td>
       <td>${basket[i].count}</td>
       <td>${basket[i].totalPrice}</td>
       <td><i style="margin-left:15px; background:red; color:white;border-radius:5px;padding:5px; cursor:pointer;" onclick="removeProduct(${basket[i].el.id})" class="fa-solid fa-x"></i></td>
    </tr>
    `
    }
    tableBody.innerHTML=innerHTML
}
addingToTable(basket)
function removeProduct(id) {
    let target=basket.find((e)=>e.el.id==id)
    let indexOfTarget=basket.indexOf(target)
    basket.splice(indexOfTarget,1)
    localStorage.setItem("basket",basket)
    addingToTable(basket)
}