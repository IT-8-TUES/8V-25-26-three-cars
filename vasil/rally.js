const cars = [

{
  image: "subaru.jpg",
  name: "Subaru Impreza WRC",
  text: "Legendary rally car with AWD and turbo power."
},

{
  image: "ford.jpg",
  name: "Ford Fiesta Rally1",
  text: "Modern hybrid rally monster."
},

{
  image: "audi.jpg",
  name: "Audi Quattro S1",
  text: "Revolutionized rally racing with all-wheel drive dominance."
},

{
  image: "lancia.webp",
  name: "Lancia Delta S4",
  text: "Famous for combining turbocharging and supercharging."
},

{
  image: "ford2.jpg",
  name: "Ford RS200",
  text: "Rare mid-engine rally monster built specifically for Group B."
},
{
  image: "toyota.jpg",
  name: "Toyota GR Yaris Rally1",
  text: "Fast and aggressive WRC car."
}

];

let currentCar = 0;

function showCar() {

  document.getElementById("carImage").src =
    cars[currentCar].image;

  document.getElementById("carName").innerHTML =
    cars[currentCar].name;

  document.getElementById("carText").innerHTML =
    cars[currentCar].text;
}

function nextCar() {

  currentCar++;

  if(currentCar >= cars.length) {
    currentCar = 0;
  }

  showCar();
}

function previousCar() {

  currentCar--;

  if(currentCar < 0) {
    currentCar = cars.length - 1;
  }

  showCar();
}