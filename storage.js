function Storage() {
 
    Storage.prototype.addCarToStorage = function (newCar) {
        
        let cars = this.getCarsFromStorage();
        //yeni aracın yüklenmesi için
        cars.push(newCar);
 
        //local stroge tekrardan yazmamız gerekiyor
        localStorage.setItem("cars", JSON.stringify(cars));
 
    }
 
    Storage.prototype.getCarsFromStorage = function () {
        //storage içinde araba öğesi varsa onları alıyoruz
        
        let cars;
 
        if (localStorage.getItem("cars") === null) {
            cars = [];
        }
        else {
            cars = JSON.parse(localStorage.getItem("cars"));
        }
        return cars;
 
    }

    Storage.prototype.deleteCarFromStorage=function(carTitle){
        let cars = this.getCarsFromStorage();

        cars.forEach(function(car,index){
            cars.splice(index,1)
            localStorage.setItem("cars",JSON.stringify(cars))
        })
    }

    Storage.prototype.clearAllCarsFromStorage = function () {
        localStorage.removeItem("cars");
    }
    
}

