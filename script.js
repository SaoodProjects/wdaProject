let waiting = document.querySelector(".changetext");

let services = document.querySelectorAll(".services button");

services.forEach((service) => {
    service.addEventListener(
        "click",
        () => {
            if(service.textContent === "Flights"){
                waiting.textContent = "find the best flights"
            }
            else if(service.textContent === "Hotels"){
                waiting.textContent = "this is hotel";
            }
            else if(service.textContent === "Trains"){
                waiting.textContent = "this is trains";
            }
            else if(service.textContent === "Buses"){
                waiting.textContent = "this is bus";
            }
            else {
                waiting.textContent = "this is airport transfer";
            }
        }
    );
});