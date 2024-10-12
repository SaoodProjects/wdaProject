let waiting = document.querySelector(".changetext");
let services = document.querySelectorAll(".serviceitems");

let contents = {
    buses: document.querySelector(".contentArea"),
    trains: document.querySelector(".masterdiv"),
    flights: document.querySelector(".center"),
    hotels: document.querySelector(".hide"),
    cab: document.querySelector(".masterdiv_c")
}


let hideAll = () => {
    for(let key in contents){
        contents[key].style.display = "none";
    }
}

services.forEach((service) => {
    service.addEventListener(
        "click",
        () => {
            hideAll();

            if(service.textContent === "Flights"){
                waiting.textContent = "Find the best flights";
                contents.flights.style.display = "block";
            }
            else if(service.textContent === "Hotels"){
                waiting.textContent = "this is hotel";
                contents.hotels.style.display = "block";
            }
            else if(service.textContent === "Trains"){
                waiting.textContent = "this is trains";
                contents.trains.style.display = "block";
            }
            else if(service.textContent === "Buses"){
                waiting.textContent = "this is bus";
                contents.buses.style.display = "block";
            }
            else {
                waiting.textContent = "this is airport transfer";
                contents.cab.style.display = "block";
            }
        }
    );
});