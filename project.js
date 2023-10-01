const form = document.getElementById("car-form")
const titleElement=document.querySelector("#title")
const priceElement=document.querySelector("#price")
const urlElement=document.querySelector("#url")

// Starting UI OBJECT

const ui=new UI();

// Loading all events

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addCar);
}

function addCar(e){
    const title =titleElement.value;
    const price = priceElement.value;
    const url =urlElement.value;
    if (title === "" || price ===""||  url==="") {
        // For empty fields
        ui.showAlert('Please fill in the fields', 'danger')
    }
    else{
        // new car
        const newCar=new Car(title,price,url)

        ui.addCarToUI(newCar);
        //ADDING CAR TO INTERFACE
    }
    
    ui.clearInputs(titleElement,urlElement,priceElement);

    e.preventDefault();
}