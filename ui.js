function UI(){

}

UI.prototype.addCarToUI= function(newCar){
    const carList = document.getElementById("cars")

    carList.innerHTML+=`<td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
    <td>${newCar.title}</td>
    <td>${newCar.price}</td>
    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
  </tr>`
}

UI.prototype.clearInputs=function(element,element2,element3){
    element.value="";
    element2.value="";
    element3.value="";
    
}