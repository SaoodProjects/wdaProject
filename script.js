let waiting = document.querySelector(".changetext");
let services = document.querySelectorAll(".serviceitems");

let contents = {
    buses: document.querySelector(".contentArea")
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
            }
            else if(service.textContent === "Hotels"){
                waiting.textContent = "this is hotel";
            }
            else if(service.textContent === "Trains"){
                waiting.textContent = "this is trains";
            }
            else if(service.textContent === "Buses"){
                waiting.textContent = "this is bus";
                contents.buses.style.display = "block";
            }
            else {
                waiting.textContent = "this is airport transfer";
            }
        }
    );
});