let waiting = document.querySelector(".changetext");
let services = document.querySelectorAll(".serviceitems");

let contents = {
    buses: document.querySelector(".contentArea"),
    trains: document.querySelector(".masterdiv"),
    flights: document.querySelector(".center"),
    hotels: document.querySelector(".dashboard-container"),
    cabs: document.querySelector(".masterdiv_c")
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
                waiting.textContent = "Take Off with the Best Deals on Flights";
                contents.flights.style.display = "block";
            }
            else if(service.textContent === "Hotels"){
                waiting.textContent = "Best stays here";
                contents.hotels.style.display = "flex";
            }
            else if(service.textContent === "Trains"){
                waiting.textContent = "Comfortable Train Journeys, Booked for You";
                contents.trains.style.display = "block";
            }
            else if(service.textContent === "Buses"){
                waiting.textContent = "Affordable Bus Tickets for Every Destination";
                contents.buses.style.display = "block";
            }
            else {
                waiting.textContent = "Stress-Free Airport Transfers";
                contents.cabs.style.display = "inline-block";
            }
        }
    );
});

// redirect to login page
let signin = document.querySelector(".signin");
signin.addEventListener(
    "click",
    () => {
        window.open("https://shreyansh-patil.github.io/tranzyLoginPage/", "_blank");
    }
);