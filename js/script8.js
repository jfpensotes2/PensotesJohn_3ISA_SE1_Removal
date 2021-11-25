let mySchool = {name: "UST", location: "Manila", population: "40000"}


let offer = function() {
    console.log("UST offers architecture, nursing, information systems...");
};
let ust = offer.bind(mySchool);

ust();