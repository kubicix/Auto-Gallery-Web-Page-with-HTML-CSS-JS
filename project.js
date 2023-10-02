const form = document.getElementById("car-form")
const titleElement=document.querySelector("#title")
const priceElement=document.querySelector("#price")
const urlElement=document.querySelector("#url")

// Starting UI OBJECT

const ui=new UI();
const storage=new Storage();

// Loading all events

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addCar);

    document.addEventListener("DOMContentLoaded",function(){
        let cars=storage.getCarsFromStorage();
        ui.loadAllCars(cars);
    })
}

function addCar(e){
    const title =titleElement.value;
    const price = priceElement.value;
    const url =urlElement.value;
    if (title === "" || price ===""||  url==="") {
        // For empty fields
        ui.displayMessages('Please fill in all the fields', 'danger');
    }
    else{
        // new car
        const newCar=new Car(title,price,url)

        ui.addCarToUI(newCar);

        storage.addCarToStorage(newCar);

        ui.displayMessages("Car added successfully","success")
        //ADDING CAR TO INTERFACE
    }
    
    ui.clearInputs(titleElement,urlElement,priceElement);

    e.preventDefault();
}